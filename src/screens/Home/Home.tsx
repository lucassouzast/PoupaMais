// React e contexto
import { useContext, useState, useEffect } from "react";
import { EntriesContext } from "../../contexts/EntriesContext";

// Tipos e helpers
import { Item } from "../../types/Item";
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
import { CategoryItem } from "../../types/CategoryItem";

const Home = () => {
  const [orderByDate, setOrderByDate] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [item, setItem] = useState<Item | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { entriesList, loadEntries } = useContext(EntriesContext);

  const fixedCategories: CategoryItem[] = [
    { title: "Alimentação", color: "blue", expense: true },
    { title: "Aluguel", color: "brown", expense: true },
    { title: "Salário", color: "green", expense: false },
  ];

  const [userCategories, setUserCategories] = useState<CategoryItem[]>([]);

  // Junta categorias fixas + dinâmicas
  const allCategories = [...fixedCategories, ...userCategories];


  // Carrega entradas e categorias ao montar o componente
  useEffect(() => {
    loadEntries();
  }, []);

  // Atualiza a lista filtrada
  useEffect(() => {
    setFilteredList(filterListByMonth(entriesList, currentMonth, orderByDate));
  }, [entriesList, currentMonth, orderByDate]);

  // Calcula receitas e despesas
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let entry of filteredList) {
      const cat = allCategories.find((c) => c.title === entry.category);

      if (cat) {
        if (cat.expense) expenseCount += entry.value;
        else incomeCount += entry.value;
      } else {
        expenseCount += entry.value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList, allCategories]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = () => {
    loadEntries();
    setIsOpen(false);
    setItem(null);
  };

  const handleDelItem = (id: string) => {
    deleteEntry(id).then(() => loadEntries());
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
          <LogoPoupaMais />
        </C.Header>
        <C.Body>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />

          <InputArea
            onAdd={handleAddItem}
            fixedCategories={fixedCategories}
            onNewCategory={(newCat: CategoryItem) =>
              setUserCategories((prev) => [...prev, newCat])
            }
          />

          <TableArea
            functionSetDateOrder={() => setOrderByDate(!orderByDate)}
            list={filteredList}
            handleDelItem={handleDelItem}
            handleEditItem={handleEditItem}
            allCategories={allCategories} // <- passa aqui
          />
        </C.Body>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Editar Item"
        >
          <InputArea
            item={item}
            onAdd={handleAddItem}
            onDelete={(id) => {
              if (id) handleDelItem(id);
              setIsOpen(false);
              setItem(null);
            }}
            fixedCategories={fixedCategories}
            onNewCategory={(newCat: CategoryItem) =>
              setUserCategories((prev) => [...prev, newCat])
            }
          />
        </Modal>
      </C.Container>
    </>
  );
};

export { Home };
