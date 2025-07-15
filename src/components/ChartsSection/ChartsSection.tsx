import { PieChart, Pie, Cell } from "recharts";
import { Icon } from "@iconify/react";
import * as C from "./styles";
import { EntriesContext } from "../../contexts/EntriesContext";
import { useContext } from "react";
import { categories } from "../../data/categories";

import { filterListByMonth, getCurrentMonth } from "../../helpers/dateFilters";

function formatDayMonth(date: Date) {
  const data = typeof date === "string" ? new Date(date) : date;
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
}

function formatCategoryPTBR(category: string) {
  if (category === "rent") {
    return "Aluguel"
  } if (category === "food") {
    return "Alimentação"
  } if (category === "salary") {
    return "Salário"
  }
}

export type totalsPerCategory = {
  [category: string]: number;
};

export const MonthlyReport = () => {
  const { entriesList } = useContext(EntriesContext);
  const currentMonth = getCurrentMonth();
  const filteredEntries = filterListByMonth(entriesList, currentMonth);
  let totalsPerCategory: totalsPerCategory = {};

  filteredEntries.forEach((item) => {
    if (item.category) {
      if (totalsPerCategory[item.category]) {
        totalsPerCategory[item.category] += item.value;
      } else {
        totalsPerCategory[item.category] = item.value;
      }
    } else {
      const defaultCategory = "Uncategorized";
      if (totalsPerCategory[defaultCategory]) {
        totalsPerCategory[defaultCategory] += item.value;
      } else {
        totalsPerCategory[defaultCategory] = item.value;
      }
    }
  });

  const chartData = Object.keys(totalsPerCategory).map((category) => {
    return {
      name: categories[category].title,
      value: totalsPerCategory[category],
      color: categories[category].color,
    };
  });

  return (
    <C.Container>
      <C.Header>
        <h3>Relatorio Mensal</h3>
        <Icon icon="mdi:calendar-search" width="24" />
      </C.Header>

      <C.Content>
        <C.Card>
          <C.Title>Mês atual</C.Title>
          <C.Divider />
          <C.ChartContainer>
            <PieChart width={200} height={200}>
              <Pie
                data={chartData.length > 0 ? chartData : []}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <C.LegendContainer>
              {chartData.map((item, idx) => (
                <C.LegendItem key={idx}>
                  <C.Dot color={item.color} />
                  <span>{item.name}</span>
                </C.LegendItem>
              ))}
            </C.LegendContainer>
          </C.ChartContainer>
        </C.Card>

        <C.Card>
          <C.Title>Historico de Transações</C.Title>
          <C.Divider />
          <C.Table>
            {entriesList.map((entry) => (
              <C.TableRow>
                <span>{entry.title}</span>
                <C.Type $color={entry.category}>
                  {formatCategoryPTBR(entry.category)}
                </C.Type>
                <span>{formatDayMonth(entry.date)}</span>
                <span>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(entry?.value || 0)}
                </span>
              </C.TableRow>
            ))}
          </C.Table>
        </C.Card>
      </C.Content>
    </C.Container>
  );
};
