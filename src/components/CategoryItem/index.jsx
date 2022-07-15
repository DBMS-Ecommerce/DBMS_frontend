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
import { useNavigate } from "react-router-dom";

export default function CategoryItem(props) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "0.5%" }}>
      <Card sx={{ width: "300px", padding: "10px" }}>
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
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(180deg, #FF0101 0%, #F7941D 100%)",
                width: "20%",
                left: "70%",
                top: "",
              }}
              onClick={(e) =>
                navigate("/viewItem", {
                  state: {
                    product_ID: props.product_ID,
                  },
                })
              }
            >
              View
            </Button>
          </CardContent>
        </Stack>
      </Card>
    </div>
  );
}
