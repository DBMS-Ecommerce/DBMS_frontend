import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { PRIMARY_FONT } from "../../../theme/fonts";
import { PRIMARY_GRADIENT } from "../../../theme/colors";
import CategoryIcon from "@mui/icons-material/Category";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

// interface DatasetType {
//   data: number[];
//   backgroundColor: string[];
// }

function ViewReports() {
  const labels = ["2010", "2012", "2014", "2016", "2018"];
  const datasets = [
    {
      label: "test",
      data: [2000, 4000, 2300, 2222, 3333],
      backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
    },
  ];

  return (
    <div
      style={{
        marginLeft: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: 27,
          padding: 2,
          background: PRIMARY_GRADIENT,
          color: "white",
          position: "relative",
          top: 30,
          left: -20,
        }}
      >
        <CategoryIcon />
      </Paper>
      {/* <Card sx={{ width: 350, paddingLeft: 3, paddingTop: 2 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
            color="text.secondary"
            gutterBottom
          >
            Product category with most orders
          </Typography>
          <Divider />
          <br />
          <Typography variant="body2" sx={{ fontFamily: PRIMARY_FONT }}>
            Category: <b>Phones & Telecommunications</b>
            <br />
            <br />
            No.of Orders: <b>45</b>
          </Typography>
        </CardContent>
      </Card> */}
      {/* <Paper
        elevation={5}
        sx={{
          width: 300,
          padding: 2,
          // position: "relative",
          // top: 30,
          // left: -20,
        }}
      > */}
      <Pie
        options={{
          // responsive: true,
          // maintainAspectRatio: true,
          width: "400",
          height: "400",
        }}
        data={{
          labels: labels,
          datasets: datasets,
        }}
      />
      {/* </Paper> */}
    </div>
  );
}

export default ViewReports;
