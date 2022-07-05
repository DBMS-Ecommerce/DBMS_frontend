import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Formik } from "formik";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import * as Yup from "yup";
// import { loggingRequest } from "../../reducers/user";
import SnackBarComponent from "../../components/SnackBarComponent";
// import api from "../../api";
// import { ETICKET_USER_DETAILS, TOKEN_KEY } from "../../constants";

const CustomTextField = styled(TextField)({
  width: 350,
});

// const validationSchema = Yup.object().shape({
//   userName: Yup.string().required().label("User Name").min(3).max(36),
//   password: Yup.string()
//     .required()
//     .min(8)
//     .max(15)
//     .label("Password")
//     .matches(/\d+/, "Password should contain at least one number")
//     .matches(
//       /[a-z]+/,
//       "Password should contain at least one lowercase character"
//     )
//     .matches(
//       /[A-Z]+/,
//       "Password should contain at least one uppercase character"
//     )
//     .matches(
//       /[!@#$%^&*()-+]+/,
//       "Password should contain at least one special character"
//     ),
// });

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "",
  });

  //   async function loginUser(values) {
  //     setLoading(true);
  //     try {
  //       const res = await api.user.signinUser(values);
  //       const status = res[0];
  //       const data = res[1];

  //       if (data?.statusCode === 200) {
  //         const userObj = JSON.stringify(data.data.user);
  //         localStorage.setItem(ETICKET_USER_DETAILS, userObj);
  //         localStorage.setItem(TOKEN_KEY, `Bearer ${data?.data?.token}`);
  //         dispatch(loggingRequest(data.data));
  //         navigate("/dashboard");
  //       } else if (status === 400) {
  //         setSnackMessage({
  //           type: "error",
  //           message: "Invalid username or password",
  //         });
  //         setOpenSnackBar(true);
  //       } else {
  //         setSnackMessage({
  //           type: "error",
  //           message: "Internal Server Error",
  //         });
  //         setOpenSnackBar(true);
  //       }

  //       setLoading(false);
  //     } catch (error) {
  //       setSnackMessage({
  //         type: "error",
  //         message: "Network error occured",
  //       });
  //       setOpenSnackBar(true);
  //       setLoading(false);
  //     }
  //   }

  return (
    <div style={{ maxWidth: 1280, marginLeft: "auto", marginRight: "auto" }}>
      {/* <SnackBarComponent
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        type={snackMessage.type}
        message={snackMessage.message}
      /> */}
      <HeightBox height={30} />
      <Stack direction="row" spacing={15}>
        <div style={{ paddingLeft: "100px", paddingTop: 50 }}>
          <h2 style={{ fontSize: 48, margin: 0 }}>
            Thanks for Shopping with us!
          </h2>
          <p style={{ color: "rgba(0,0,0,0.5)" }}>
            Enter your details to checkout
          </p>
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
                // loginUser(data);
              }}
              // validationSchema={validationSchema}
            >
              {(formikProps) => {
                const { errors, handleSubmit, handleChange, touched } =
                  formikProps;

                return (
                  <React.Fragment>
                    <CustomTextField
                      label="Username"
                      variant="outlined"
                      color="secondary"
                      error={errors.userName && touched.userName}
                      helperText={errors.userName || ""}
                      onChange={(event) => handleChange("userName")(event)}
                    />

                    <CustomTextField
                      label="Password"
                      variant="outlined"
                      color="secondary"
                      type="password"
                      error={errors.password && touched.password}
                      helperText={errors.password || ""}
                      onChange={(event) => handleChange("password")(event)}
                    />

                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? <CircularProgress /> : "Sign In"}
                    </Button>
                  </React.Fragment>
                );
              }}
            </Formik>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
