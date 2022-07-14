import { TextField } from "@mui/material";
import React from "react";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../../theme/colors";
import { PRIMARY_FONT } from "../../../theme/fonts";

function TitleText(props) {
  return (
    <TextField
      id="outlined-basic"
      label={props.label}
      name={props.name}
      variant="outlined"
      value={props.value}
      onChange={props.onChange}
      required
      type={props.type}
      sx={{
        marginBottom: 3,
        width: props.width,
        "& .MuiOutlinedInput-root": {
          "& > fieldset": {
            borderTopColor: PRIMARY1_COLOR,
            borderBottomColor: PRIMARY2_COLOR,
            borderLeftColor: PRIMARY1_COLOR,
            borderRightColor: PRIMARY2_COLOR,
            borderWidth: "3px",
          },
        },
        fontFamily: PRIMARY_FONT,
      }}
    />
  );
}

export default TitleText;
