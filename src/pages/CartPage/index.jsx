import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";

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
    price: 1500.0,
    shipping: "free",
    initialQuantity: 3,
  },
  {
    description: "backpack",
    color: "black",
    price: 1500.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 452.0,
    shipping: "free",
    initialQuantity: 2,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
];

let subTotal = 0.0;

export default function Cart() {
  // const [total, setTotal] = useState(subTotal);

  // const changeSubTotal = (price) => {
  //   this.setTotal(total + price);

  // };
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <NavigationBar />
      <Stack direction="column" spacing={5}>
        <div style={{ height: "80%" }}>
          <Stack direction="row" spacing={10}>
            <div className="CartItemList" style={{ width: "70%" }}>
              <div style={{ width: "100%", height: "60%" }}>
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
                        initialQuantity={item.initialQuantity}
                        // changeTotal={this.changeSubTotal}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ paddingRight: "5%", position: "fixed", left: "70%" }}>
              <Stack direction="column" spacing={8}>
                <Card sx={{ width: "100%" }}>
                  <React.Fragment>
                    <CardContent sx={{ alignContent: "center" }}>
                      <Stack direction="column" spacing={2}>
                        <Typography
                        // sx={{ fontSize: 14, width: 200 }}
                        // color="text.secondary"
                        >
                          <b>Order Summery</b>
                          {cartObjectList.map((item) => {
                            let temp = item.price * item.initialQuantity;
                            subTotal = subTotal + temp;

                            subTotal = subTotal;
                            // return (
                            //   <div>
                            //     {item.price} * {item.initialQuantity} = {temp}
                            //   </div>
                            // );
                          })}
                        </Typography>
                        <Typography>Sub total: LKR {subTotal / 2}</Typography>
                        <Typography>Shipping fee: LKR 400.00</Typography>

                        <Typography>
                          <b>Total: LKR {subTotal / 2 + 400.0}</b>
                        </Typography>
                        <CustomButton
                          sx={{
                            background:
                              "linear-gradient(180deg, #FF0101 0%, #F7941D 100%)",
                          }}
                          variant="contained"
                          onClick={(e) =>
                            navigate("/checkout", {
                              state: {
                                subTotal: subTotal / 2,
                              },
                            })
                          }
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
    </React.Fragment>
  );
}
