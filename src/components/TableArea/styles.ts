import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ccc;
  margin-top: 20px;
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 600px;
  background-color: transparent;
  border-spacing: 0;
  table-layout: fixed;

  @media (max-width: 600px) {
    min-width: unset;
    width: 100%;
    table-layout: fixed;
    font-size: 13px;
    max-width: 100vw;
  }
`;

export const TableHead = styled.thead`
  @media (max-width: 600px) {
    background-color: rgb(240, 240, 240);
  }
`;

export const TableHeadColumn = styled.th`
  padding: 4px 2px;
  text-align: left;
  white-space: normal;
  overflow: visible;
  text-overflow: initial;
  width: 25%;

  &#data {
    max-width: 80px;
    width: 15%;
    text-align: left;
    padding-left: 10px;
  }
  &#categoria {
    width: 25%;
  }
  &#titulo {
    width: 35%;
  }
  &#valor {
    width: 25%;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    &#data {
      width: 15%;
    }
    &#categoria {
      width: 25%;
    }
    &#titulo {
      width: 20%;
    }
    &#valor {
      width: 30%;
    }
  }
`;

export const TableBody = styled.tbody`
  tr {
    &:hover {
      background-color: #f5f5f5;
    }
  }
  @media (max-width: 600px) {
    td {
      padding: 8px 4px;
      width: 100px;
    }
  }
`;

export const TableRow = styled.tr`
  transition: background 0.2s;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const TableColumn = styled.td`
  padding: 12px 8px;
  text-align: left;
  font-size: 16px;
  word-break: break-word;
  overflow-wrap: anywhere;
  background: #fafdff;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  gap: 8px;

  /* Faz o texto ocupar mais espaço */
  width: 100%;

  /* Emoji opcional pode ser adicionado via ::before */
  &.with-emoji::before {
    content: "💡";
    margin-right: 6px;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 13px;
    padding: 10px 4px;
    width: 100%;
    gap: 6px;
  }
`;
