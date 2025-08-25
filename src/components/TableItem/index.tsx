import * as C from "./styles";
import { Item } from "../../types/Item";
import { CategoryItem } from "../../types/CategoryItem";

function formatDayMonth(date: Date) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
}

type Props = {
  item: Item;
  updateFunction: (item: Item) => void;
  deleteFunction: (id: string) => void;
  allCategories: CategoryItem[]; // recebe a lista completa
};

export const TableItem = ({
  item,
  updateFunction,
  deleteFunction,
  allCategories,
}: Props) => {
  // Mapeamento das categorias antigas para as novas
  const categoryMap: Record<string, string> = {
    food: "Alimentação",
    rent: "Aluguel",
    salary: "Salário",
  };

  // Traduz a categoria antiga para a nova
  const mappedCategory = categoryMap[item.category] || item.category;

  // Busca a categoria no allCategories
  const cat = allCategories.find(
    (c) => c.title.toLowerCase() === mappedCategory.toLowerCase()
  );

  const title = cat?.title || "Categoria Desconhecida";
  const color = cat?.color || "gray";
  const isExpense = cat?.expense ?? true;

  return (
    <C.TableLine>
      <C.DateColumn>{formatDayMonth(item.date)}</C.DateColumn>
      <C.TableColumn>
        <C.CategoryColumn color={color}>{title}</C.CategoryColumn>
      </C.TableColumn>
      <C.TitleColumn>{item.title}</C.TitleColumn>
      <C.TableColumn>
        <C.Value color={isExpense ? "red" : "green"}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item?.value || 0)}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        <C.IconButton onClick={() => updateFunction(item)}>⋮</C.IconButton>
      </C.TableColumn>
    </C.TableLine>
  );
};
