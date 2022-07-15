import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { PRIMARY_GRADIENT } from "../../../theme/colors";
import { PRIMARY_FONT } from "../../../theme/fonts";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function OrderCard(props) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        minWidth: 730,
        paddingLeft: 2,
        paddingRight: 2,
        maxHeight: 200,
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Typography
            sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
            color="text.secondary"
            gutterBottom
          >
            Order ID: <b>{props.order_id}</b>
          </Typography>
          <Typography
            sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
            color="text.secondary"
            gutterBottom
          >
            Date: <b>{props.date}</b>
          </Typography>
        </Stack>

        <Typography
          sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
          color="text.secondary"
          gutterBottom
        >
          Customer ID: <b>{props.customer_id}</b>
        </Typography>

        <Typography
          sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
          color="text.secondary"
          gutterBottom
        >
          Order Type: <b>{props.type}</b>
        </Typography>

        <Typography
          sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
          color="text.secondary"
          gutterBottom
        >
          Total Amount: <b>{props.total_amount}</b>
        </Typography>

        <Typography
          sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
          color="text.secondary"
          gutterBottom
        >
          Status: <b>{props.order_status}</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            width: 100,
            borderRadius: 45,
            background: PRIMARY_GRADIENT,
            fontFamily: PRIMARY_FONT,
            fontWeight: 600,
            fontSize: 16.5,
            // letterSpacing: 1.25,
            //   position: "absolute",
            right: -600,
            top: -50,
            textDecorationLine: "none",
          }}
          onClick={(e) =>
            navigate("/owner/viewOrder", {
              state: {
                order_id: props.order_id,
                date: props.date,
                customer_id: props.customer_id,
                type: props.type,
                total_amount: props.total_amount,
                order_status: props.order_status,
              },
            })
          }
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export default OrderCard;
