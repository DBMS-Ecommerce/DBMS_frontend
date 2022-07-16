import {
  InputBase,
  makeStyles,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../../theme/colors";
import { PRIMARY_FONT } from "../../../theme/fonts";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(1),
  },
  "& .MuiInputBase-input": {
    backgroundColor: theme.palette.background.paper,
    border: "3px solid",
    borderTopColor: PRIMARY1_COLOR,
    borderBottomColor: PRIMARY2_COLOR,
    borderLeftColor: PRIMARY1_COLOR,
    borderRightColor: PRIMARY2_COLOR,

    // fontSize: 18,
    fontFamily: PRIMARY_FONT,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.

    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

function TitleSelect(props) {
  const menu = [];

  props.list.forEach((element, index) => {
    menu.push(
      <MenuItem value={index} key={index}>
        {element}
      </MenuItem>
    );
  });

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={props.value}
      label={props.label}
      name={props.name}
      onChange={props.onChange}
      input={<BootstrapInput />}
      required
      sx={{
        marginBottom: 3,
        width: 500,
        // height: 35,
        // lineHeight: 1,
        fontFamily: PRIMARY_FONT,
        // fontWeight: 100,
      }}
    >
      {menu ? menu : null}
    </Select>
  );
}

export default TitleSelect;
