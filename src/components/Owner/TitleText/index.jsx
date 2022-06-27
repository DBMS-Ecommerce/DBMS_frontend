import { TextField } from "@mui/material";
import React from "react";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../../theme/colors";
import { PRIMARY_FONT } from "../../../theme/fonts";

function TitleText(props) {
  React.useEffect(() => {
    console.log(props.value);
  });
  return (
    <TextField
      id="outlined-basic"
      label={props.label}
      variant="outlined"
      value={props.value}
      onChange={props.onChange}
      sx={{
        marginBottom: 3,
        width: 500,
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
