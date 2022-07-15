import React from "react";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CART from "../../assets/cart.svg";
import Link from "@mui/material/Link";
import ACCOUNT from "../../assets/account.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../theme/colors";
import { Formik } from "formik";

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
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // function logOutUser() {
  //   // localStorage.removeItem(ETICKET_USER_DETAILS);
  //   // localStorage.removeItem(TOKEN_KEY);
  //   // dispatch(logOutRequest());
  //   navigate("/");
  // }

  async function SearchInput(values) {
    navigate("../SearchResult");
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "fixed",
          // maxWidth: 1280,
          marginLeft: "auto",
          marginRight: "auto",
          minHeight: 150,
          zIndex: "1",
          backgroundColor: "#fff",
        }}
      >
        <Stack direction="row" spacing={15}>
          <div>
            <Logo />
          </div>
          <div style={{ width: 750 }}>
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <Formik
              initialValues={{
                inp: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                const data = {
                  inp: values.inp,
                };
                SearchInput(data);
              }}
            >
              {(formikProps) => {
                const { handleSubmit } = formikProps;
                return (
                  <React.Fragment>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 500,
                        marginTop: 2.5,
                        marginLeft: 20,
                        border: "2px solid",
                        borderRadius: 10,
                        borderBottomColor: PRIMARY2_COLOR,
                        borderTopColor: PRIMARY1_COLOR,
                        borderLeftColor: PRIMARY1_COLOR,
                        borderRightColor: PRIMARY2_COLOR,
                      }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Item"
                        inputProps={{ "aria-label": "search item" }}
                      />
                      <IconButton
                        type="submit"
                        sx={{ p: "10px" }}
                        aria-label="search"
                        onClick={handleSubmit}
                      >
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                  </React.Fragment>
                );
              }}
            </Formik>
          </div>
          <Link
            href="../../cart"
            style={{ marginLeft: "-30px", marginRight: "170px" }}
          >
            <img src={CART} alt="" style={{ width: 80, marginTop: 62 }} />
          </Link>
          {/* {const x=false} */}
          {false ? (
            <div style={{ paddingTop: 30 }}>
              <Stack spacing={5} direction="row">
                <CustomButton
                  variant="contained"
                  disableElevation
                  onClick={() => navigate("/login")}
                  style={{}}
                >
                  Login
                </CustomButton>
                <CustomButton
                  variant="contained"
                  disableElevation
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </CustomButton>
              </Stack>
            </div>
          ) : (
            <div style={{ marginLeft: 270, marginTop: 20 }}>
              <IconButton
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img src={ACCOUNT} alt="" style={{ width: 130 }} />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose && (() => navigate("/profile"))}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose && (() => navigate("/"))}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Stack>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          // maxWidth: 1280,
          marginLeft: "auto",
          marginRight: "auto",
          minHeight: 150,
        }}
      ></div>
    </div>
  );
}
