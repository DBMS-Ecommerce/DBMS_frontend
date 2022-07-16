import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { PRIMARY1_COLOR } from "../../../theme/colors";
import TitleText from "../../../components/Owner/TitleText";
import bg_category from "../../../assets/bg_cat.svg";
import AddButton from "../../../components/Owner/AddButton";
import { Formik } from "formik";
import Axios from "axios";
import SnackBarComponent from "../../../components/SnackBarComponent";
import NavigationBar from "../../../components/Owner/NavBar";

function AddCategory() {
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState({
    type: "success",
    message: "Successfully Added",
  });

  async function handleCategory(values) {
    Axios.post("http://localhost:5000/addCategory", {
      category_title: values.categoryTitle,
    })
      .then((res) => {
        console.log(res.status);
        if (res.status == 200) {
          setOpenSnackBar(true);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        try {
          if (err.response.status == 400) {
            setSnackMessage({ type: "error", message: err.response.data });
            setOpenSnackBar(true);
          } else {
            setSnackMessage({ type: "error", message: "Something went wrong" });
            setOpenSnackBar(true);
          }
        } catch (error) {
          setSnackMessage({
            type: "error",
            message: "Network Error occured",
          });
          setOpenSnackBar(true);
        }
      });
  }

  return (
    <div>
      <NavigationBar />
      <SnackBarComponent
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        type={snackMessage.type}
        message={snackMessage.message}
      />
      <Formik
        initialValues={{
          categoryTitle: "",
          // subCategoryCheck: false
        }}
        validate={(values) => {
          const errors = {};
          if (!values.categoryTitle) {
            errors.categoryTitle = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const data = {
            categoryTitle: values.categoryTitle,
          };
          handleCategory(data);
          setSubmitting(false);
          if (snackMessage.type == "success") {
            resetForm();
          }
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
                  {/* <FormControlLabel
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
                  /> */}

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
    </div>
  );
}

export default AddCategory;
