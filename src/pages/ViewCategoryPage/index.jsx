import React from "react";
import CategoryItem from "../../components/CategoryItem";
import IMAGE from "../../assets/bag.svg";
import { Stack } from "@mui/material";
import CategoryList from "../../components/CategoryList";
import { height } from "@mui/system";
import GIRLIMAGE from "../../assets/categoryGirl.svg";
import Box from "@mui/material/Box";
import NavigationBar from "../../components/NavigationBar";

export default function ViewCategory() {
  const subCategoryList = [
    {
      sub_category_id: 1,
      title: "Mobile Phones",
    },
    {
      sub_category_id: 2,
      title: "Tabs",
    },
    {
      sub_category_id: 3,
      title: "Laptops",
    },
  ];

  const productsList = [
    {
      product_Id: 1234,
      description:
        "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354",
      price: 2500.0,
    },
    {
      product_Id: 5684,
      description:
        "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354",
      price: 1200.0,
    },
    {
      product_Id: 7520,
      description:
        "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354",
      price: 825.0,
    },
    {
      product_Id: 6649,
      description:
        "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354",
      price: 1365.0,
    },
    {
      product_Id: 1269,
      description:
        "Teenager Backpack Leisure Travel Backpack Large Outdoor Hiking Backpack Youth College Student Bag Rucksack 6354",
      price: 4582.0,
    },
  ];
  return (
    <React.Fragment>
      <NavigationBar />
      <Stack direction="row" spacing={5}>
        <div
          style={{
            position: "fixed",
            top: "15%",
            padding: "10px 0px",
          }}
        >
          <Stack direction="column">
            <div style={{ height: "10px" }}></div>
            <CategoryList />
            <div>
              <img src={GIRLIMAGE} alt="" />
            </div>
          </Stack>
        </div>
        <div style={{ width: "70%", position: "relative", left: "25%" }}>
          <h1>Electronic Devices</h1>
          {subCategoryList.map((subCategory) => {
            return (
              <React.Fragment>
                <h2>{subCategory.title}</h2>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    maxWidth: "100%",
                    alignContent: "flex-start",
                    borderRadius: 1,
                  }}
                >
                  {productsList.map((product) => {
                    return (
                      <CategoryItem
                        image={IMAGE}
                        description={product.description}
                        price={product.price}
                        product_ID={product.product_Id}
                      ></CategoryItem>
                    );
                  })}
                </Box>
                <hr />
              </React.Fragment>
            );
          })}
        </div>
      </Stack>
    </React.Fragment>
  );
}
