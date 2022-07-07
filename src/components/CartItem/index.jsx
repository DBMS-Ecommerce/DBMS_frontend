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



export default function CartItem(props) {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <div>
          <Checkbox />
        </div>

        <Card>
          <Stack direction="row" spacing={2}>
            <CardMedia>
              <img
                src={props.image}
                alt="green iguana"
                style={{ height: "10" }}
              />
            </CardMedia>
            <CardContent sx={{ backgroundColor: "#F4F4F4" }}>
              <Stack direction="row" spacing={1}>
                <div style={{ alignContent: "left" }}>
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
                    <AddNumberInput />
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
