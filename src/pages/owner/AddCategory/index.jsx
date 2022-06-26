import { FormGroup, TextField } from "@mui/material";
import React from "react";

function AddCategory() {
  return (
    <div>
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="Category Title"
          variant="outlined"
          // value={}
          // onChange={}

          sx={{
            marginBottom: 3,
            width: 600,
            borderColor: "red",
          }}
          InputProps={{ style: { borderColor: "red" } }}
        />
      </FormGroup>
    </div>
  );
}

export default AddCategory;
