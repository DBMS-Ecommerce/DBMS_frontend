import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { PRIMARY1_COLOR } from "../../../theme/colors";
import TitleText from "../../../components/Owner/TitleText";
import bg_category from "../../../assets/bg_cat.svg";
import AddButton from "../../../components/Owner/AddButton";
import { Formik } from "formik";

function AddCategory() {
  return (
    <Formik
      initialValues={{ categoryTitle: "", subCategoryCheck: false }}
      validate={(values) => {
        const errors = {};
        if (!values.categoryTitle) {
          errors.categoryTitle = "Required";
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
                <TitleText
                  label="Category Title"
                  name="categoryTitle"
                  onChange={handleChange}
                  value={values.categoryTitle}
                  width="100%"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="subCategoryCheck"
                      checked={values.subCategoryCheck}
                      onChange={handleChange}
                      sx={{
                        color: PRIMARY1_COLOR,
                      }}
                    />
                  }
                  label="Sub Categories"
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

export default AddCategory;
