import { Box, Button, IconButton, Stack } from "@mui/material";
import React from "react";
import TitleText from "../TitleText";
import VariantSeg from "../VariantSeg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function VariantTypeSeg(props) {
  const [components, setComponents] = React.useState([]);

  function addComponent() {
    setComponents([...components, "Sample Component"]);
  }

  return (
    <div>
      <TitleText
        label="Variant Type"
        name={props.name}
        width="100%"
        value={props.value}
        onChange={props.onChange}
      />
      {/* <Stack spacing={2} justifyContent="flex-start" alignItems="baseline">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={3}
        >
          <TitleText label="Variant Title" name="variantTitle" width="70%" />
          <TitleText label="Price" name="price" width="35%" type="number" />
        </Stack>
        {components.map((item, i) => (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={3}
          >
            <TitleText label="Variant Title" name="variantTitle" width="70%" />
            <TitleText label="Price" name="price" width="35%" type="number" />
          </Stack>
        ))}
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          style={{ marginLeft: 25, marginTop: -5 }}
          onClick={addComponent}
        >
          Add Variant
        </Button>
      </Stack> */}
    </div>
  );
}

export default VariantTypeSeg;
