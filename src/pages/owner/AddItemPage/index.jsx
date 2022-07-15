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

const columns = [
  { id: "sku", label: "SKU", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 200 },
  {
    id: "unitPrice",
    label: "Unit Price",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 170,
    align: "right",
  },
  {
    id: "image",
    label: "Image",
    minWidth: 170,
    align: "right",
  },
];

function AddItem() {
  const categoryList = ["Category 1", "Category 2", "Category 3"];
  const subCategoryList = [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
  ];
  const productList = ["Product 1", "Product 2", "Product 3"];

  const [load, setLoad] = React.useState(false);

  // const handleLoad = (categoryTitle, subCategoryTitle, productTitle) => {
  //   if ((categoryTitle !== "", subCategoryTitle !== "", productTitle !== "")) {
  //     setLoad(true);
  //   }
  // };

  return (
    <Formik
      initialValues={{
        categoryTitle: "",
        subCategoryTitle: "",
        productTitle: "",

        selectedValue: "",
        itemLst: [],
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.categoryTitle) {
        //   errors.categoryTitle = "Required";
        // }
        // if (!values.subCategoryTitle) {
        //   errors.subCategoryTitle = "Required";
        // }
        // if (!values.productTitle) {
        //   errors.productTitle = "Required";
        // }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          console.log(values);
        }, 400);
      }}
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

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Product Title
                    </InputLabel>
                    <TitleSelect
                      name="productTitle"
                      value={values.productTitle}
                      label="Product Title"
                      onChange={handleChange}
                      list={productList}
                    />
                  </FormControl>
                </FormGroup>
              </Box>
              {/* <Button
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
                  setFieldValue("itemLst", [
                    {
                      sku: "AAB12345",
                      name: "I Phone X 32 GB Red",
                      product_id: "IPX",
                      unit_price: "125000",
                      quantity: 0,
                      image: null,
                      is_default: "0",
                    },
                    {
                      sku: "KLJ12345",
                      name: "I Phone X 32 GB Black",
                      product_id: "IPX",
                      unit_price: "130000",
                      quantity: 0,
                      image: null,
                      is_default: "0",
                    },
                    {
                      sku: "QWD12345",
                      name: "I Phone X 32 GB White",
                      product_id: "IPX",
                      unit_price: "145000",
                      quantity: 0,
                      image: null,
                      is_default: "0",
                    },
                  ]);
                }}
              >
                Load Items
              </Button> */}
              {values.itemLst.length != 0 ? (
                <div>
                  <TitleText />
                  <Button>
                    <SearchIcon />
                  </Button>
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
                    setFieldValue("itemLst", [
                      {
                        sku: "AAB12345",
                        name: "I Phone X 32 GB Red",
                        product_id: "IPX",
                        unit_price: "125000",
                        quantity: 0,
                        image: null,
                        is_default: "0",
                      },
                      {
                        sku: "KLJ12345",
                        name: "I Phone X 32 GB Black",
                        product_id: "IPX",
                        unit_price: "130000",
                        quantity: 0,
                        image: null,
                        is_default: "0",
                      },
                      {
                        sku: "QWD12345",
                        name: "I Phone X 32 GB White",
                        product_id: "IPX",
                        unit_price: "145000",
                        quantity: 0,
                        image: null,
                        is_default: "0",
                      },
                    ]);
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
  );
}

export default AddItem;
