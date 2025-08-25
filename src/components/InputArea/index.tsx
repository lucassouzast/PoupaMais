import * as C from "./styles";
import { Item } from "../../types/Item";
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
  item?: Item | null;
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
  const [filteredCategories, setFilteredCategories] = useState<CategoryItem[]>(
    []
  );
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
          <C.Input
            type="text"
            id="category"
            required
            value={categoryField}
            onChange={(e) => {
              const value = e.target.value;
              setCategoryField(value);

              if (value.trim() === "") {
                setFilteredCategories([]);
                setShowDropdown(false);
                return;
              }

              const results = categoriesList.filter((cat) =>
                cat.title.toLowerCase().includes(value.toLowerCase())
              );

              setFilteredCategories(results);
              setShowDropdown(true);
            }}
            onFocus={() => {
              if (filteredCategories.length > 0) setShowDropdown(true);
            }}
          />
          {showDropdown && (
            <C.Dropdown>
              {filteredCategories.map((cat) => (
                <C.DropdownItem
                  key={cat._id}
                  onClick={() => {
                    setCategoryField(cat.title);
                    setShowDropdown(false);
                  }}
                >
                  {cat.title}
                </C.DropdownItem>
              ))}

              {!filteredCategories.some(
                (cat) => cat.title.toLowerCase() === categoryField.toLowerCase()
              ) &&
                categoryField.trim() !== "" && (
                  <C.DropdownItem
                    onClick={async () => {
                      const newCat: CategoryItem = {
                        title: categoryField,
                        color: "gray",
                        expense: true,
                      };

                      const createdCat = await createCategory(newCat);
                      if (createdCat) {
                        setCategoriesList((prev) => [...prev, createdCat.data]);
                        onNewCategory?.(createdCat.data); 
                        setCategoryField(createdCat.data.title);
                        setShowDropdown(false);
                      }
                    }}
                  >
                    ➕ Criar nova categoria: <strong>{categoryField}</strong>
                  </C.DropdownItem>
                )}
            </C.Dropdown>
          )}
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
