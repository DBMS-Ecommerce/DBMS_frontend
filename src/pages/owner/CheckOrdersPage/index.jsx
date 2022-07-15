import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import OrderCard from "../../../components/Owner/OrderCard";
import bg_order_owner from "../../../assets/bg_order_owner.svg";

function CheckOrders() {
  const orderLst = [
    {
      order_id: "12345678-345678234581-1234-1234-1334",
      customer_id: "12345678-345678234581-1234-1234-9999",
      type: "DELIVERY",
      date: "2022.02.03",
      total_amount: 34000.0,
      order_status: "PENDING",
    },
    {
      order_id: "99202334-345678234581-1234-1234-1334",
      customer_id: "12345678-345678234581-1234-1234-9999",
      type: "PICKUP",
      date: "2022.02.03",
      total_amount: 34000.0,
      order_status: "CONFIRMED",
    },
    {
      order_id: "87654321-345678234581-1234-1234-1334",
      customer_id: "12345678-345678234581-1234-1234-9999",
      type: "DELIVERY",
      date: "2022.02.03",
      total_amount: 34000.0,
      order_status: "PREPARING",
    },
    {
      order_id: "87654321-345678234581-1234-1234-1334",
      customer_id: "12345678-345678234581-1234-1234-9999",
      type: "DELIVERY",
      date: "2022.02.03",
      total_amount: 34000.0,
      order_status: "PREPARING",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,
        // height: "100%",
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          //   height: "100%",
          //   position: "absolute",
          //   top: "15%",
          marginTop: 3,
        }}
      > */}
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        {orderLst
          ? orderLst.map((order, index) => {
              return (
                <OrderCard
                  key={index}
                  order_id={order.order_id}
                  date={order.date}
                  customer_id={order.customer_id}
                  type={order.type}
                  total_amount={order.total_amount}
                  order_status={order.order_status}
                />
              );
            })
          : null}
      </Stack>
      <img
        src={bg_order_owner}
        style={{
          position: "sticky",
          left: "100%",
          width: 400,
          bottom: "5%",
          zIndex: -1,
        }}
      />
      {/* </Box> */}
    </Box>
  );
}

export default CheckOrders;
