import React from "react";
import { Paper, Stack, TextField, Typography, Button } from "@mui/material";
import GIRLIMAGE from "../../assets/categoryGirl.svg";
import { styled } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../theme/colors";
import { PRIMARY_FONT } from "../../theme/fonts";

const CustomTextField = styled(TextField)({
  width: 350,
  marginBottom: 3,
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      borderTopColor: PRIMARY1_COLOR,
      borderBottomColor: PRIMARY2_COLOR,
      borderLeftColor: PRIMARY1_COLOR,
      borderRightColor: PRIMARY2_COLOR,
      borderWidth: "3px",
    },
  },
  fontFamily: PRIMARY_FONT,
});

const CustomButton = styled(Button)({
  background: 'linear-gradient("180deg", "#FF0101", "0%", "#F7941D", "100%")',
  borderRadius: "25px",
});

export default function Checkout() {
  return (
    <div style={{ margin: "100" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Thanks for shopping with us!</h1>
      </div>
      <Stack direction="row" spacing={5}>
        <Paper
          sx={{
            width: "40%",
            textAlign: "center",
            position: "absolute",
            left: "2%",
          }}
        >
          <Stack direction="column" spacing={2}>
            <h1>Order Summery</h1>
            <div style={{ align: "center" }}>
              <img src={GIRLIMAGE} alt="" />
            </div>
            <Typography>ProductID: 1234</Typography>
            <Typography>Description blah blah blah blah</Typography>
            <Typography>price: LKR 4990/=</Typography>
            <Typography>Sub total: LKR 4990/=</Typography>

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Order Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="deliveryOrder"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="deliveryOrder"
                  control={<Radio />}
                  label="Delivery Order: 400 LKR"
                />
                <FormControlLabel
                  value="pickUpOrder"
                  control={<Radio />}
                  label="PickUp Order"
                />
              </RadioGroup>
            </FormControl>
            <Typography>Total: 5400 LKR</Typography>
            <CustomButton
              variant="contained"
              type="submit"
              // sx={{ width: "50%", left: "25%", top: "" }}
              sx={{
                background: "linear-gradient(180deg, #FF0101 0%, #F7941D 100%)",
                width: "50%",
                left: "25%",
                top: "",
              }}
            >
              {" "}
              Place Order
            </CustomButton>
            <div style={{ height: "100" }}></div>
          </Stack>
        </Paper>
        <div style={{ position: "absolute", left: "55%" }}>
          <Stack direction="column" spacing={2}>
            <p style={{ color: "rgba(0,0,0,0.5)" }}>
              Enter your details to login
            </p>
            <div>
              <Stack direction="column" spacing={2}>
                <CustomTextField label="First Name" variant="outlined" />
                <CustomTextField label="Last Name" variant="outlined" />
                <CustomTextField label="Street Address" variant="outlined" />
                <CustomTextField label="City" variant="outlined" />
                <CustomTextField label="PostCode" variant="outlined" />
                <CustomTextField label="Phone" variant="outlined" />
                <CustomTextField label="Email Address" variant="outlined" />
                <TextareaAutosize
                  aria-label="orderNote"
                  placeholder="Order Note"
                  style={{
                    width: 344,
                    height: 100,
                    borderTopColor: PRIMARY1_COLOR,
                    borderBottomColor: PRIMARY2_COLOR,
                    borderLeftColor: PRIMARY1_COLOR,
                    borderRightColor: PRIMARY2_COLOR,
                    borderWidth: "3px",
                  }}
                />
              </Stack>
            </div>
          </Stack>
        </div>
      </Stack>
      <div style={{ height: "200" }}></div>
    </div>
  );
}
