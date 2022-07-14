import React from "react";
import GIRL from "../../assets/girl.svg";
import NavigationBar from "../../components/NavigationBar";
import CategoryList from "../../components/CategoryList";
import HomeItem from "../../components/HomeItem";
import { Card } from "@mui/material";
import Stack from "@mui/material/Stack";
import IMAGE from "../../assets/camera.svg";
import Box from "@mui/material/Box";
// import { useNavigate } from "react-router-dom";

export default function Home() {
  //   const navigate = useNavigate();
  const items = [
    {
      image: IMAGE,
      description: "NEW Original Lenovo LP40 Camera",
      price: "LKR 1,449.58",
    },
    {
      image: IMAGE,
      description: "NEW fbu Lenovo LP40 Camera",
      price: "LKR 1,449.58",
    },
    {
      image: IMAGE,
      description: "NEW Orvjbiginal Lenovo LP40 Camera",
      price: "LKR 1,449.58",
    },
    {
      image: IMAGE,
      description: "NEW fbiuhm Lenovo LP40 Camera",
      price: "LKR 1,449.58",
    },
    {
      image: IMAGE,
      description: "NEW h h Lenovo LP40 Camera",
      price: "LKR 1,449.58",
    },
  ];
  return (
    <div>
      <NavigationBar />
      <div style={{ textAlign: "center" }}>
        <Stack direction="row">
          <CategoryList />
          <div style={{ margin: 10 }}>
            <Card style={{ backgroundColor: "#F4F4F4" }}>
              <p style={{ fontWeight: "bold", fontSize: 20 }}>
                {items.length == 0 ? "No any maches" : "Search Results"}
              </p>
              <div style={{ overflowY: "scroll", maxHeight: 480 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                    // justifyContent: "space-evenly",
                    p: 1,
                    m: 1,
                    borderRadius: 1,
                  }}
                >
                  {items.map((item) => {
                    return (
                      <HomeItem
                        image={item.image}
                        description={item.description}
                        price={item.price}
                      />
                    );
                  })}
                </Box>
              </div>
            </Card>
          </div>
        </Stack>
      </div>
    </div>
  );
}
