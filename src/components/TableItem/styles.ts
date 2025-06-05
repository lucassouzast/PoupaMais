import styled from "styled-components";

import { MdMoreVert } from 'react-icons/md';



export const TableLine = styled.tr`
    border-bottom: 1px solid #ccc;
`;

export const TableColumn = styled.td`
  padding: 12px 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;

  @media (max-width: 600px) {
    padding: 8px 4px;
    font-size: 13px;
  }
`;

export const ActionsColumn = styled.td`
  padding: 12px 8px;
  min-width: 60px;
  max-width: 90px;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 600px) {
    padding: 8px 4px;
    min-width: 50px;
    max-width: 70px;
  }
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    padding: 3px 3px;
    font-size: 10px;
    max-width: 65px;
  }
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 600;
  max-width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    font-size: 13px;
    max-width: 60px;
  }
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
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

export const DateColumn = styled.td`
  padding: 12px 8px;
  max-width: 60px;
  min-width: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-variant-numeric: tabular-nums;

  @media (max-width: 600px) {
    padding: 8px 4px;
    font-size: 13px;
    max-width: 40px;
    min-width: 36px;
  }
`;

export const TitleColumn = styled.td`
  padding: 12px 8px;
  max-width: 120px;
  min-width: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;

  @media (max-width: 600px) {
    padding: 8px 2px 8px 2px; 
    font-size: 11px;          
    max-width: 40px;          
    min-width: 20px;          
  }
`;
