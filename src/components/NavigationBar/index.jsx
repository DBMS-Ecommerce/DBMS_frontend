import React from "react";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CART from '../../assets/cart.svg';
import Link from "@mui/material/Link";


const CustomButton = styled(Button)({
    borderRadius:20,
    height:40,
    width:100,
    background: 'linear-gradient(180deg, #FF0101 30%, #F7941D 90%)',
    textTransform: "none",
    fontSize: 18,
    color:'#000',
    "&:hover": {
        color: "#fff",
        backgroundColor: "#fff",
    },
});

export default function NavigationBar() {
//   const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // maxWidth: 1280,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
    <Stack direction="row" spacing={15}>
      <div>
        <Logo />
      </div>
      <div style={{ width: 750 }}>
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500,marginTop:7,marginLeft:20,
        border:'2px solid',borderRadius:10,
        borderBottomColor:'#F7941D',
        borderTopColor:'#FF0101',
        borderLeftColor:'#FF0101',
        borderRightColor:'#F7941D',
     }}
        >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
        </IconButton>
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search product"
            inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
      </div>
      <Link href="../../pages/CartPage" style={{marginLeft:'-30px',marginRight:'170px'}}>
        <img src={CART} alt="" style={{ width: 80,marginTop:62}} />
      </Link>
      <div style={{ paddingTop: 30 }}>
        <Stack spacing={5} direction="row">
          <CustomButton
            variant="contained"
            disableElevation
            // onClick={() => navigate("/busroutes")}
          >
            Login
          </CustomButton>
          <CustomButton
            variant="contained"
            disableElevation
            // onClick={() => navigate("/bookingview")}
          >
            Sign Up
          </CustomButton>
        </Stack>
      </div></Stack>
    </div>
  );
}