import { Avatar, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import TitleText from "../TitleText";

function ItemRow(props) {
  console.log(props);
  return (
    <TableRow
      key={props.keyRow}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row" align="center">
        {props.sku}
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell align="right">{props.price}</TableCell>
      <TableCell align="right">
        <TitleText
          label="Quantity"
          key={props.keyRow}
          name={props.keyRow}
          onChange={props.onChangeQuantity}
          value={props.quantity}
          type="number"
          width="20%"
        />
      </TableCell>
      <TableCell align="center">
        <input
          accept="image/*"
          //   className={classes.input}
          id="icon-button-photo"
          onChange={props.fieldChange}
          value={props.fieldValue}
          type="file"
          name="itemImg"
          hidden
        />
        <label htmlFor="icon-button-photo">
          <IconButton color="primary" component="span">
            {props.upload ? (
              <AddAPhotoIcon />
            ) : (
              <Avatar alt="" src={props.link} />
            )}
          </IconButton>
        </label>
      </TableCell>
    </TableRow>
  );
}

export default ItemRow;
