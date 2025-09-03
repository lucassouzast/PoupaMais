import { useEffect, useState } from "react";
import { CategoryItem } from "../../types/CategoryItem";
import * as C from "../InputArea/styles";
import { createCategory, getCategories } from "../../services/categories.services";
import Modal from "../Modal";

export type ItemCategory = {
  title: string;
  color: string;
  expense: boolean;
};

type SelectCategoryProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SelectCategory = ({value, onChange}: SelectCategoryProps) => {
  const [categoriesList, setCategoriesList] = useState<CategoryItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryForm, setCategoryForm] = useState<ItemCategory>({
    title: "",
    color: "#000000",
    expense: false,
  });

  const handleAddCategory = () => {
    const newCategory: ItemCategory = {
      title: categoryForm.title,
      color: categoryForm.color,
      expense: categoryForm.expense,
    };

    createCategory(newCategory)
      .then((res) => {
        const createdCategory: CategoryItem = res.data;
        setCategoriesList([...categoriesList, createdCategory]);
        setIsOpen(false);
      })
      .catch((err) => {
        console.error("Erro ao criar categoria:", err);
        alert("Não foi possível criar a categoria.");
      });
  };

  useEffect(() => {
    getCategories().then((res) => {
      if (res != undefined) {
        setCategoriesList(res.data);
      }
    });
  });

 return (
    <>
    <C.Select
      id="category"
      required
      value={value}
      onChange={(e) => {
        const newValue = e.target.value;
        if (newValue === "cadastro") {
          setIsOpen(true);
        } else {
          onChange(newValue);
        }
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

      {
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Adicionar categoria:"
        >
          <C.Container>
            <C.Label>
              Titulo:
              <C.Input
                required
                type="text"
                id="title"
                onChange={(e) =>
                  setCategoryForm({ ...categoryForm, title: e.target.value })
                }
              />
            </C.Label>

            <C.Label>
              Cor:
              <C.Input
                required
                type="color"
                id="color"
                onChange={(e) =>
                  setCategoryForm({ ...categoryForm, color: e.target.value })
                }
              />
            </C.Label>

            <C.Label>
              Despesa ou Entrada?
              <C.Select
                required
                id="expense"
                onChange={(e) =>
                  setCategoryForm({
                    ...categoryForm,
                    expense: e.target.value === "true",
                  })
                }
              >
                <option value=""></option>
                <option value="false">Entrada</option>
                <option value="true">Despesa</option>
              </C.Select>
            </C.Label>

            <C.ButtonLabel>
              <C.Button type="button" onClick={handleAddCategory}>
                Adicionar
              </C.Button>
            </C.ButtonLabel>
          </C.Container>
        </Modal>
      }
    </>
  );
};
