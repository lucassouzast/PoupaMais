import * as C from "./styles";
import { NewItem } from "../../types/Item";
import { useState } from "react";
import { createEntry, updateEntry } from "../../services/entries.services";
import { CategoryItem } from "../../types/CategoryItem";

import { SelectCategory } from "../SelectCategories";

type Props = {
  onAdd: () => void;
  onDelete?: (id?: string) => void;
  item?: NewItem | null;
  onNewCategory: (cat: CategoryItem) => void;
};

export const InputArea = ({ onAdd, onDelete, item = null }: Props) => {
  const [dateField, setDateField] = useState(
    item ? item.date.toISOString().split("T")[0] : ""
  );
  const [titleField, setTitleField] = useState(item ? item.title : "");
  const [valueField, setValueField] = useState(item ? `${item.value}` : "");
  const [categoryField, setCategoryField] = useState(item ? item.category : "");

  const handleAddEvent = () => {
    let newItem: NewItem = {
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
        console.log(newItem);
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
    if (
      dateField == "" ||
      categoryField == "" ||
      titleField == "" ||
      valueField == ""
    ) {
      alert("Todos os campos precisam ser preenchidos!");
    } else {
      handleAddEvent();
    }
  };

  return (
    <>
      <C.Container update={item !== null}>
        <C.Label htmlFor="inputDate">
          Data:
          <C.Input
            type="date"
            id="inputDate"
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
          />
        </C.Label>
        <C.Label style={{flex: 2}}>
          Categoria:
          <SelectCategory
            value={categoryField}
            onChange={(val) => setCategoryField(val)}
          />
        </C.Label>

        <C.Label htmlFor="title" style={{flex: 2}}>
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
        {item === null && (
          <C.ButtonLabel>
            <C.Button type="button" onClick={inputValidation}>
              Adicionar
            </C.Button>
          </C.ButtonLabel>
        )}
      </C.Container>

      {item !== null && (
        <C.RowLabels>
          <C.Button
            type="button"
            onClick={() => {
              onDelete && onDelete(item._id || "");
            }}
            variant={"danger"}
          >
            Remover
          </C.Button>
          <C.Button type="button" onClick={inputValidation}>
            Atualizar
          </C.Button>
        </C.RowLabels>
      )}
    </>
  );
};
