import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import AddNumberInput from "../AddNumberInput";
import IMAGE from "../../assets/bag.svg";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../theme/colors";

export default function CartItem(props) {
  let price = props.price;
  return (
    <div style={{ width: "80%", paddingLeft: "5%" }}>
      <Stack direction="row" spacing={1}>
        {/* <div>
          <Checkbox
            sx={{
              color: PRIMARY2_COLOR,
              "&.Mui-checked": {
                color: PRIMARY1_COLOR,
              },
            }}
            onChange={() => {
              console.log(price);
            }}
          />
        </div> */}

        <Card sx={{ width: "100%", margin: 2 }}>
          <Stack direction="row" spacing={2}>
            <CardMedia sx={{ width: "30%" }}>
              <img
                src={props.image}
                alt="green iguana"
                style={{ height: "10" }}
              />
            </CardMedia>
            <CardContent sx={{ backgroundColor: "#F4F4F4", width: "70%" }}>
              <Stack direction="row" spacing={1}>
                <div style={{ alignContent: "left", width: "90%" }}>
                  <Stack direction="column" spacing={1}>
                    <Typography>{props.description} </Typography>
                    <Typography>
                      Color: <b>{props.color}</b>
                    </Typography>
                    <Typography>
                      <b>LKR. {props.price}</b>
                    </Typography>
                    <Typography>
                      <Stack direction="row" spacing={2}>
                        <LocalShippingIcon />
                        {props.shipping}
                      </Stack>
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      Quantity:
                      <AddNumberInput initialQuantity={props.initialQuantity} />
                    </Stack>
                  </Stack>
                </div>
                <div>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </Stack>
    </div>
  );
}
