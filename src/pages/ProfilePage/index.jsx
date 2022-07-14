import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import { Card } from "@mui/material";
import ProfileAvatar from "../../components/ProfileAvatar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../theme/colors";
import PROFILE from "../../assets/profile.svg";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { Formik } from "formik";
import HeightBox from "../../components/HeightBox";

// import { useNavigate } from "react-router-dom";

// const CustomButton = styled(Button)({
//   marginLeft: 300,
//   marginTop: 20,
//   borderRadius: 16,
//   height: 32,
//   width: 100,
//   background: "linear-gradient(180deg, #FF0101 30%, #F7941D 90%)",
// });
const CustomButton = styled(Button)({
  marginLeft: 320,
  marginTop: 7,
  height: 32,
  width: 100,
  background: PRIMARY1_COLOR,
});

const CustomTextField = styled(TextField)({
  margin: 10,
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      width: 400,
      borderTopColor: PRIMARY1_COLOR,
      borderBottomColor: PRIMARY2_COLOR,
      borderLeftColor: PRIMARY1_COLOR,
      borderRightColor: PRIMARY2_COLOR,
      borderWidth: "1.8px",
    },
  },
});
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  location: Yup.string().required().label("Location"),
  userName: Yup.string()
    .required()
    .label("Username")
    .max(36)
    .matches(/[@]+/, "Username should be an Email"),
  phoneNumber: Yup.string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid")
    .length(10),
});
export default function Profile() {
  //   const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [notInEdit, setNotInEdit] = useState(true);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "Successfully changed the details",
  });
  // console.log("false");
  // console.log(!inEdit);

  async function changeDetails(values) {
    setLoading(true);
    setNotInEdit(true);
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
      <Stack direction="row" style={{ paddingTop: 30, paddingLeft: 100 }}>
        <img
          src={PROFILE}
          alt=""
          style={{ width: 800, marginRight: 100, position: "fixed" }}
        />
        <Card
          style={{
            width: 440,
            textAlign: "center",
            marginLeft: "60%",
          }}
        >
          <ProfileAvatar name={"Samindra Kumari"} />
          <Stack direction="column" justifyContent="center">
            <Formik
              initialValues={{
                name: "Sami",
                userName: "samindrakuamrihr@gmail.com",
                location: "Matara",
                phoneNumber: "076 2176546",
              }}
              onSubmit={(values) => {
                // Validation success and needs to call backend
                const data = {
                  name: values.name,
                  username: values.userName,
                  location: values.location,
                  phoneNumber: values.phoneNumber,
                };
                changeDetails(data);
              }}
              validationSchema={validationSchema}
            >
              {(formikProps) => {
                const { errors, handleSubmit, handleChange, touched } =
                  formikProps;
                return (
                  <React.Fragment>
                    <CustomTextField
                      id="outlined-read-only-input"
                      label="Name"
                      defaultValue="Samindra Kumari"
                      error={errors.name && touched.name}
                      helperText={errors.name || ""}
                      onChange={(event) => handleChange("name")(event)}
                      InputProps={{
                        readOnly: notInEdit,
                      }}
                    />
                    <CustomTextField
                      id="outlined-read-only-input"
                      label="Username"
                      defaultValue="samindrakuamrihr@gmail.com"
                      error={errors.userName && touched.userName}
                      helperText={errors.userName || ""}
                      onChange={(event) => handleChange("userName")(event)}
                      InputProps={{
                        readOnly: notInEdit,
                      }}
                    />
                    <CustomTextField
                      id="outlined-read-only-input"
                      label="Location"
                      defaultValue="Matara"
                      error={errors.location && touched.location}
                      helperText={errors.location || ""}
                      onChange={(event) => handleChange("location")(event)}
                      InputProps={{
                        readOnly: notInEdit,
                      }}
                    />
                    <CustomTextField
                      id="outlined-read-only-input"
                      label="Phone Number"
                      defaultValue="76 2176546"
                      error={errors.phoneNumber && touched.phoneNumber}
                      helperText={errors.phoneNumber || ""}
                      onChange={(event) => handleChange("phoneNumber")(event)}
                      InputProps={{
                        readOnly: notInEdit,
                      }}
                    />
                    <CustomButton
                      type="submit"
                      color="secondary"
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                      disabled={loading || notInEdit}
                    >
                      {loading ? <CircularProgress /> : "Save"}
                    </CustomButton>
                  </React.Fragment>
                );
                // console.log(inEdit);
              }}
            </Formik>
            <Button
              type="submit"
              color="warning"
              variant="text"
              size="large"
              onClick={() => setNotInEdit(false)}
              disabled={!notInEdit}
              style={{
                marginLeft: 4,
                marginTop: 7,
                width: 100,
              }}
            >
              Edit
            </Button>
            <HeightBox height={5} />
          </Stack>
        </Card>
      </Stack>
    </div>
  );
}
