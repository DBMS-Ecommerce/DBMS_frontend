import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Formik } from "formik";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { Stack, ThemeProvider } from "@mui/material";
import * as Yup from "yup";
import HeightBox from "../../../components/HeightBox";
import SnackBarComponent from "../../../components/SnackBarComponent";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
// import { IconButton, InputAdornment } from "@material-ui/core";
// import InputLabel from "@mui/material/core/InputLabel";
// import InputAdornment from "@mui/material/core/InputAdornment";
// import { VisibilityOff, Visibility } from "@material-ui/icons";
// import Input from "@mui/material/core/Input";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../../theme/colors";
import bg_category from "../../../assets/bg_cat.svg";

const CustomTextField = styled(TextField)({
  width: 600,
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      width: 500,
      borderTopColor: PRIMARY1_COLOR,
      borderBottomColor: PRIMARY2_COLOR,
      borderLeftColor: PRIMARY1_COLOR,
      borderRightColor: PRIMARY2_COLOR,
      borderWidth: "3px",
      height: 58,
      // fontColor: "#C8D3F9",
    },
  },
});
const CustomButton = styled(Button)({
  height: 44,
  width: 100,
  borderRadius: 22,
  background: "linear-gradient(180deg, #FF0101 30%, #F7941D 90%)",
});

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required()
    .label("Username")
    .max(36)
    .matches(/[@]+/, "Username should be an Email"),
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
    ),
});

export default function SignIn() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "",
  });

  async function loginUser(values) {
    setLoading(true);
    try {
      // const res = await api.user.signinUser(values);
      // const status = res[0];
      const status = 400;
      // const data = res[1];
      if (200 === 200) {
        // if (data?.statusCode === 200) {
        // const userObj = JSON.stringify(data.data.user);
        // localStorage.setItem(ETICKET_USER_DETAILS, userObj);
        // localStorage.setItem(TOKEN_KEY, `Bearer ${data?.data?.token}`);
        // dispatch(loggingRequest(data.data));
        navigate("/");
      } else if (status === 400) {
        setSnackMessage({
          type: "error",
          message: "Invalid username or password",
        });
        setOpenSnackBar(true);
      } else {
        setSnackMessage({
          type: "error",
          message: "Internal Server Error",
        });
        setOpenSnackBar(true);
      }

      setLoading(false);
    } catch (error) {
      setSnackMessage({
        type: "error",
        message: "Network error occured",
      });
      setOpenSnackBar(true);
      setLoading(false);
    }
  }

  return (
    <div>
      <div
        style={{
          maxWidth: 2000,
          marginLeft: "auto",
          marginRight: "auto",
          letterSpacing: 3,
        }}
      >
        <SnackBarComponent
          open={openSnackBar}
          setOpen={setOpenSnackBar}
          type={snackMessage.type}
          message={snackMessage.message}
        />

        <Stack direction="row" spacing={15}>
          <div
            style={{ paddingLeft: "150px", paddingTop: 70, marginLeft: "20%" }}
          >
            {/* <h2 style={{ fontSize: 34, margin: 0, textAlign: "left" }}>
              WELCOME BACK!
            </h2> */}

            <Stack direction="column" spacing={2}>
              <Formik
                initialValues={{
                  userName: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  const data = {
                    username: values.userName,
                    password: values.password,
                  };
                  loginUser(data);
                }}
                validationSchema={validationSchema}
              >
                {(formikProps) => {
                  const { errors, handleSubmit, handleChange, touched } =
                    formikProps;

                  return (
                    <React.Fragment>
                      <div style={{ minHeight: 80 }}>
                        <CustomTextField
                          label="Username"
                          variant="outlined"
                          color="secondary"
                          error={errors.userName && touched.userName}
                          helperText={errors.userName || ""}
                          onChange={(event) => handleChange("userName")(event)}
                        />
                      </div>
                      <div style={{ minHeight: 90 }}>
                        <CustomTextField
                          label="Password"
                          variant="outlined"
                          color="secondary"
                          type="password"
                          error={errors.password && touched.password}
                          helperText={errors.password || ""}
                          onChange={(event) => handleChange("password")(event)}
                        />
                      </div>
                      <CustomButton
                        type="submit"
                        color="secondary"
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        disabled={loading}
                      >
                        {loading ? <CircularProgress /> : "Login"}
                      </CustomButton>
                    </React.Fragment>
                  );
                }}
              </Formik>
            </Stack>
            <img
              src={bg_category}
              style={{
                width: 496,
                height: 325,
                position: "absolute",
                bottom: "3%",
                left: "20%",
              }}
            />
            <HeightBox height={15} />
          </div>
        </Stack>
      </div>
    </div>
  );
}
