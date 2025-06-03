import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";
import { categories } from "../../data/categories";
import { createEntry, updateEntry } from "../../services/entries.services";

type Props = {
  onAdd: () => void;
  item?: Item | null;
};

let objectTitles: string[] = Object.keys(categories);

export const InputArea = ({ onAdd, item }: Props) => {
  const [dateField, setDateField] = useState(
    item ? item.date.toISOString().split("T")[0] : ""
  );
  const [categoryField, setCategoryField] = useState(item ? item.category : "");
  const [titleField, setTitleField] = useState(item ? item.title : "");
  const [valueField, setValueField] = useState(item ? `${item.value}` : "");

  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(dateField),
      category: categoryField,
      title: titleField,
      value: parseFloat(valueField),
    };
    if (item) {
        updateEntry(item._id || "", newItem).then((res) => {
        onAdd();
      });
    } else {
      createEntry(newItem).then((res) => {
        onAdd();
      });
    }
  };

  const inputValidation = () => {
    if (dateField == "") {
      alert("O Campo DATA precisa ser preenchido!");
    }
    if (categoryField == "") {
      alert("Você precisa especificar uma categoria!");
    }
    if (titleField == "") {
      alert("Você precisa especificar um titulo!");
    }
    if (valueField == "") {
      alert("Você precisa especificar um valor!");
    } else {
      handleAddEvent();
    }
  };

  return (
    <C.Container>
      <label htmlFor="inputDate">
        Data: <br />
        <input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </label>

      <label htmlFor="select">
        Categoria: <br />
        <select
          name=""
          id="select"
          required
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <option value={""} disabled></option>
          {objectTitles.map((key, index) => (
            <option value={key} key={index}>
              {categories[key].title}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="inputTitle">
        Titulo: <br />
        <input
          type="text"
          id="title"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </label>
      <label htmlFor="inputValue">
        Valor: <br />
        <input
          type="number"
          id="value"
          value={valueField}
          onChange={(e) => setValueField(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <br />
        <button
          className="submit submit2"
          type="submit"
          onClick={inputValidation}
        >
          {item ? "Atualizar" : "Adicionar"}
        </button>
      </label>
    </C.Container>
  );
};
