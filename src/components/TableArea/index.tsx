import * as C from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem/";
import { useState } from "react";

type Props = {
  list: Item[];
  handleDelItem: Function;
  handleEditItem: Function;
};

export const TableArea = ({ list, handleDelItem, handleEditItem }: Props) => {
  return (
    <C.Table>
      <C.TableHead>
          <C.TableHeadColumn>Data</C.TableHeadColumn>
          <C.TableHeadColumn>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn>Valor</C.TableHeadColumn>
          <C.TableHeadColumn width={50}>...</C.TableHeadColumn>
      </C.TableHead>
      <C.TableBody>
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
      </C.TableBody>
    </C.Table>
  );
};
