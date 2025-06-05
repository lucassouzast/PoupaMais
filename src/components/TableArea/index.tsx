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
    <C.TableWrapper>
      <C.Table>
        <C.TableHead>
          <C.TableHeadColumn id="data">Data</C.TableHeadColumn>
          <C.TableHeadColumn id="categoria">Categoria</C.TableHeadColumn>
          <C.TableHeadColumn id="titulo">Título</C.TableHeadColumn>
          <C.TableHeadColumn id="valor">Valor</C.TableHeadColumn>
          <C.TableHeadColumn style={{ width: "10%" }}></C.TableHeadColumn>
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
    </C.TableWrapper>
  );
};
