import { useState, useEffect } from "react";
import * as C from "../../App.styles";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { filterListByMonth, getCurrentMonth } from "../../helpers/dateFilters";
import { TableArea } from "../../components/TableArea";
import { InfoArea } from "../../components/InfoArea";
import { InputArea } from "../../components/InputArea";
import LogoPoupaMais from "../../assets/LogoPoupaMais"; // ajuste o caminho se necessário

import "../../App.css";
import { deleteEntry, getAllEntries } from "../../services/entries.services";
import Modal from "../../components/Modal";

const Home = () => {
  const [orderByDate, setOrderByDate] = useState(false);
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [item, setItem] = useState<Item | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getEntries();
  }, []);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth, orderByDate));
  }, [list, currentMonth, orderByDate]);

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
    getEntries();
    setIsOpen(false);
    setItem(null);
  };

  const handleDelItem = (id: string) => {
    deleteEntry(id).then((res) => {
      getEntries();
    });
  };

  const handleEditItem = (item: Item) => {
    setIsOpen(true);
    setItem(item);
  };

  const getEntries = () => {
    getAllEntries().then((res) => {
      if (res?.data?.length) {
        let arr: any = [];
        res.data.map((item: any) => {
          arr.push({
            ...item,
            date: new Date(item.date),
          });
        });
        setList(arr);
      } else {
        setList([]);
      }
    });
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          <LogoPoupaMais />
        </C.HeaderText>
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
  );
};

export { Home };
