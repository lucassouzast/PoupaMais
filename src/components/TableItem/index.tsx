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
};

export const TableItem = ({
  item,
  updateFunction,
  deleteFunction,
}: Props) => {
  // Mapeamento das categorias antigas para as novas
  const categoryMap: Record<string, string> = {
    food: "Alimentação",
    rent: "Aluguel",
    salary: "Salário",
  };



  const title = item.category?.title || "Categoria Desconhecida";
  const color = item.category?.color || "gray";
  const isExpense = item.category?.expense ?? true;

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
