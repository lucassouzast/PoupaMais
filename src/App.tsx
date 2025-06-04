import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilters";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

import "./App.css";
import { getAllEntries } from "./services/entries.services";
import Modal from "./components/Modal";

const App = () => {
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
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

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
    console.log(currentMonth);
  };

  const handleAddItem = () => {
    getEntries();
    setIsOpen(false);
    setItem(null);
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
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
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
          list={filteredList}
          handleDelItem={(id: string) => {
            console.log(id);
          }}
          handleEditItem={(item: Item) => {
            setIsOpen(true);
            setItem(item);
          }}
        />
      </C.Body>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Editar Item"
      >
        <div>
          <InputArea item={item} onAdd={handleAddItem} />
        </div>
      </Modal>
    </C.Container>
  );
};

export default App;
