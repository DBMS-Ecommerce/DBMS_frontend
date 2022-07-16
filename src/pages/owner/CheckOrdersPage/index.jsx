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
import Axios from "axios";

function CheckOrders() {
  const [orderLst, setOrderLst] = React.useState([]);

  React.useEffect(() => {
    getAllOrders();
  }, []);

  async function getAllOrders() {
    Axios.get("http://localhost:5000/viewOrders").then((value) => {
      setOrderLst(value.data.orders);
      console.log(orderLst);
    });
  }

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
                  date={order.date.substring(0, 10)}
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
