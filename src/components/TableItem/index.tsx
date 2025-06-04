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

export const TableItem = ({ item, updateFunction, deleteFunction }: Props) => {
  return (
    <C.TableLine>
      <C.DateColumn>{formatDayMonth(item.date)}</C.DateColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TitleColumn>{item.title}</C.TitleColumn>

      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? "red" : "green"}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item.value)}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        <C.IconButton onClick={() => updateFunction(item)}>✏️</C.IconButton>
        <C.IconButton onClick={() => deleteFunction(item?._id || "")}>
          🗑️
        </C.IconButton>
      </C.TableColumn>
    </C.TableLine>
  );
};
