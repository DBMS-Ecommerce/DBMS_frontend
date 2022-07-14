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
import HeightBox from "../../components/HeightBox";
import NavigationBar from "../../components/NavigationBar";
import SnackBarComponent from "../../components/SnackBarComponent";
import WOMAN from "../../assets/woman.svg";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../theme/colors";

// import Input from "@mui/material/core/Input";

const CustomTextField = styled(TextField)({
  width: 600,
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      width: 600,
      borderRadius: 24,
      borderTopColor: PRIMARY1_COLOR,
      borderBottomColor: PRIMARY2_COLOR,
      borderLeftColor: PRIMARY1_COLOR,
      borderRightColor: PRIMARY2_COLOR,
      borderWidth: "1.8px",
      height: 48,
      // fontColor: "#C8D3F9",
    },
  },
});
const CustomButton = styled(Button)({
  borderRadius: 28,
  height: 48,
  width: 620,
  background: "linear-gradient(180deg, #FF0101 30%, #F7941D 90%)",
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  location: Yup.string().required().label("Location"),
  username: Yup.string()
    .required()
    .label("Username")
    .max(36)
    .matches(/[@]+/, "Username should be an Email"),
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
    ),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm Password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function SignIn() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "Successfully signed up",
  });

  async function registerUser(values) {
    setLoading(true);
    try {
      const res = [1, 2];
      // const res = await api.user.registerUser(values);
      if (res.length === 2) {
        const data = res[1];
        if (data?.statusCode === 201) {
          // dispatch(signUpRequest(data.data.user));
          const userObj = JSON.stringify(data.data.user);
          // localStorage.setItem(ETICKET_USER_DETAILS, userObj);
          // localStorage.setItem(TOKEN_KEY, `Bearer ${data?.data?.token}`);
          navigate("/");
        } else {
          // Error in creating the user account
          setSnackMessage({
            type: "error",
            message: data.message,
          });
          setOpenSnackBar(true);
        }
      }
      setLoading(false);
    } catch (error) {
      // Error in creating the user account
      setLoading(false);
      setSnackMessage({
        type: "error",
        message: "Network Error occured",
      });
      setOpenSnackBar(true);
    }
  }

  return (
    <div>
      <NavigationBar />
      <img
        src={WOMAN}
        alt=""
        style={{
          width: 380,
          position: "absolute",
          marginTop: 5,
          paddingLeft: "900px",
          position: "fixed",
        }}
      />
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
          <div style={{ paddingLeft: "150px" }}>
            <h2 style={{ fontSize: 34, margin: 0, textAlign: "left" }}>
              WELCOME!
            </h2>
            <p
              style={{
                color: "rgba(0,0,0,0.5)",
                textAlign: "left",
                lineHeight: 0.04,
              }}
            >
              Already have an account,
              <Link href="/LoginPage" underline="hover" color="rgba(255,1,1)">
                Login
              </Link>
            </p>
            <Stack direction="column" spacing={2}>
              <Formik
                initialValues={{
                  name: "",
                  username: "",
                  password: "",
                  confirmPassword: "",
                  location: "",
                  phoneNumber: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                  // Validation success and needs to call backend
                  const data = {
                    name: values.name,
                    username: values.username,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                    location: values.location,
                    phoneNumber: values.phoneNumber,
                    userType: "CUSTOMER",
                  };
                  registerUser(data);
                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   setSubmitting(false);
                  // }, 400);
                }}
                validationSchema={validationSchema}
              >
                {(formikProps) => {
                  const { errors, handleSubmit, handleChange, touched } =
                    formikProps;

                  return (
                    <React.Fragment>
                      <div style={{ maxHeight: 70, minHeight: 70 }}>
                        <CustomTextField
                          style={{ marginTop: 4 }}
                          label="Name"
                          variant="outlined"
                          color="secondary"
                          error={errors.name && touched.name}
                          helperText={errors.name || ""}
                          onChange={(event) => handleChange("name")(event)}
                        />
                      </div>
                      <div style={{ maxHeight: 70, minHeight: 70 }}>
                        <CustomTextField
                          label="Username"
                          variant="outlined"
                          color="secondary"
                          type="email"
                          error={errors.username && touched.username}
                          helperText={errors.username || ""}
                          onChange={(event) => handleChange("username")(event)}
                        />
                      </div>
                      <div style={{ maxHeight: 70, minHeight: 70 }}>
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
                      <div style={{ maxHeight: 70, minHeight: 70 }}>
                        <CustomTextField
                          label="Confirm Password"
                          variant="outlined"
                          color="secondary"
                          type="password"
                          error={
                            errors.confirmPassword && touched.confirmPassword
                          }
                          helperText={errors.confirmPassword || ""}
                          onChange={(event) =>
                            handleChange("confirmPassword")(event)
                          }
                        />
                      </div>
                      <div style={{ maxHeight: 70, minHeight: 70 }}>
                        <CustomTextField
                          label="Location"
                          variant="outlined"
                          color="secondary"
                          error={errors.location && touched.location}
                          helperText={errors.location || ""}
                          onChange={(event) => handleChange("location")(event)}
                        />
                      </div>
                      <div style={{ maxHeight: 70, minHeight: 70 }}>
                        <CustomTextField
                          label="Phone Number"
                          variant="outlined"
                          color="secondary"
                          error={errors.phoneNumber && touched.phoneNumber}
                          helperText={errors.phoneNumber || ""}
                          onChange={(event) =>
                            handleChange("phoneNumber")(event)
                          }
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
                        {loading ? <CircularProgress /> : "Sign Up"}
                      </CustomButton>
                    </React.Fragment>
                  );
                }}
              </Formik>
            </Stack>

            <HeightBox height={5} />
            <div style={{ fontSize: 15, width: 350 }}>
              <Stack
                direction="row"
                justifyContent="center"
                spacing={1}
              ></Stack>
            </div>
            <HeightBox height={5} />
          </div>
        </Stack>
      </div>
    </div>
  );
}
