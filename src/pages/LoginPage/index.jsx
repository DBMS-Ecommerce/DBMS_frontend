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
import Axios from "axios";

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
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "",
  });

  async function loginUser(values) {
    setLoading(true);
    Axios.post("http://localhost:5000/login", {
      userName: values.username,
      password: values.password,
    })
      .then((res) => {
        console.log(res.status);
        setLoading(false);
        if (res.data.userType == "customer") {
          navigate("/");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        try {
          if (err.response.status == 400) {
            setSnackMessage({ type: "error", message: err.response.data });
            setOpenSnackBar(true);
          } else {
            setSnackMessage({ type: "error", message: "Something went wrong" });
            setOpenSnackBar(true);
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setSnackMessage({
            type: "error",
            message: "Network Error occured",
          });
          setOpenSnackBar(true);
        }
        setLoading(false);
      });
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
          <div style={{ paddingLeft: "150px", paddingTop: 70 }}>
            <h2 style={{ fontSize: 34, margin: 0, textAlign: "left" }}>
              WELCOME BACK!
            </h2>
            <p
              style={{
                color: "rgba(0,0,0,0.5)",
                textAlign: "left",
                lineHeight: 3,
              }}
            >
              Don't have an account,
              <Link href="/signup" underline="hover" color="rgba(255,1,1)">
                Sign Up
              </Link>
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

            <HeightBox height={15} />
          </div>
        </Stack>
      </div>
    </div>
  );
}
