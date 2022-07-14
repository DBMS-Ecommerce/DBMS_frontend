import React from "react";
import Order from "../../components/Order";
import { Stack } from "@mui/material";
import IMAGE from "../../assets/bag.svg";

const ordersList = [
  {
    orderID: 12345,
    description:
      "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354",
    price: 5000.0,
  },
  {
    orderID: 45789,
    description:
      "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354",
    price: 2700.0,
  },
];

export default function MyOrders() {
  return (
    <div style={{ padding: "5%" }}>
      <h1>My Orders</h1>
      <Stack direction="column" spacing={3}>
        {ordersList.map((order) => {
          return (
            <div>
              <Order
                orderID={order.orderID}
                description={order.description}
                image={IMAGE}
                price={order.price}
              />
            </div>
          );
        })}
      </Stack>
    </div>
  );
}
