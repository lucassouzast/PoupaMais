import { PieChart, Pie, Cell } from "recharts";
import { Icon } from "@iconify/react";
import * as C from "./styles";
import { EntriesContext } from "../../contexts/EntriesContext";
import { useContext, useEffect } from "react";
import { categories } from "../../data/categories";
import { useState } from "react";
import {
  filterListByMonth,
  formatCurrentMonth,
  getCurrentMonth,
} from "../../helpers/dateFilters";
import { CategoryItem } from "../../types/CategoryItem";
import { getCategories } from "../../services/categories.services";

function formatDayMonth(date: Date) {
  const data = typeof date === "string" ? new Date(date) : date;
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
}

export type totalsPerCategory = {
  [category: string]: number;
};

export const MonthlyReport = () => {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const { entriesList } = useContext(EntriesContext);
  const filteredEntries = filterListByMonth(entriesList, currentMonth);

  const [categoriesList, setCategoriesList] = useState<CategoryItem[]>([]);

  useEffect(() => {
    getCategories().then((res) => {
      if (res != undefined) {
        setCategoriesList(res.data);
      } else console.log(`a resposta esta vazia: ${res}`);
    });
  }, []);

  let totalsPerCategory: totalsPerCategory = {};

  filteredEntries.forEach((item) => {
    if (item.category) {
      if (totalsPerCategory[item.category._id]) {
        totalsPerCategory[item.category._id] += item.value;
      } else {
        totalsPerCategory[item.category._id] = item.value;
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
    let cat = categoriesList.find((cat) => cat._id === category);
    return {
      name: cat ? cat.title : "Sem titulo",
      value: totalsPerCategory[category],
      color: cat ? cat.color : "gray",
    };
  });

  const onMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.Header>
        <h3>Relatorio Mensal</h3>
        <Icon icon="mdi:calendar-search" width="24" />
      </C.Header>

      <C.Content>
        <C.Card>
          <C.Title>Mês atual</C.Title>
          <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
          </C.MonthArea>
          <C.Divider />
          <C.ChartContainer>
            <PieChart width={200} height={200}>
              <Pie
                data={chartData.length > 0 ? chartData : []}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={90}
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
            {filteredEntries.map((entry) => (
              <C.TableRow key={entry._id || entry.title}>
                <span>{entry.title}</span>
                <C.Type color={entry.category.color}>
                  {entry.category.title}
                </C.Type>
                <span>{formatDayMonth(entry.date)}</span>
                <div>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(entry?.value || 0)}
                </div>
              </C.TableRow>
            ))}
          </C.Table>
        </C.Card>
      </C.Content>
    </C.Container>
  );
};
