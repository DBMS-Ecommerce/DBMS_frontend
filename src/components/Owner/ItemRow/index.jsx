import { Avatar, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import TitleText from "../TitleText";
import Axios from "axios";

function ItemRow(props) {
  const [fieldValue, setFieldValue] = React.useState(null);
  const [upload, setUpload] = React.useState(true);
  const [link, setLink] = React.useState("");

  const handleFieldValue = (event) => {
    setFieldValue(event.target.files[0]);
  };

  const uploadImage = () => {
    let formData = new FormData();

    formData.append("file", fieldValue);
    formData.append("upload_preset", "qmpp9gnk");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dxy8gayw4/image/upload",
      formData
    ).then((reponse) => {
      // setLink(reponse['data']['secure_url']);
      setLink(reponse["data"]["secure_url"]);
      setUpload(false);
      console.log(link);
    });

    console.log("image added");
  };

  React.useEffect(() => {
    if (fieldValue !== null) {
      uploadImage();
    }
  }, [fieldValue]);

  React.useEffect(() => {
    // console.log(fieldValue);
    console.log(props);
  });

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
          // key={props.keyRow}
          name={props.quantity + ""}
          value={props.quantity}
          onChange={props.onChangeQuantity}
          type="number"
          width="20%"
        />
      </TableCell>
      <TableCell align="center">
        <input
          accept="image/*"
          key={props.keyRow}
          //   className={classes.input}
          id="icon-button-photo"
          onChange={handleFieldValue}
          // value={props.fieldValue}
          type="file"
          name="itemImg"
          hidden
        />
        <label htmlFor="icon-button-photo" key={props.keyRow}>
          <IconButton key={props.keyRow} color="primary" component="span">
            {upload ? (
              <AddAPhotoIcon />
            ) : (
              <Avatar key={props.keyRow} alt="" src={link} />
            )}
          </IconButton>
        </label>
      </TableCell>
    </TableRow>
  );
}

export default ItemRow;
