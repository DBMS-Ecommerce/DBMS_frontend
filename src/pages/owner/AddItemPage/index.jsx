import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormGroup,
  IconButton,
  InputLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import PhotoIcon from "@mui/icons-material/Photo";
import Axios from "axios";
import TitleSelect from "../../../components/Owner/TitleSelect";
import TitleText from "../../../components/Owner/TitleText";
import ItemRow from "../../../components/Owner/ItemRow";
import AddButton from "../../../components/Owner/AddButton";
import { PRIMARY_GRADIENT } from "../../../theme/colors";
import { PRIMARY_FONT } from "../../../theme/fonts";
import SearchIcon from "@mui/icons-material/Search";
import ItemTable from "../../../components/Owner/ItemTable";
import SnackBarComponent from "../../../components/SnackBarComponent";

function AddItem() {
  const [categoryList, setCategoryList] = React.useState([]);
  const [subCategoryList, setSubCategoryList] = React.useState([]);
  const [productList, setProductList] = React.useState([]);
  const [itemList, setItemList] = React.useState([]);

  const [load, setLoad] = React.useState(false);

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

  async function getAllItemsByProduct(productIndex) {
    console.log(productList[productIndex]);
    Axios.get(
      "http://localhost:5000/item_showing/" + productList[productIndex].id
    ).then((value) => {
      setItemList(value.data.items);
      console.log(value.data.items);
    });
  }

  async function handleItems(values) {
    Axios.post("http://localhost:5000/ModifyItem", {
      updated_item_array: values.itemLst,
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

          selectedValue: "",
          itemLst: [],
        }}
        // validate={(values) => {
        //   const errors = {};
        //   // if (!values.categoryTitle) {
        //   //   errors.categoryTitle = "Required";
        //   // }
        //   // if (!values.subCategoryTitle) {
        //   //   errors.subCategoryTitle = "Required";
        //   // }
        //   // if (!values.productTitle) {
        //   //   errors.productTitle = "Required";
        //   // }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("submit");
          const data = {
            itemLst: values.itemLst,
          };
          console.log(data);
          handleItems(data);

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
          setValues,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Paper sx={{ width: "100%", overflow: "hidden", paddingBottom: 5 }}>
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
                    // position: "absolute",
                    marginTop: 4,
                    marginBottom: 3,
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
                          getAllItemsByProduct(e.target.value);
                        }}
                        list={productList.map((product) => product.title)}
                      />
                    </FormControl>
                  </FormGroup>
                </Box>

                {values.itemLst.length != 0 ? (
                  <div>
                    {/* <TitleText />
                  <Button>
                    <SearchIcon />
                  </Button> */}
                    <ItemTable
                      itemLst={values.itemLst}
                      selectedValue={values.selectedValue}
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                    />
                  </div>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      width: 150,
                      borderRadius: 45,
                      background: PRIMARY_GRADIENT,
                      fontFamily: PRIMARY_FONT,
                      fontWeight: 600,
                      fontSize: 16.5,
                      letterSpacing: 1.25,
                      position: "relative",
                      left: "75%",
                      top: -40,
                    }}
                    onClick={(e) => {
                      setFieldValue(
                        "itemLst",
                        itemList
                        //  [
                        //   {
                        //     sku: "AAB12345",
                        //     name: "I Phone X 32 GB Red",
                        //     product_id: "IPX",
                        //     unit_price: "125000",
                        //     quantity: 0,
                        //     image: null,
                        //     is_default: "0",
                        //   },
                        //   {
                        //     sku: "KLJ12345",
                        //     name: "I Phone X 32 GB Black",
                        //     product_id: "IPX",
                        //     unit_price: "130000",
                        //     quantity: 0,
                        //     image: null,
                        //     is_default: "0",
                        //   },
                        //   {
                        //     sku: "QWD12345",
                        //     name: "I Phone X 32 GB White",
                        //     product_id: "IPX",
                        //     unit_price: "145000",
                        //     quantity: 0,
                        //     image: null,
                        //     is_default: "0",
                        //   },
                        // ]
                      );
                    }}
                  >
                    Load Items
                  </Button>
                )}
              </Box>
              <br />
              {values.itemLst.length != 0 ? (
                <AddButton disabled={isSubmitting} />
              ) : null}
            </Paper>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddItem;
