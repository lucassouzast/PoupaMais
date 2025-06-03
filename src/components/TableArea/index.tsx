import * as C from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem/";
import Modal from "react-modal";
import { useState } from "react";
type Props = {
  list: Item[];
  handleDelItem: Function;
  handleEditItem: Function;
};

export const TableArea = ({ list, handleDelItem, handleEditItem }: Props) => {

  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={130}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>...</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem
            key={index}
            item={item}
            deleteFunction={(id) => {
              handleDelItem(id);
            }}
            updateFunction={(item) => {
              handleEditItem(item);
            }}
          />
        ))}
      </tbody>
    </C.Table>
  );
};
