import { Avatar, IconButton, Radio, TableCell, TableRow } from "@mui/material";
import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import TitleText from "../TitleText";
import Axios from "axios";
import { Formik, Field, Form } from "formik";

function ItemRow(props) {
  const [fieldValue, setFieldValue] = React.useState(null);
  const [link, setLink] = React.useState("");

  const handleFieldValue = (event) => {
    // setFieldValue(event.target.files[0]);
    console.log(event);
    uploadImage(event.target.files[0], event);
  };

  const uploadImage = (field, event) => {
    let formData = new FormData();

    formData.append("file", field);
    formData.append("upload_preset", "qmpp9gnk");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dxy8gayw4/image/upload",
      formData
    ).then((reponse) => {
      // setLink(reponse['data']['secure_url']);
      setLink(reponse["data"]["secure_url"]);
      // var event = {
      //   target: { name: props.imgName, value: link },
      //   type: "change",
      //   _reactName: "onChange",
      // };
      console.log(props.imgName);
      console.log(reponse["data"]["secure_url"]);
      props.onChangeImg(props.imgName, reponse["data"]["secure_url"]);

      console.log(link);
    });

    console.log("image added");
  };

  // React.useEffect(() => {
  //   props.onChangeDefault(props.defaultName, "1");
  //   // console.log(props.sku, props.selectedValue === props.sku);
  //   console.log(props.sku, props.default, props.selectedValue);
  // }, [props.selectedValue]);

  return (
    <TableRow
      // key={props.key}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row" align="center">
        <label>
          <Field type="radio" name="selectedValue" value={props.sku} />
        </label>
      </TableCell>
      <TableCell align="center">{props.sku}</TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell align="right">{props.price}</TableCell>
      <TableCell align="right">
        <TitleText
          label="Quantity"
          // key={props.key}
          name={props.quantityName}
          value={props.quantity}
          onChange={props.onChangeQuantity}
          type="number"
          width="20%"
        />
      </TableCell>
      <TableCell align="center">
        <input
          accept="image/*"
          //   className={classes.input}
          id={props.name}
          onChange={handleFieldValue}
          // value={props.fieldValue}
          type="file"
          name={props.imgName}
          hidden
        />
        <label htmlFor={props.name}>
          <IconButton color="primary" component="span">
            {link === "" ? <AddAPhotoIcon /> : <Avatar alt="" src={link} />}
          </IconButton>
        </label>
      </TableCell>
    </TableRow>
  );
}

export default ItemRow;
