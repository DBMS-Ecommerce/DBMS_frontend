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
import Axios from "axios";
import SnackBarComponent from "../../../components/SnackBarComponent";

function AddSubCategory() {
  const [categoryList, setCategoryList] = React.useState([]);

  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState({
    type: "success",
    message: "Successfully Added",
  });

  React.useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllCategories() {
    Axios.get("http://localhost:5000/viewCategories").then((value) => {
      setCategoryList(value.data.categories);
      console.log(value.data.categories);
    });
  }

  async function handleSubCategory(values) {
    Axios.post("http://localhost:5000/addSubCategory", {
      cat_title: categoryList[values.categoryIndex].title,
      sub_category_title: values.subCategoryTitle,
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
      <SnackBarComponent
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        type={snackMessage.type}
        message={snackMessage.message}
      />

      <Formik
        initialValues={{ categoryIndex: "", subCategoryTitle: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.categoryIndex) {
            errors.categoryIndex = "Required";
          }
          if (!values.subCategoryTitle) {
            errors.subCategoryTitle = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const data = {
            categoryIndex: values.categoryIndex,
            subCategoryTitle: values.subCategoryTitle,
          };
          handleSubCategory(data);
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
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category Title
                    </InputLabel>
                    <TitleSelect
                      name="categoryIndex"
                      value={values.categoryIndex}
                      label="Category Title"
                      onChange={handleChange}
                      list={categoryList.map((category) => category.title)}
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
                    width="100%"
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
    </div>
  );
}

export default AddSubCategory;
