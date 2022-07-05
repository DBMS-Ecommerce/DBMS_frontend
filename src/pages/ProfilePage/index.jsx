import React from "react";
import LoggedNavigationBar from "../../components/LoggedNavigationBar";
import { Card } from "@mui/material";
import ProfileAvatar from "../../components/ProfileAvatar";
import Pair from "../../components/Pair";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

// import { useNavigate } from "react-router-dom";
const CustomTextField = styled(TextField)({
  margin: 10,
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      borderTopColor: PRIMARY1_COLOR,
      borderBottomColor: PRIMARY2_COLOR,
      borderLeftColor: PRIMARY1_COLOR,
      borderRightColor: PRIMARY2_COLOR,
      borderWidth: "3px",
    },
  },
});
export default function Profile() {
  //   const navigate = useNavigate();
  return (
    <div>
      <LoggedNavigationBar />
      <Stack direction="row" style={{ paddingTop: 50 }}>
        <Card style={{ paddingLeft: 250, paddingTop: 60 }}>
          <ProfileAvatar name={"Samindra Kumari"} />
          <h1>Samindra Kumari</h1>
        </Card>
        <Card style={{}}>
          <Stack direction="column">
            <CustomTextField
              id="outlined-read-only-input"
              label="Name"
              defaultValue="Samindra Kumari"
              InputProps={{
                readOnly: true,
              }}
            />
            <CustomTextField
              id="outlined-read-only-input"
              label="Username"
              defaultValue="samindrakuamrihr@gmail.com"
              InputProps={{
                readOnly: true,
              }}
            />
            <CustomTextField
              id="outlined-read-only-input"
              label="Location"
              defaultValue="Matara"
              InputProps={{
                readOnly: true,
              }}
            />
            <CustomTextField
              id="outlined-read-only-input"
              label="Phone Number"
              defaultValue="76 2176546"
              InputProps={{
                readOnly: true,
              }}
            />
          </Stack>
        </Card>
      </Stack>
    </div>
  );
}
