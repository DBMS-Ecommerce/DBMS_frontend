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
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import PhotoIcon from "@mui/icons-material/Photo";
import Axios from "axios";
import TitleSelect from "../../../components/Owner/TitleSelect";
import TitleText from "../../../components/Owner/TitleText";

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
  const [fieldValue, setFieldValue] = React.useState(null);
  const [upload, setUpload] = React.useState(true);
  const [link, setLink] = React.useState("");

  const handleFieldValue = (event) => {
    setFieldValue(event.target.files[0]);
  };

  const uploadImage = () => {
    let formData = new FormData();

    formData.append("file", fieldValue);
    formData.append("upload_preset", "qmpp9gnk");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dxy8gayw4/image/upload",
      formData
    ).then((reponse) => {
      // setLink(reponse['data']['secure_url']);
      setLink(reponse["data"]["secure_url"]);
      setUpload(false);
      console.log(link);
    });

    console.log("image added");
  };

  const categoryList = ["Category 1", "Category 2", "Category 3"];
  const subCategoryList = [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
  ];
  const productList = ["Product 1", "Product 2", "Product 3"];

  React.useEffect(() => {
    if (fieldValue !== null) {
      uploadImage();
    }
  }, [fieldValue]);

  React.useEffect(() => {
    console.log(fieldValue);
  });

  return (
    <Formik
      initialValues={{
        photo: null || "",
        categoryTitle: "",
        subCategoryTitle: "",
        productTitle: "",
        price: "",
        quantity: "",
        variantTypeLst: [
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
                      <TableCell>SKU</TableCell>
                      <TableCell align="center">NAME</TableCell>
                      <TableCell align="center">
                        UNIT PRICE&nbsp;(RS.)
                      </TableCell>
                      <TableCell align="center">QUANTITY</TableCell>
                      <TableCell align="center">IMAGE</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      key="1"
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        "Item 1"
                      </TableCell>
                      <TableCell align="right">1</TableCell>
                      <TableCell align="right">2</TableCell>
                      <TableCell align="right">
                        <TitleText
                          label=""
                          name=""
                          onChange={handleChange}
                          value={values.price}
                          type="number"
                          width="20%"
                        />
                      </TableCell>
                      <TableCell align="right">
                        <input
                          accept="image/*"
                          //   className={classes.input}
                          id="icon-button-photo"
                          onChange={handleFieldValue}
                          value={values.fieldValue}
                          type="file"
                          name="itemImg"
                          hidden
                        />
                        <label htmlFor="icon-button-photo">
                          <IconButton color="primary" component="span">
                            {upload ? (
                              <AddAPhotoIcon />
                            ) : (
                              <Avatar alt="" src={link} />
                            )}
                          </IconButton>
                        </label>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </form>
      )}
    </Formik>
  );
}

export default AddItem;
