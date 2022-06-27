import { Button } from "@mui/material";
import React from "react";
import {
  PRIMARY1_COLOR,
  PRIMARY2_COLOR,
  PRIMARY_GRADIENT,
} from "../../../theme/colors";
import { PRIMARY_FONT } from "../../../theme/fonts";

function AddButton() {
  return (
    <Button
      variant="contained"
      sx={{
        width: 100,
        borderRadius: 45,
        background: PRIMARY_GRADIENT,

        fontFamily: PRIMARY_FONT,
        fontWeight: 600,
        fontSize: 16.5,
        letterSpacing: 1.25,
        position: "relative",
        left: "75%",
      }}
    >
      Add
    </Button>
  );
}

export default AddButton;
