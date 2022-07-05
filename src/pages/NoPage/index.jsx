import { Box, makeStyles, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import { PRIMARY_FONT } from "../../theme/fonts";

import {
  PRIMARY1_COLOR,
  PRIMARY2_COLOR,
  SECONDARY_COLOR,
} from "../../theme/colors";
import lady_404 from "../../assets/lady_404.svg";
import bg_404 from "../../assets/bg_404.svg";

function NoPage() {
  return (
    <div>
      <img
        src={bg_404}
        style={{
          width: 833,
          height: 571,
          zIndex: -1,
          position: "absolute",
          bottom: "0%",
          right: "0%",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 450,
            height: 400,
            position: "absolute",
            top: "20%",
            left: "30%",
          },
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: -1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontFamily: PRIMARY_FONT,
              fontSize: 180,
              fontWeight: 700,
              background:
                "-webkit-linear-gradient(270deg," +
                PRIMARY1_COLOR +
                " 0%," +
                PRIMARY2_COLOR +
                " 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </Typography>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontFamily: PRIMARY_FONT,
              fontSize: 50,
              fontWeight: 700,
              color: SECONDARY_COLOR,
            }}
          >
            Page Not Found
          </Typography>
        </Paper>
        <img
          src={lady_404}
          style={{
            width: 185,
            height: 400,
            position: "absolute",
            top: "30%",
            left: "55%",
          }}
        />
      </Box>
    </div>
  );
}

export default NoPage;
