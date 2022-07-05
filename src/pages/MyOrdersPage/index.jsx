import React from "react";
import Order from "../../components/Order";
import { Stack } from "@mui/material";
import IMAGE from "../../assets/bag.svg";

export default function MyOrders() {
  return (
    <div>
      <h1>My Orders</h1>
      <Stack direction="column" spacing={3}>
        <div>
          <Order
            orderID={"12345"}
            description={
              "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354"
            }
            image={IMAGE}
            price={"5000.00"}
          />
        </div>
      </Stack>
    </div>
  );
}
