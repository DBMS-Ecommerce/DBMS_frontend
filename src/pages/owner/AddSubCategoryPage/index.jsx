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
  const categoryList = ["Category 1", "Category 2", "Category 3"];

  return (
    <Formik
      initialValues={{ categoryTitle: "", subCategoryTitle: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.categoryTitle) {
          errors.categoryTitle = "Required";
        }
        if (!values.subCategoryTitle) {
          errors.subCategoryTitle = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
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
                    name="categoryTitle"
                    value={values.categoryTitle}
                    label="Category Title"
                    onChange={handleChange}
                    list={categoryList}
                  />
                  {/* {errors.categoryTitle &&
                    touched.categoryTitle &&
                    errors.categoryTitle} */}
                </FormControl>

                <TitleText
                  label="Sub Category Title"
                  name="subCategoryTitle"
                  onChange={handleChange}
                  value={values.subCategoryTitle}
                />
                {/* {errors.subCategoryTitle &&
                  touched.subCategoryTitle &&
                  errors.subCategoryTitle} */}

                <AddButton disabled={isSubmitting} />
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
        </form>
      )}
    </Formik>
  );
}

export default AddSubCategory;
