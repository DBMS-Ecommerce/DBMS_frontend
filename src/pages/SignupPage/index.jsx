import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputBase from '@mui/material/InputBase';
// import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Formik } from "formik";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { Stack, ThemeProvider } from "@mui/material";
import * as Yup from "yup";
import HeightBox from "../../components/HeightBox";
import NavigationBar from "../../components/NavigationBar";
import SnackBarComponent from "../../components/SnackBarComponent";
import WOMAN from "../../assets/woman.svg";
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import { IconButton,InputAdornment } from '@material-ui/core';
// import InputLabel from "@mui/material/core/InputLabel";
// import InputAdornment from "@mui/material/core/InputAdornment";
import {VisibilityOff,Visibility} from "@material-ui/icons";
// import Input from "@mui/material/core/Input";

const CustomInputBase = styled(InputBase)({
  width: 600,
  border:'1.8px solid',
  borderRadius:24,
  borderBottomColor:'#F7941D',
  borderTopColor:'#FF0101',
  borderLeftColor:'#FF0101',
  borderRightColor:'#F7941D',
  // borderImage:"linear-gradient(180deg, #FF0101 30%, #F7941D 90%)",
  // borderImageSlice:1,
  
  height: 48,
  padding: 22,
  color:'#C8D3F9',
  fontSize:17
});
const CustomButton = styled(Button)({
borderRadius:28,
height:48,
width:600,
background: 'linear-gradient(180deg, #FF0101 30%, #F7941D 90%)'

});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    userName: Yup.string().required().label("User Name").min(3).max(36),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .length(10),
    password: Yup.string()
      .required()
      .min(8)
      .max(15)
      .label("Password")
      .matches(/\d+/, "Password should contain at least one number")
      .matches(
        /[a-z]+/,
        "Password should contain at least one lowercase character"
      )
      .matches(
        /[A-Z]+/,
        "Password should contain at least one uppercase character"
      )
      .matches(
        /[!@#$%^&*()-+]+/,
        "Password should contain at least one special character"
      )
  });

export default function SignIn() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "",
  });

  

  return (
    <div>
      <NavigationBar/>
      <img src={WOMAN} alt="" style={{ width: 400,position:'absolute',marginTop:40,paddingLeft: "150px"}} />
      <div style={{ maxWidth: 2000, marginLeft: "auto", marginRight: "auto" ,letterSpacing:3}}>
        <SnackBarComponent
          open={openSnackBar}
          setOpen={setOpenSnackBar}
          type={snackMessage.type}
          message={snackMessage.message}
        />
        <HeightBox height={20} />
        <Stack direction="row" spacing={15}>
          <div style={{ paddingLeft: "150px", paddingTop: 16 }}>
            <h2 style={{ fontSize: 34, margin: 0,textAlign:"left" }}>
              WELCOME!
            </h2>
            <p style={{ color: "rgba(0,0,0,0.5)",textAlign:"left",lineHeight:0.03 }}>
              Already have an account, 
            <Link href="/LoginPage" underline="hover" color="rgba(255,1,1)">
              Login
            </Link></p>
            <Stack direction="column" spacing={2}>
            <Formik
                initialValues={{
                    name: "",
                    userName: "",
                    password: "",
                    confirmPassword: "",
                    phoneNumber: "",
                }}
                onSubmit={(values) => {
                    // Validation success and needs to call backend
                    const data = {
                    name: values.name,
                    username: values.userName,
                    password: values.password,
                    phoneNumber: values.phoneNumber,
                    userType: "CUSTOMER",
                    };
                    
                }}
                validationSchema={validationSchema}
                >
                {(formikProps) => {
                    const { errors, handleSubmit, handleChange, touched } =
                    formikProps;

                    return (
                    <React.Fragment>
                        <p style={{textAlign: "left",lineHeight:0.02}}>Name</p>
                        <CustomInputBase
                        style={{marginTop:4}}
                        label=""
                        variant="outlined"
                        color="secondary"
                        error={errors.name && touched.name}
                        helperText={errors.name || ""}
                        onChange={(event) => handleChange("name")(event)}
                        />
                        <p style={{textAlign: "left",lineHeight:0.02}}>Username</p>
                        <CustomInputBase
                        label=""
                        variant="outlined"
                        color="secondary"
                        error={errors.userName && touched.userName}
                        helperText={errors.userName || ""}
                        onChange={(event) => handleChange("userName")(event)}
                        />
                        <p style={{textAlign: "left",lineHeight:0.01}}>Password</p>
                        <CustomInputBase
                        label="Password"
                        variant="outlined"
                        color="secondary"
                        type="password"
                        error={errors.password && touched.password}
                        helperText={errors.password || ""}
                        onChange={(event) => handleChange("password")(event)}
                        />
                        <p style={{textAlign: "left",lineHeight:0.01}}>Location</p>
                        <CustomInputBase
                        label=""
                        variant="outlined"
                        color="secondary"
                        error={errors.name && touched.name}
                        helperText={errors.name || ""}
                        onChange={(event) => handleChange("name")(event)}
                        />
                        <p style={{textAlign: "left",lineHeight:0.01}}>Phone Number</p>
                        <CustomInputBase
                        label=""
                        variant="outlined"
                        color="secondary"
                        error={errors.phoneNumber && touched.phoneNumber}
                        helperText={errors.phoneNumber || ""}
                        onChange={(event) => handleChange("phoneNumber")(event)}
                        />
                        <CustomButton
                        type="submit"
                        color="secondary"
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        disabled={loading}
                        >
                        {loading ? <CircularProgress /> : "Sign Up"}
                        </CustomButton>
                    </React.Fragment>
                    );
                }}
            </Formik>
            </Stack>

            <HeightBox height={15} />
            <div style={{ fontSize: 15, width: 350 }}>
              <Stack direction="row" justifyContent="center" spacing={1}>
              </Stack>
            </div>
            <HeightBox height={15} />
          </div>
          
        </Stack>
      </div>
    </div>
  );
}
