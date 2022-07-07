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
import {
  PRIMARY1_COLOR,
  PRIMARY2_COLOR,
  SECONDARY_COLOR,
} from "../../theme/colors";

export default function Order(props) {
  return (
    <div style={{ width: "80%", paddingLeft: "10%" }}>
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
                  <Typography> Order ID:{props.orderID}</Typography>
                  <Typography>{props.description} </Typography>
                  {/* <Typography>
                    Color: <b>{props.color}</b>
                  </Typography> */}
                  <Typography>
                    <b>LKR. {props.price}</b>
                  </Typography>
                  {/* <LocalShippingIcon />
                  {props.shipping} */}
                  Accepted
                  {/* Order Status */}
                  <Button
                    variant="contained"
                    sx={{ width: "20%", backgroundColor: { PRIMARY1_COLOR } }}
                  >
                    View
                  </Button>
                </Stack>
              </div>
            </Stack>
          </CardContent>
        </Stack>
      </Card>
    </div>
  );
}
