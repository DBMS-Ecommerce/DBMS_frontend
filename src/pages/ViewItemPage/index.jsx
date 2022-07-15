import React from "react";
import IMAGE from "../../assets/bag.svg";
import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
// import ImageButtons from "../../components/ImageButtons";
import { styled } from "@mui/system";
import { Formik } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddNumberInput from "../../components/AddNumberInput";
// import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CutomeImageButton = styled(Button)({
  width: "50% !important",
});

export default function ViewItemPage() {
  const { state } = useLocation();
  const { product_ID } = state;

  const navigate = useNavigate();

  const productDetails = [
    { product_ID: 1234, title: "IPhone XI", unit_price: 15420 },
  ];

  let price = productDetails[0].unit_price;

  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");

  const handleVariant1Change = (event) => {
    setValue1(event.target.value1);
  };

  const handleVariant2Change = (event) => {
    setValue2(event.target.value2);
  };

  React.useEffect(() => {
    console.log(value1);
    console.log(value2);
  });
  return (
    <div>
      <h1>Navigation Bar</h1>
      <Card sx={{ width: "80%", position: "absolute", left: "10%" }}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <div>
              <img src={IMAGE}></img>
            </div>
            <div style={{ width: "100%" }}>
              <Stack direction="column" spacing={3}>
                <Typography>Product ID : {product_ID}</Typography>
                <Typography>
                  <b>{productDetails[0].title}</b>

                  <hr></hr>
                </Typography>

                <div>
                  <Formik
                    initialValues={{
                      variantType1: "",
                      variantType2: "",
                    }}
                    onSubmit={(values) => {
                      const data = {
                        variantType1: values.variantType1,
                        variantType2: values.variantType2,
                      };
                      // loginUser(data); handle cart function
                    }}
                    // validationSchema={validationSchema} validate inputs
                  >
                    {(formikProps) => {
                      const { errors, handleSubmit, handleChange, touched } =
                        formikProps;

                      return (
                        <React.Fragment>
                          <Stack direction="row" spacing={1}>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                              Color
                            </FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              defaultValue="black"
                              // value={value1}
                            >
                              <FormControlLabel
                                value="black"
                                control={<Radio />}
                                label="Black"
                              />
                              <FormControlLabel
                                value="blue"
                                control={<Radio />}
                                label="Blue"
                              />
                            </RadioGroup>
                            <FormLabel id="demo-controlled-radio-buttons-group for size">
                              Size
                            </FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group for size"
                              name="controlled-radio-buttons-group for size"
                              defaultValue="small"
                              // value={value2}
                            >
                              <FormControlLabel
                                value="small"
                                control={<Radio />}
                                label="Small"
                              />
                              <FormControlLabel
                                value="medium"
                                control={<Radio />}
                                label="Medium"
                              />
                              <FormControlLabel
                                value="large"
                                control={<Radio />}
                                label="Large"
                              />
                            </RadioGroup>
                          </Stack>
                        </React.Fragment>
                      );
                    }}
                  </Formik>
                </div>
                <div style={{ color: "red" }}>LKR {price}</div>
                <div>
                  <AddNumberInput initialQuantity={0} />
                </div>
                <div>
                  <Stack direction="row" spacing={5}>
                    <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(180deg, #FF0101 0%, #F7941D 100%)",
                        width: "20%",
                        // left: "50%",
                        top: "",
                      }}
                      onClick={(e) =>
                        navigate("/checkout", {
                          state: {
                            subTotal: price,
                          },
                        })
                      }
                    >
                      <ShoppingBagIcon />
                      Buy Now
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(180deg, #FF0101 0%, #F7941D 100%)",
                        width: "20%",
                        // left: "75%",
                        top: "",
                      }}
                    >
                      <AddShoppingCartIcon />
                      Add to Cart
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
