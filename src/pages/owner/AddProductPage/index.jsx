import { Box, FormControl, FormGroup, InputLabel } from "@mui/material";
import React from "react";
import AddButton from "../../../components/Owner/AddButton";
import TitleSelect from "../../../components/Owner/TitleSelect";
import TitleText from "../../../components/Owner/TitleText";
import bg_category from "../../../assets/bg_cat.svg";
import { Formik } from "formik";

function AddProduct() {
  const categoryList = ["Category 1", "Category 2", "Category 3"];
  const subCategoryList = [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
  ];

  return (
    <Formik
      initialValues={{
        categoryTitle: "",
        subCategoryTitle: "",
        productTitle: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.categoryTitle) {
          errors.categoryTitle = "Required";
        }
        if (!values.subCategoryTitle) {
          errors.subCategoryTitle = "Required";
        }
        if (!values.productTitle) {
          errors.productTitle = "Required";
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
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Sub Category Title
                  </InputLabel>
                  <TitleSelect
                    name="subCategoryTitle"
                    value={values.subCategoryTitle}
                    label="Sub Category Title"
                    onChange={handleChange}
                    list={subCategoryList}
                  />
                </FormControl>

                <TitleText
                  label="Product Title"
                  name="productTitle"
                  onChange={handleChange}
                  value={values.productTitle}
                />

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

export default AddProduct;
