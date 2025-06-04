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
        setValueField("");
        setTitleField("");
        setCategoryField("");
        setDateField("");
        alert("Item adicionado com sucesso!");
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
      <C.Label htmlFor="inputDate">
        Data:
        <C.Input
          type="date"
          id="inputDate"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.Label>

      <C.Label htmlFor="select">
        Categoria:
        <C.Select
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
        </C.Select>
      </C.Label>

      <C.Label htmlFor="title">
        Título:
        <C.Input
          type="text"
          id="title"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.Label>

      <C.Label htmlFor="value">
        Valor:
        <C.Input
          type="number"
          id="value"
          value={valueField}
          onChange={(e) => setValueField(e.target.value)}
        />
      </C.Label>

      <C.Label>
        <br />
        <C.Button type="button" onClick={inputValidation}>
          {item ? "Atualizar" : "Adicionar"}
        </C.Button>
      </C.Label>
    </C.Container>
  );
};
