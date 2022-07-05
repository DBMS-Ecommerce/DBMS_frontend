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
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function CategoryItem(props) {
  return (
    <div>
      <Card sx={{ width: "300px" }}>
        <Stack direction="column" spacing={2}>
          <CardMedia>
            <img
              src={props.image}
              alt="green iguana"
              style={{ height: "10" }}
            />
          </CardMedia>
          <CardContent>
            <Stack direction="column" spacing={3}></Stack>
            <Typography>{props.description} </Typography>
            <Typography>
              <b>LKR. {props.price}</b>
            </Typography>
            <Typography>
              <Stack direction="row" spacing={2}>
                <LocalShippingIcon />
                {props.shipping}
              </Stack>
            </Typography>
          </CardContent>
        </Stack>
      </Card>
    </div>

  );
}
