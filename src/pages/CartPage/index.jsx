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
import AddNumberInput from "../../components/AddNumberInput";
import IMAGE from "../../assets/bag.svg";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CartImage from "../../assets/cartImage.svg";
import { styled } from "@mui/material/styles";
import CartItem from "../../components/CartItem";

const CustomButton = styled(Button)({
  background: 'linear-gradient("180deg", "#FF0101", "0%", "#F7941D", "100%")',
  borderRadius: "25px",
});

export default function Cart() {
  return (
    <Stack direction="column" spacing={5}>
      <h1>Shopping Cart</h1>
      <div>
        <Stack direction="row" spacing={2}>
          <div className="CartItemList">
            <Stack direction="column" spacing={2}>
              <CartItem
                image={IMAGE}
                description={
                  "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354"
                }
                color={"Black"}
                price={"450.50"}
                shipping={"Free shipping"}
              />
              <CartItem
                image={IMAGE}
                description={
                  "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354"
                }
                color={"Black"}
                price={"450.50"}
                shipping={"Free shipping"}
              />
              <CartItem
                image={IMAGE}
                description={
                  "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354"
                }
                color={"Black"}
                price={"450.50"}
                shipping={"Free shipping"}
              />
            </Stack>
          </div>
          <div>
            <Stack direction="column" spacing={10}>
              <Card>
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
                        Buy
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
