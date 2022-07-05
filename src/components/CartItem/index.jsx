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

export default function CartItem(props) {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <div>
          <Checkbox
          // sx={{
          //   border: "4px solid",
          //   borderImageSlice: 2,
          //   borderImageSource:
          //     "linear-gradient(180deg, #FF0101 0%, #F7941D 100%)",
          // }}
          />
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
                    {props.shipping}
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
