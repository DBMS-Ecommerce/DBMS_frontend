import React from "react";
import { styled } from "@mui/system";
import { TextField, Stack } from "@mui/material";
import { PRIMARY1_COLOR } from "../../theme/colors";

const CustomTextField = styled(TextField)({
  width: 350,
});

export default function DetailsForm() {
  return (
    <div>
      <Stack direction="column" spacing={2}>
        <div>
          <h1>Thanks for shopping with us!</h1>
        </div>
        <p style={{ color: "rgba(0,0,0,0.5)" }}>Enter your details to login</p>
        <div>
          <CustomTextField
            label="First Name"
            variant="outlined"
            color={PRIMARY1_COLOR}
          />
          <CustomTextField
            label="Last Name"
            variant="outlined"
            color={PRIMARY1_COLOR}
          />
        </div>
      </Stack>
    </div>
  );
}
