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
  // const [fieldValue, setFieldValue] = React.useState(null);
  // const [upload, setUpload] = React.useState(true);
  // const [link, setLink] = React.useState("");

  // const handleFieldValue = (event) => {
  //   setFieldValue(event.target.files[0]);
  // };

  // const uploadImage = () => {
  //   let formData = new FormData();

  //   formData.append("file", fieldValue);
  //   formData.append("upload_preset", "qmpp9gnk");

  //   Axios.post(
  //     "https://api.cloudinary.com/v1_1/dxy8gayw4/image/upload",
  //     formData
  //   ).then((reponse) => {
  //     // setLink(reponse['data']['secure_url']);
  //     setLink(reponse["data"]["secure_url"]);
  //     setUpload(false);
  //     console.log(link);
  //   });

  //   console.log("image added");
  // };

  const categoryList = ["Category 1", "Category 2", "Category 3"];
  const subCategoryList = [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
  ];
  const productList = ["Product 1", "Product 2", "Product 3"];

  // React.useEffect(() => {
  //   if (fieldValue !== null) {
  //     uploadImage();
  //   }
  // }, [fieldValue]);

  // React.useEffect(() => {
  //   console.log(fieldValue);
  // });

  return (
    <Formik
      initialValues={{
        categoryTitle: "",
        subCategoryTitle: "",
        productTitle: "",
        price: "77",
        itemLst: [
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
        ],
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
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      list={productList}
                    />
                  </FormControl>
                </FormGroup>
              </Box>
              <Divider />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">SKU</TableCell>
                      <TableCell>NAME</TableCell>
                      <TableCell align="right">UNIT PRICE&nbsp;(RS.)</TableCell>
                      <TableCell align="right">QUANTITY</TableCell>
                      <TableCell align="center">IMAGE</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {values.itemLst
                      ? values.itemLst.map((item, index) => {
                          return (
                            <ItemRow
                              keyRow={index}
                              sku={item.sku}
                              name={item.name}
                              price={item.unit_price}
                              quantity={item.quantity}
                              onChangeQuantity={handleChange}
                            />
                          );
                        })
                      : null}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <br />
            <AddButton disabled={isSubmitting} />
          </Paper>
        </form>
      )}
    </Formik>
  );
}

export default AddItem;
