import React, { useState } from "react";
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
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import NavigationBar from "../../components/NavigationBar";
const CutomeImageButton = styled(Button)({
  width: "50% !important",
});

const productDetails = [
  {
    product_ID: 1234,
    title: "IPhone XI",
    unit_price: 15420,
    variants: [
      { variant_id: 123, var_type: "Color" },
      { variant_id: 133, var_type: "Storage" },
    ],
  },
];
export default function ViewItemPage() {
  const { state } = useLocation();
  const { product_ID } = state;

  const [selectedVariants, setSelectedVariants] = useState([]);

  React.useEffect(() => {
    setSelectedVariants(productDetails[0].variants);
  }, []);
  React.useEffect(() => {
    console.log(selectedVariants);
  }, [selectedVariants]);
  const navigate = useNavigate();

  // const handleSelectedVariants = () => {
  //   const variantLst = productDetails[0].variants;
  //   variantLst.map((variant) => {
  //     setSelectedVariants({
  //       ...selectedVariants,
  //       {variant.var_type}: {variant.title},

  //     });
  //   });

  // };

  const productVariants = [
    {
      var_type: "Color",
      variants: [
        { variant_id: 123, title: "Black" },
        { variant_id: 125, title: "Red" },
      ],
    },
    {
      var_type: "Storage",
      variants: [
        { variant_id: 133, title: "32GB" },
        { variant_id: 135, title: "64GB" },
      ],
    },
  ];

  let price = productDetails[0].unit_price; //should change

  // const handleVariant1Change = (event) => {
  //   setValue1(event.target.value1);
  // };

  // const handleVariant2Change = (event) => {
  //   setValue2(event.target.value2);
  // };

  // React.useEffect(() => {
  //   console.log(value1);
  //   console.log(value2);
  // });

  return (
    <div>
      <NavigationBar />
      <Card
        sx={{ width: "80%", position: "absolute", left: "10%", top: "25%" }}
      >
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
                          <Stack direction="row" spacing={5}>
                            {productVariants.map((variantType, ind) => {
                              let defaultVariant = "";
                              productDetails[0].variants.forEach((variant) => {
                                if (variant.var_type == variantType.var_type) {
                                  defaultVariant = variant.variant_id;
                                }
                              });
                              return (
                                <div key={ind}>
                                  <FormLabel id="demo-controlled-radio-buttons-group">
                                    {variantType.var_type}
                                  </FormLabel>

                                  <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    defaultValue={defaultVariant}
                                    onChange={(e) => {
                                      setSelectedVariants((preV) => {
                                        return preV.map((v) => {
                                          if (
                                            v.var_type == variantType.var_type
                                          ) {
                                            return {
                                              ...v,
                                              variant_id: e.target.value,
                                            };
                                          }
                                          return v;
                                        });
                                      });
                                    }}
                                  >
                                    {variantType.variants.map(
                                      (variant, ind2) => {
                                        return (
                                          <FormControlLabel
                                            key={ind2}
                                            value={variant.variant_id}
                                            control={<Radio />}
                                            label={variant.title}
                                          />
                                        );
                                      }
                                    )}
                                  </RadioGroup>
                                </div>
                              );
                            })}
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
