import {
  Box,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  Stack,
} from "@mui/material";
import React from "react";
import AddButton from "../../../components/Owner/AddButton";
import TitleSelect from "../../../components/Owner/TitleSelect";
import TitleText from "../../../components/Owner/TitleText";
import { FieldArray, Formik, Field } from "formik";
import VariantTypeSeg from "../../../components/Owner/VariantTypeSeg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import VariantSeg from "../../../components/Owner/VariantSeg";
import Axios from "axios";
import SnackBarComponent from "../../../components/SnackBarComponent";

function AddVariant() {
  const [categoryList, setCategoryList] = React.useState([]);
  const [subCategoryList, setSubCategoryList] = React.useState([]);
  const [productList, setProductList] = React.useState([]);
  const [variantLst, setVariantLst] = React.useState([]);

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
      "http://localhost:5000/sub_categoryShowWithId/" +
        categoryList[categoryIndex].category_id
    ).then((value) => {
      setSubCategoryList(value.data.sub_categories);
      console.log(value.data.sub_categories);
    });
  }

  async function getAllProducts(subCategoryIndex) {
    Axios.get(
      "http://localhost:5000/products/" + subCategoryList[subCategoryIndex].id
    ).then((value) => {
      setProductList(value.data.products);
      console.log(value.data.products);
    });
  }

  async function handleVariantLst(variant_array) {
    variant_array.map((variantType) => {
      variantType.variantLst.map((variant) => {
        variantLst.push({
          title: variant.title,
          var_price: variant.price,
          var_type: variantType.type,
        });
      });
    });
    console.log(variantLst);
  }

  async function handleVariants(values) {
    Axios.post("http://localhost:5000/add_item", {
      title: productList[values.productIndex].title,
      variant_array: variantLst,
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
          subCategoryIndex: "",
          productIndex: "",
          variant_array: [
            {
              type: "",
              variantLst: [
                {
                  title: "",
                  price: "",
                },
              ],
            },
          ],
        }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.categoryTitle) {
        //     errors.categoryTitle = "Required";
        //   }
        //   if (!values.subCategoryTitle) {
        //     errors.subCategoryTitle = "Required";
        //   }
        //   if (!values.productTitle) {
        //     errors.productTitle = "Required";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("submit");
          const data = {
            productIndex: values.productIndex,
          };
          console.log(data);
          handleVariantLst(values.variant_array);
          handleVariants(data);
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
                // height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "100%",
                  // height: "90%",
                  position: "absolute",
                  top: "5%",
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
                      name="subCategoryIndex"
                      value={values.subCategoryIndex}
                      label="Sub Category Title"
                      onChange={(e) => {
                        handleChange(e);
                        getAllProducts(e.target.value);
                      }}
                      list={subCategoryList.map(
                        (subCategory) => subCategory.title
                      )}
                    />
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Product Title
                    </InputLabel>
                    <TitleSelect
                      name="productIndex"
                      value={values.productIndex}
                      label="Product Title"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      list={productList.map((product) => product.title)}
                    />
                  </FormControl>
                  <br />
                  <Stack
                    spacing={2}
                    justifyContent="flex-start"
                    alignItems="baseline"
                  >
                    <FieldArray
                      name="variant_array"
                      render={(arrayHelpers) => (
                        <div>
                          {values.variant_array &&
                          values.variant_array.length > 0 ? (
                            values.variant_array.map((vari, index) => (
                              <div key={index}>
                                <VariantTypeSeg
                                  name={`variant_array[${index}].type`}
                                  value={values.variant_array[index].type}
                                  onChange={handleChange}
                                />

                                <FieldArray
                                  name={`variant_array[${index}].variantLst`}
                                  render={(arrayHelpers1) => (
                                    <div>
                                      {values.variant_array[index].variantLst &&
                                      values.variant_array[index].variantLst
                                        .length > 0 ? (
                                        values.variant_array[
                                          index
                                        ].variantLst.map((subf, index1) => (
                                          <div key={index1}>
                                            <VariantSeg
                                              nameTitle={`variant_array[${index}].variantLst[${index1}].title`}
                                              valueTitle={
                                                values.variant_array[index]
                                                  .variantLst[index1].title
                                              }
                                              onChangeTitle={handleChange}
                                              namePrice={`variant_array[${index}].variantLst[${index1}].price`}
                                              valuePrice={
                                                values.variant_array[index]
                                                  .variantLst[index1].price
                                              }
                                              onChangePrice={handleChange}
                                            />
                                            <Stack
                                              spacing={1}
                                              direction="row"
                                              justifyContent="space-between"
                                              alignItems="flex-start"
                                              sx={{ marginBottom: 2 }}
                                            >
                                              <Button
                                                variant="outlined"
                                                name={`variant_array[${index}].variantLst[${index1}]`}
                                                startIcon={
                                                  <RemoveCircleOutlineIcon />
                                                }
                                                onClick={() =>
                                                  arrayHelpers1.remove(index1)
                                                }
                                              >
                                                Remove Variant
                                              </Button>
                                              {values.variant_array[index]
                                                .variantLst.length -
                                                index1 ==
                                              1 ? (
                                                <Button
                                                  variant="outlined"
                                                  name={`variant_array[${index}].variantLst[${index1}]`}
                                                  startIcon={
                                                    <AddCircleOutlineIcon />
                                                  }
                                                  onClick={() =>
                                                    arrayHelpers1.insert(
                                                      index1 + 1,
                                                      ""
                                                    )
                                                  } // insert an empty string at a position
                                                >
                                                  Add Variant
                                                </Button>
                                              ) : null}
                                            </Stack>
                                          </div>
                                        ))
                                      ) : (
                                        <Button
                                          variant="outlined"
                                          startIcon={<AddCircleOutlineIcon />}
                                          sx={{ marginBottom: 2 }}
                                          onClick={() => arrayHelpers1.push("")}
                                        >
                                          {/* show this when user has removed all variant_array from the list */}
                                          Add Variant
                                        </Button>
                                      )}
                                    </div>
                                  )}
                                />
                                <Stack
                                  spacing={1}
                                  direction="row"
                                  justifyContent="space-between"
                                  alignItems="flex-start"
                                  sx={{ marginBottom: 2 }}
                                >
                                  <Button
                                    variant="outlined"
                                    name={`variant_array[${index}].type`}
                                    startIcon={<RemoveCircleOutlineIcon />}
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    Remove Variant Type
                                  </Button>

                                  {values.variant_array.length - index == 1 ? (
                                    <Button
                                      variant="outlined"
                                      name={`variant_array[${index}].type`}
                                      startIcon={<AddCircleOutlineIcon />}
                                      onClick={() =>
                                        arrayHelpers.insert(index + 1, "")
                                      }
                                    >
                                      Add Variant Type
                                    </Button>
                                  ) : null}
                                </Stack>
                              </div>
                            ))
                          ) : (
                            <Button
                              variant="outlined"
                              // name={`variant_array[0].type`}
                              startIcon={<AddCircleOutlineIcon />}
                              onClick={() => arrayHelpers.push("")}
                              sx={{ marginBottom: 2 }}
                            >
                              {/* show this when user has removed all variant_array from the list */}
                              Add Variant Type
                            </Button>
                          )}
                        </div>
                      )}
                    />
                  </Stack>

                  <AddButton disabled={isSubmitting} />
                </FormGroup>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddVariant;
