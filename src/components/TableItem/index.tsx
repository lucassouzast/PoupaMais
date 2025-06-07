import * as C from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilters";
import { categories } from "../../data/categories";

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

export const TableItem = ({ item, updateFunction }: Props) => {
  return (
    <C.TableLine>
      <C.DateColumn>{formatDayMonth(item.date)}</C.DateColumn>
      <C.TableColumn>
        <C.CategoryColumn color={categories[item.category]?.color || "gray"}>
          {categories[item.category]?.title || "Categoria Desconhecida"}
        </C.CategoryColumn>
      </C.TableColumn>
      <C.TitleColumn>{item.title}</C.TitleColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category]?.expense ? "red" : "green"}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item?.value || 0)}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        <C.IconButton
          onClick={() => {
            updateFunction(item);
          }}
        >
          ⋮
        </C.IconButton>
      </C.TableColumn>
    </C.TableLine>
  );
};
