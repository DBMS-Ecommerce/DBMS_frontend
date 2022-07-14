import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import "@fontsource/ubuntu";
import {
  PRIMARY1_COLOR,
  PRIMARY2_COLOR,
  SECONDARY_COLOR,
} from "../../theme/colors";
import AddNumberInput from "../../components/AddNumberInput";
import IMAGE from "../../assets/bag.svg";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CartImage from "../../assets/cartImage.svg";
import { styled } from "@mui/material/styles";
import CartItem from "../../components/CartItem";
import { Link } from "react-router-dom";

const CustomButton = styled(Button)({
  background: 'linear-gradient("180deg", "#FF0101", "0%", "#F7941D", "100%")',
  borderRadius: "25px",
});

const cartItems = [
  ["backpack", "Black", "450.50", "Free shipping"],
  ["backpack2", "Black", "450.50", "Free shipping"],
  ["backpack", "Black", "450.50", "Free shipping"],
];

const cartObjectList = [
  {
    description: "backpack",
    color: "black",
    price: "459",
    shipping: "free",
    initialQuantity: 2,
  },
  {
    description: "backpack",
    color: "black",
    price: "459",
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: "459",
    shipping: "free",
    initialQuantity: 3,
  },
  {
    description: "backpack",
    color: "black",
    price: "459",
    shipping: "free",
    initialQuantity: 5,
  },
];

export default function Cart() {
  return (
    <Stack direction="column" spacing={5}>
      <h1>Shopping Cart</h1>
      <div style={{ height: "80%" }}>
        <Stack direction="row" spacing={1}>
          <div className="CartItemList" style={{ width: "70%" }}>
            <div style={{ width: "100%", height: "60%", overflow: "scroll" }}>
              {/* {cartItems.map((item) => {
                  return (
                    <CartItem
                      image={IMAGE}
                      description={item[0]}
                      color={item[1]}
                      price={item[2]}
                      shipping={item[3]}
                    />
                  );
                })} */}
              {cartObjectList.map((item) => {
                return (
                  <div style={{ margin: 10 }}>
                    <CartItem
                      image={IMAGE}
                      description={item.description}
                      color={item.color}
                      price={item.price}
                      shipping={item.shipping}
                      initialQuantity={item.initialQuantity}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ paddingRight: "5%" }}>
            <Stack direction="column" spacing={10}>
              <Card sx={{ width: "100%" }}>
                <React.Fragment>
                  <CardContent>
                    <Stack direction="column" spacing={2}>
                      <Typography
                      // sx={{ fontSize: 14, width: 200 }}
                      // color="text.secondary"
                      >
                        <b>Order Summery</b>
                      </Typography>
                      <Typography>Sub total: LKR 1245.00</Typography>
                      <Typography>Shipping fee: LKR 400.00</Typography>
                      <Typography>
                        <b>Total: LKR 1645.00</b>
                      </Typography>
                      <CustomButton
                        sx={{
                          background:
                            "linear-gradient(180deg, #FF0101 0%, #F7941D 100%)",
                        }}
                        variant="contained"
                      >
                        Proceed To Checkout
                        {/* <Link
                          component="button"
                          variant="body2"
                          href="/checkout"
                          onClick={() => {
                            console.info("I'm a button.");
                          }}
                        >
                          {" "}
                          Proceed to Checkout
                        </Link> */}
                      </CustomButton>
                    </Stack>
                  </CardContent>
                </React.Fragment>
              </Card>
              <div className="ImageDiv">
                <img
                  src={CartImage}
                  alt="green iguana"
                  // style={{ height: "10" }}
                />
              </div>
            </Stack>
          </div>
        </Stack>
      </div>

      {/* Create Component */}
    </Stack>
  );
}
