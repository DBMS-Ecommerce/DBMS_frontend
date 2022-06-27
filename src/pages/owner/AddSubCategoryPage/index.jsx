import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { PRIMARY1_COLOR } from "../../../theme/colors";
import TitleSelect from "../../../components/Owner/TitleSelect";
import bg_category from "../../../assets/bg_cat.svg";
import AddButton from "../../../components/Owner/AddButton";
import { Formik } from "formik";
import TitleText from "../../../components/Owner/TitleText";

function AddSubCategory() {
  const [categoryTitle, setCategoryTitle] = React.useState("");
  const [subCategoryTitle, setSubCategoryTitle] = React.useState("");

  React.useEffect(() => {
    console.log("title: " + categoryTitle);
    console.log("subtitle: " + subCategoryTitle);
  });

  const handleCategoryTitle = (event) => {
    setCategoryTitle(event.target.value);
  };

  const handleSubCategoryTitle = (event) => {
    setSubCategoryTitle(event.target.value);
  };

  const categoryList = ["Category 1", "Category 2", "Category 3"];

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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Category Title
            </InputLabel>
            <TitleSelect
              value={categoryTitle}
              label="Category Title"
              onChange={handleCategoryTitle}
              list={categoryList}
            />
          </FormControl>

          <TitleText
            label="Sub Category Title"
            onChange={handleSubCategoryTitle}
            value={subCategoryTitle}
            required
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

export default AddSubCategory;
