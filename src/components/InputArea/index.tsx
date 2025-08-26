import * as C from "./styles";
import { NewItem } from "../../types/Item";
import { useEffect, useState } from "react";
import { categories } from "../../data/categories";
import { createEntry, updateEntry } from "../../services/entries.services";
import { CategoryItem } from "../../types/CategoryItem";
import {
  createCategory,
  getCategories,
} from "../../services/categories.services";

type Props = {
  onAdd: () => void;
  onDelete?: (id?: string) => void;
  item?: NewItem | null;
  fixedCategories: CategoryItem[];
  onNewCategory: (cat: CategoryItem) => void;
};

let objectTitles: string[] = Object.keys(categories);

export const InputArea = ({
  onAdd,
  onDelete,
  item = null,
  fixedCategories,
  onNewCategory,
}: Props) => {
  const [dateField, setDateField] = useState(
    item ? item.date.toISOString().split("T")[0] : ""
  );
  const [titleField, setTitleField] = useState(item ? item.title : "");
  const [valueField, setValueField] = useState(item ? `${item.value}` : "");

  const [categoriesList, setCategoriesList] = useState<CategoryItem[]>([]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [categoryField, setCategoryField] = useState(item ? item.category : "");

  useEffect(() => {
    getCategories().then((res) => {
      if (res != undefined) {
        setCategoriesList(res.data);
      } else console.log(`a resposta esta vazia: ${res}`);
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("#category")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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

        <C.Label htmlFor="select">
          Categoria:
          <C.Select
            id="category"
            required
            value={categoryField}
            onChange={(e) => {
              const value = e.target.value;
              console.log(e);
              if (value === "cadastro") {
                alert("Você selecionou a nova categoria");
              } else setCategoryField(value);

              // if (value.trim() === "") {
              //   setFilteredCategories([]);
              //   setShowDropdown(false);
              //   return;
              // }

              // const results = categoriesList.filter((cat) =>
              //   cat.title.toLowerCase().includes(value.toLowerCase())
              // );

              // setFilteredCategories(results);
              // setShowDropdown(true);
            }}
          >
            <option value=""></option>
            {categoriesList.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.title}
              </option>
            ))}
            <option value="cadastro">Nova categoria</option>
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
