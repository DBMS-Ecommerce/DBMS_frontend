import { Box, FormControl, FormGroup, InputLabel } from "@mui/material";
import React from "react";
import AddButton from "../../../components/Owner/AddButton";
import TitleSelect from "../../../components/Owner/TitleSelect";
import TitleText from "../../../components/Owner/TitleText";
import bg_category from "../../../assets/bg_cat.svg";
import { Formik } from "formik";
import Axios from "axios";
import SnackBarComponent from "../../../components/SnackBarComponent";

function AddProduct() {
  const [categoryList, setCategoryList] = React.useState([]);
  const [subCategoryList, setSubCategoryList] = React.useState([]);

  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState({
    type: "success",
    message: "Successfully Added",
  });

  React.useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllCategories() {
    Axios.get("http://localhost:5000/view_Add_variant").then((value) => {
      setCategoryList(value.data.categories);
    });
  }

  async function getAllSubCategories(categoryIndex) {
    Axios.get(
      "http://localhost:5000/sub_categoryShow/" +
        categoryList[categoryIndex].category_id
    ).then((value) => {
      setSubCategoryList(value.data.sub_categories);
      // console.log(value.data.sub_categories);
    });
  }

  async function handleProduct(values) {
    console.log(subCategoryList[values.subCategoryTitle]);
    Axios.post("http://localhost:5000/addProduct", {
      s_cat_id: subCategoryList[values.subCategoryTitle],
      title: values.productTitle,
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
        initialValues={{
          categoryIndex: "",
          subCategoryTitle: "",
          productTitle: "",
        }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.categoryIndex) {
        //     errors.categoryIndex = "Required";
        //   }
        //   if (!values.subCategoryTitle) {
        //     errors.subCategoryTitle = "Required";
        //   }
        //   if (!values.productTitle) {
        //     errors.productTitle = "Required";
        //   }
        //   return errors;
        // }}
        // onSubmit={() => {
        //   console.log("submit!");
        // }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("submit");
          const data = {
            subCategoryTitle: values.subCategoryTitle,
            productTitle: values.productTitle,
          };
          console.log(data);
          handleProduct(data);
          setSubmitting(false);
          if (snackMessage.type == "success") {
            resetForm();
          }
        }}
        validator={() => ({})}
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
                      onChange={(e) => {
                        handleChange(e);
                        getAllSubCategories(e.target.value);
                      }}
                      list={categoryList.map((category) => category.title)}
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
                    width="100%"
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
    </div>
  );
}

export default AddProduct;
