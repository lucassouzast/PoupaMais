import styled from "styled-components";


export const Container = styled.div`
  padding: 20px;
  background: #f0fff6;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  flex: 1;
  min-width: 350px;
`;

export const Title = styled.h4`
  margin-bottom: 8px;
`;

export const Divider = styled.div`
  height: 1px;
  background: #ddd;
  margin-bottom: 16px;
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LegendContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0;
`;

export const Dot = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const Type = styled.span`
  padding: 2px 8px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;

  &.entrada {
    background-color: green;
  }

  &.despesa {
    background-color: darkred;
  }
`;
