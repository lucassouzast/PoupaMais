// React e contexto
import { useContext, useState, useEffect } from "react";
import { EntriesContext } from "../../contexts/EntriesContext";

// Tipos e helpers
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { filterListByMonth, getCurrentMonth } from "../../helpers/dateFilters";

// Serviços
import { deleteEntry } from "../../services/entries.services";

// Componentes
import * as C from "./styles";
import { TableArea } from "../../components/TableArea";
import { InfoArea } from "../../components/InfoArea";
import { InputArea } from "../../components/InputArea";
import Modal from "../../components/Modal";
import { SideBar } from "../../components/SideBar/SideBar";

// Assets
import LogoPoupaMais from "../../assets/LogoPoupaMais"; 
import "../../App.css";


const Home = () => {
  const [orderByDate, setOrderByDate] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [item, setItem] = useState<Item | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const {entriesList, loadEntries} = useContext(EntriesContext)


  useEffect(() => {
    setFilteredList(filterListByMonth(entriesList, currentMonth, orderByDate));
  }, [entriesList, currentMonth, orderByDate]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = () => {
    loadEntries();
    setIsOpen(false);
    setItem(null);
  };

  const handleDelItem = (id: string) => {
    deleteEntry(id).then((res) => {
      loadEntries();
    });
  };

  const handleEditItem = (item: Item) => {
    setIsOpen(true);
    setItem(item);
  };


  return (
    <>
      <SideBar />
      <C.Container>
        <C.Header>
          <LogoPoupaMais/>
        </C.Header>
        <C.Body>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />
          <InputArea onAdd={handleAddItem} />
          <TableArea
            functionSetDateOrder={() => {
              setOrderByDate(!orderByDate);
            }}
            list={filteredList}
            handleDelItem={(id: string) => {
              console.log(id);
            }}
            handleEditItem={handleEditItem}
          />
        </C.Body>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Editar Item"
        >
          <div>
            <InputArea
              item={item}
              onAdd={handleAddItem}
              onDelete={(id) => {
                if (id) {
                  handleDelItem(id);
                } else {
                  console.log("No item to delete");
                }
                setIsOpen(false);
                setItem(null);
              }}
            />
          </div>
        </Modal>
      </C.Container>
    </>
  );
};

export { Home };
