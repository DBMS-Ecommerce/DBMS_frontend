import { Box, Stack } from "@mui/material";
import React from "react";
import TitleText from "../TitleText";

function VariantSeg(props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
      spacing={3}
    >
      <TitleText
        label="Variant Title"
        name={props.nameTitle}
        value={props.valueTitle}
        onChange={props.onChangeTitle}
        width="70%"
      />
      <TitleText
        label="Price"
        name={props.namePrice}
        value={props.valuePrice}
        onChange={props.onChangePrice}
        width="35%"
        type="number"
      />
    </Stack>
  );
}

export default VariantSeg;
