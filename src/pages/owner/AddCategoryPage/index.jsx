import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { PRIMARY1_COLOR } from "../../../theme/colors";
import TitleText from "../../../components/Owner/TitleText";
import bg_category from "../../../assets/bg_cat.svg";
import AddButton from "../../../components/Owner/AddButton";
import { Formik } from "formik";

function AddCategory() {
  const [categoryTitle, setCategoryTitle] = React.useState("");
  const [subCategoryCheck, setSubCategoryCheck] = React.useState(false);

  React.useEffect(() => {
    console.log("title: " + categoryTitle);
    console.log("checked: " + subCategoryCheck);
  });

  const handleCategoryTitle = (event) => {
    setCategoryTitle(event.target.value);
  };

  const handleSubCategoryCheck = (event) => {
    setSubCategoryCheck(event.target.checked);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "15%",
        }}
      >
        <FormGroup>
          <TitleText
            label="Category Title"
            onChange={handleCategoryTitle}
            value={categoryTitle}
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={subCategoryCheck}
                onChange={handleSubCategoryCheck}
                sx={{
                  color: PRIMARY1_COLOR,
                  // "&.Mui-checked": {
                  //   color: PRIMARY1_COLOR,
                  // },
                }}
              />
            }
            label="Sub Categories"
          />

          <AddButton />
        </FormGroup>
      </Box>
      <img
        src={bg_category}
        style={{
          width: 496,
          height: 325,
          position: "absolute",
          bottom: "3%",
          left: "20%",
        }}
      />
    </Box>
  );
}

export default AddCategory;
