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
import Axios from "axios";

import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [notInEdit, setNotInEdit] = useState(true);
  const [details, setDetails] = useState([]);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "Successfully changed the details",
  });
  React.useEffect(() => {
    Axios.get("http://localhost:5000/user/rggg").then((res) => {
      console.log(res.data[0]);
      setDetails(res.data[0]);
      setPageLoading(false);
    });
  }, []);

  async function changeDetails(values) {
    setLoading(true);
    Axios.post("http://localhost:5000/signup", {
      // name: values.name,
      user_id: values.user_id,
      userName: values.username,
      phone_num: values.phoneNumber,
      address: values.location,
    })
      .then((res) => {
        console.log(res.status);
        setLoading(false);
        navigate("/");
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
      {!pageLoading ? (
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
                    userName: details.username,
                    location: details.address,
                    phoneNumber: details.phone_number,
                  }}
                  onSubmit={(values) => {
                    // Validation success and needs to call backend
                    const data = {
                      name: values.name,
                      username: values.userName,
                      location: values.location,
                      phoneNumber: values.phoneNumber,
                      user_id: details.user_id,
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
                          defaultValue={details.username}
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
                          defaultValue={details.address}
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
                          defaultValue={details.phone_number}
                          error={errors.phoneNumber && touched.phoneNumber}
                          helperText={errors.phoneNumber || ""}
                          onChange={(event) =>
                            handleChange("phoneNumber")(event)
                          }
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
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
