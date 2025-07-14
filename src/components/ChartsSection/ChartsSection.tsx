import { PieChart, Pie, Cell, Legend } from "recharts";
import { Icon } from "@iconify/react";
import * as C from './styles'

const data = [
  { name: "Comida", value: 4200, color: "#e74c3c" },
  { name: "Cartão", value: 300, color: "#1abc9c" },
  { name: "Viagem", value: 300, color: "#f1c40f" },
  { name: "Aluguel", value: 200, color: "#e67e22" },
  { name: "Outros", value: 100, color: "#3498db" },
];

export const MonthlyReport = () => {
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
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <C.LegendContainer>
              {data.map((item, idx) => (
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
            <C.TableRow>
              <span>Restaurante</span>
              <C.Type className="despesa">Despesa</C.Type>
              <span>15/02/2025</span>
              <span>R$ 229,90</span>
            </C.TableRow>
            <C.TableRow>
              <span>Quinzena</span>
              <C.Type className="entrada">Entrada</C.Type>
              <span>15/02/2025</span>
              <span>R$ 984,90</span>
            </C.TableRow>
            <C.TableRow>
              <span>Cinema</span>
              <C.Type className="despesa">Despesa</C.Type>
              <span>15/02/2025</span>
              <span>R$ 349,90</span>
            </C.TableRow>
            <C.TableRow>
              <span>Comissão</span>
              <C.Type className="entrada">Entrada</C.Type>
              <span>15/02/2025</span>
              <span>R$ 469,90</span>
            </C.TableRow>
          </C.Table>
        </C.Card>
      </C.Content>
    </C.Container>
  );
};
