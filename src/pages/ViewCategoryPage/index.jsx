import React from "react";
import CategoryItem from "../../components/CategoryItem";
import IMAGE from "../../assets/bag.svg";
import { Stack } from "@mui/material";
import CategoryList from "../../components/CategoryList";
import { height } from "@mui/system";
import GIRLIMAGE from "../../assets/categoryGirl.svg";

export default function ViewCategory() {
  return (
    <React.Fragment>
      <Stack direction="row" spacing={5}>
        <div>
          <Stack direction="column">
            <div style={{ height: "10px" }}></div>
            <CategoryList />
            <div>
              <img src={GIRLIMAGE} alt="" />
            </div>
          </Stack>
        </div>
        <div style={{ width: "70%" }}>
          <h1>Stationaries</h1>
          <h2>Bags</h2>
          <Stack direction="row" spacing={5}>
            <CategoryItem
              image={IMAGE}
              description={
                "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354"
              }
              // color={"Black"}
              price={"450.50"}
              shipping={"Free shipping"}
            ></CategoryItem>
            <CategoryItem
              image={IMAGE}
              description={
                "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354"
              }
              // color={"Black"}
              price={"450.50"}
              shipping={"Free shipping"}
            ></CategoryItem>
          </Stack>
          <hr />
          <h2>Bags</h2>
          <Stack direction="row" spacing={5}>
            <CategoryItem
              image={IMAGE}
              description={
                "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354"
              }
              // color={"Black"}
              price={"450.50"}
              shipping={"Free shipping"}
            ></CategoryItem>
            <CategoryItem
              image={IMAGE}
              description={
                "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354"
              }
              // color={"Black"}
              price={"450.50"}
              shipping={"Free shipping"}
            ></CategoryItem>
          </Stack>
        </div>
      </Stack>
    </React.Fragment>
  );
}
