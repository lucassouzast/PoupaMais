import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem; /* tamanho do emoji */
  cursor: pointer;
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #bbb;
  }
`;
