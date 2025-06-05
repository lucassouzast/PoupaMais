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
  table-layout: auto;

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
    width: 30px;
    font-weight: 600;
    max-width: 90vw;
    background-color: #f0f0f0;
    padding: 10px 0px;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => (props.width ? `${props.width}px` : "auto")};
  padding: 4px 2px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    width: ${props => (props.width ? `${props.width}px` : "40px")};
    min-width: 32px;
    max-width: 60px;
    padding: 4px 1px;
    font-size: 13px;
    font-weight: 600;
  }
`;
