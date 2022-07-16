import React from "react";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
import Logo from "../../Logo";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import LOGOUT from "../../../assets/logout.svg";
import NavBarItem from "../../NavBarItem";
import ACCOUNT from "../../../assets/account.svg";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CustomButton = styled(Button)({
  borderRadius: 20,
  height: 40,
  width: 100,
  background: "linear-gradient(180deg, #FF0101 30%, #F7941D 90%)",
  textTransform: "none",
  fontSize: 18,
  color: "#000",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#fff",
  },
});

export default function NavigationBar() {
  //   const navigate = useNavigate();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // maxWidth: 1280,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "left",
          position: "fixed",
        }}
      >
        <Stack direction="column" spacing={15}>
          <div style={{ marginBottom: 150 }}>
            <Logo />
          </div>
          <NavBarItem text="Add Category" page="/owner/addCategory" />
          <NavBarItem text="Add Sub Category" page="/owner/addSubCategory" />
          <NavBarItem text="Add Product" page="/owner/addProduct" />
          <NavBarItem text="Add Variant" page="/owner/addVarient" />
          <NavBarItem text="Add Item" page="/owner/addItem" />
          <NavBarItem text="Check Orders" page="/owner/checkOrders" />
          <NavBarItem text="View Reports" page="/owner/viewReports" />
        </Stack>
        <Link href="/owner/login" style={{ padding: 40 }}>
          <img
            src={LOGOUT}
            alt=""
            style={{ width: 100, marginTop: 100, textAlign: "left" }}
          />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // maxWidth: 1280,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "left",
        }}
      ></div>
    </div>
  );
}
