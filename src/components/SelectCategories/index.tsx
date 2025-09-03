import { useEffect, useState } from "react";
import { CategoryItem } from "../../types/CategoryItem";
import * as C from "../InputArea/styles";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../../services/categories.services";
import Modal from "../Modal";

import Select, { components, OptionProps } from "react-select";
import { FaTrashAlt, FaPen } from "react-icons/fa";

export type ItemCategory = {
  title: string;
  color: string;
  expense: boolean;
};

type SelectCategoryProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SelectCategory = ({ value, onChange }: SelectCategoryProps) => {
  const [categoriesList, setCategoriesList] = useState<CategoryItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryForm, setCategoryForm] = useState<ItemCategory>({
    title: "",
    color: "#000000",
    expense: false,
  });

  const [editingCategory, setEditingCategory] = useState<CategoryItem | null>(
    null
  );
  const [categoryToDelete, setCategoryToDelete] = useState<CategoryItem | null>(
    null
  );

  const addOption: CategoryItem = {
    _id: "add-new",
    title: "ADICIONAR CATEGORIA",
    color: "#000000",
    expense: false,
  };

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 12px",
      gap: "8px",
      cursor: "pointer",
      backgroundColor: state.isFocused ? "#f0f8ff" : "#fff",
      color: "#000",
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
      overflow: "hidden",
    }),
  };

  const CustomOption = (props: OptionProps<CategoryItem, false>) => {
    const { data, innerProps, isFocused } = props;

    if (data._id === "add-new") {
      return (
        <div
          {...innerProps}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            fontWeight: "bold",
            color: "#007bff",
            backgroundColor: isFocused ? "#d0e0ff" : "#fff",
          }}
        >
          {data.title}
        </div>
      );
    }

    return (
      <div
        {...innerProps}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 12px",
          gap: "8px",
          cursor: "pointer",
          backgroundColor: isFocused ? "#d0e0ff" : "#fff",
          borderBottom: "1px solid rgb(204, 204, 204)",
        }}
      >
        <span>{data.title}</span>
        <span style={{ display: "flex", gap: "8px" }}>
          <FaPen
            style={{ cursor: "pointer" }}
            onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => {
              e.stopPropagation();
              setEditingCategory(data);
            }}
          />
          <FaTrashAlt
            style={{ cursor: "pointer" }}
            onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => {
              e.stopPropagation();
              setCategoryToDelete(data);
            }}
          />
        </span>
      </div>
    );
  };

  const saveEdit = async () => {
    if (!editingCategory) return;

    await updateCategory(editingCategory._id, editingCategory);

    setCategoriesList((prev) =>
      prev.map((cat) =>
        cat._id === editingCategory._id ? { ...editingCategory } : cat
      )
    );
    setEditingCategory(null);
  };

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id);
      setCategoriesList((prev) => prev.filter((cat) => cat._id !== id));
    } catch (err) {
      console.error(err);
      alert("Erro ao deletar categoria");
    }
  };

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
  }, []);

  return (
    <>
      <Select<CategoryItem, false>
        options={[...categoriesList, addOption]}
        getOptionLabel={(cat) => cat.title}
        getOptionValue={(cat) => cat._id}
        components={{ Option: CustomOption }}
        styles={customStyles}
        value={categoriesList.find((cat) => cat._id === value) || null}
        onChange={(cat) => {
          if (!cat) return;
          if (cat._id === "add-new") {
            setIsOpen(true);
          } else {
            onChange(cat._id);
          }
        }}
      />

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Adicionar categoria:"
        >
          <C.Container>
            <C.Label style={{ flex: 3 }}>
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

            <C.Label style={{ flex: 2 }}>
              Despesa ou Entrada?
              <C.Select
                value={categoryForm.expense ? "true" : "false"}
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
      )}

      {editingCategory && (
        <Modal
          isOpen={true}
          onClose={() => setEditingCategory(null)}
          title="Editar categoria:"
        >
          <C.Container>
            <C.Label>
              Título:
              <C.Input
                type="text"
                value={editingCategory.title}
                onChange={(e) =>
                  setEditingCategory({
                    ...editingCategory,
                    title: e.target.value,
                  })
                }
              />
            </C.Label>

            <C.Label>
              Cor:
              <C.Input
                type="color"
                value={editingCategory.color}
                onChange={(e) =>
                  setEditingCategory({
                    ...editingCategory,
                    color: e.target.value,
                  })
                }
              />
            </C.Label>

            <C.Label style={{ flex: 2 }}>
              Despesa ou Entrada:
              <C.Select
                value={editingCategory.expense ? "true" : "false"}
                onChange={(e) =>
                  setEditingCategory({
                    ...editingCategory,
                    expense: e.target.value === "true",
                  })
                }
              >
                <option value="false">Entrada</option>
                <option value="true">Despesa</option>
              </C.Select>
            </C.Label>

            <C.ButtonLabel>
              <C.Button
                type="button"
                onClick={() => {
                  saveEdit();
                }}
              >
                Salvar
              </C.Button>
            </C.ButtonLabel>
          </C.Container>
        </Modal>
      )}

      {categoryToDelete && (
        <Modal
          isOpen={true}
          onClose={() => setCategoryToDelete(null)}
          title="Confirmação de exclusão"
        >
          <p>
            Se você deletar a categoria
            <strong> {categoryToDelete.title}</strong>, todas as entradas
            associadas a ela também serão deletadas.
          </p>
          <C.ButtonLabel
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <C.Button
              type="button"
              variant="danger"
              onClick={async () => {
                await handleDeleteCategory(categoryToDelete._id);
                setCategoriesList((prev) =>
                  prev.filter((cat) => cat._id !== categoryToDelete._id)
                );
                setCategoryToDelete(null);
              }}
            >
              Deletar
            </C.Button>
            <C.Button type="button" onClick={() => setCategoryToDelete(null)}>
              Cancelar
            </C.Button>
          </C.ButtonLabel>
        </Modal>
      )}
    </>
  );
};
