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

const CutomeImageButton = styled(Button)({
  width: "50% !important",
});

export default function ViewItemPage() {
  const [value, setValue] = React.useState("");

  const handleVariantChange = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    console.log(value);
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
            <div>
              <Stack direction="column" spacing={2}>
                <div>
                  <Typography>
                    <b>
                      Teenager Backpack Leisure Travel Backpack Large Outdoor
                      Hiking Backpack Youth College Student Bag Rucksack 6354
                    </b>
                    <br></br>
                    Free shipping
                    <hr></hr>
                  </Typography>
                </div>

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
                              value={value}
                              onChange={handleVariantChange}
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
                              value={value}
                              onChange={handleVariantChange}
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
                <div style={{ color: "red" }}>LKR 2500.00</div>
                <div>
                  <AddNumberInput />
                </div>
                <div>
                  <Stack direction="row" spacing={5}>
                    <Button variant="contained">
                      <ShoppingBagIcon />
                      Buy Now
                    </Button>
                    <Button variant="contained">
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
