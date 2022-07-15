import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React from "react";
import ItemRow from "../ItemRow";

function ItemTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">SKU</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell align="right">UNIT PRICE&nbsp;(RS.)</TableCell>
            <TableCell align="right">QUANTITY</TableCell>
            <TableCell align="center">IMAGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.itemLst
            ? props.itemLst.map((item, index) => {
                return (
                  <ItemRow
                    key={index}
                    selectedValue={props.selectedValue}
                    // default={props.itemLst[index].is_default}
                    // defalutName={`itemLst[${index}].is_default`}
                    // onChangeDefault={setFieldValue}
                    sku={item.sku}
                    name={item.name}
                    price={item.unit_price}
                    quantityName={`itemLst[${index}].quantity`}
                    quantity={props.itemLst[index].quantity}
                    onChangeQuantity={props.handleChange}
                    img={props.itemLst[index].image}
                    imgName={`itemLst[${index}].image`}
                    onChangeImg={props.setFieldValue}
                  />
                );
              })
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemTable;
