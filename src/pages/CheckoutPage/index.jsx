import React from "react";
import { Paper, Stack, TextField, Typography, Button } from "@mui/material";
import GIRLIMAGE from "../../assets/categoryGirl.svg";
import { styled } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
// import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { FormGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { PRIMARY1_COLOR, PRIMARY2_COLOR } from "../../theme/colors";
import { PRIMARY_FONT } from "../../theme/fonts";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const CustomTextField = styled(TextField)({
  width: 350,
  marginBottom: 3,
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      borderTopColor: PRIMARY1_COLOR,
      borderBottomColor: PRIMARY2_COLOR,
      borderLeftColor: PRIMARY1_COLOR,
      borderRightColor: PRIMARY2_COLOR,
      borderWidth: "1px",
    },
  },
  fontFamily: PRIMARY_FONT,
});

const CustomButton = styled(Button)({
  background: 'linear-gradient("180deg", "#FF0101", "0%", "#F7941D", "100%")',
  borderRadius: "25px",
  fontFamily: PRIMARY_FONT,
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  // name: Yup.string().required().label("Name"),
  // userName: Yup.string().required().label("User Name").min(3).max(36),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .length(10),
  email: Yup.string().email(),
  postCode: Yup.number().typeError("Post Code must be a number"),
});

let deliveryCharge = 400.0;

const productData = [1225.0];

let total = productData[0];

export default function Checkout() {
  const [count, setCount] = useState(total + 400);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Thanks for shopping with us!</h1>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          street: "",
          city: "",
          postCode: "",
          phoneNumber: "",
          email: "",
          orderNote: "",
          orderType: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.street) {
            errors.street = "Required";
          }
          if (!values.city) {
            errors.city = "Required";
          }
          if (!values.postCode) {
            errors.postCode = "Required";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
              <Paper
                sx={{
                  width: "40%",
                  textAlign: "center",
                  position: "absolute",
                  left: "2%",
                }}
              >
                <Stack direction="column" spacing={2}>
                  <h1>Order Summery</h1>
                  <div style={{ align: "center" }}>
                    <img src={GIRLIMAGE} alt="" />
                  </div>
                  <Typography>Sub Total: {productData[0]}</Typography>
                  {/* <Typography>Description blah blah blah blah</Typography>
                  <Typography>price: LKR 4990/=</Typography>
                  <Typography>Sub total: LKR 4990/=</Typography> */}

                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Order Type
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="deliveryOrder"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="deliveryOrder"
                        control={<Radio />}
                        label="Delivery Order: 400 LKR"
                        onChange={() => setCount(count + deliveryCharge)}
                      />
                      <FormControlLabel
                        value="pickUpOrder"
                        control={<Radio />}
                        label="PickUp Order"
                        onChange={() => setCount(count - deliveryCharge)}
                      />
                    </RadioGroup>
                  </FormControl>
                  <Typography>Total: {count}</Typography>

                  <div style={{ height: "100" }}></div>
                </Stack>
              </Paper>
              <div style={{ position: "absolute", left: "55%" }}>
                <Stack direction="column" spacing={2}>
                  <p style={{ color: "rgba(0,0,0,0.5)" }}>
                    Enter your details to Checkout
                  </p>
                  <div>
                    <Stack direction="column" spacing={1}>
                      <CustomTextField
                        label="First Name"
                        variant="outlined"
                        name="firstName"
                        error={
                          errors.firstName &&
                          touched.firstName &&
                          errors.firstName
                        }
                        helperText={errors.firstName || ""}
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      {/* {errors.firstName &&
                        touched.firstName &&
                        errors.firstName} */}
                      <CustomTextField
                        label="Last Name"
                        variant="outlined"
                        name="lastName"
                        error={errors.lastName && touched.lastName}
                        helperText={errors.lastName || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                      {/* {errors.lastName && touched.lastName && errors.lastName} */}
                      <CustomTextField
                        label="Street Address"
                        variant="outlined"
                        name="street"
                        error={errors.street && touched.street}
                        helperText={errors.street || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.street}
                        InputLabelProps={{
                          style: { fontFamily: { PRIMARY_FONT } },
                        }}
                      />
                      {/* <h1 style={{ fontFamily: { PRIMARY_FONT } }}>
                      </h1> */}
                      {/* {errors.street && touched.street && errors.street} */}
                      <CustomTextField
                        label="City"
                        variant="outlined"
                        name="city"
                        error={errors.city && touched.city}
                        helperText={errors.city || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                      />
                      {/* {errors.city && touched.city && errors.city} */}
                      <CustomTextField
                        label="PostCode"
                        variant="outlined"
                        name="postCode"
                        error={errors.postCode && touched.postCode}
                        helperText={errors.postCode || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.postCode}
                      />
                      {/* {errors.postCode && touched.postCode && errors.postCode} */}
                      <CustomTextField
                        label="Phone"
                        variant="outlined"
                        name="phoneNumber"
                        error={errors.phoneNumber && touched.phoneNumber}
                        helperText={errors.phoneNumber || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                      />
                      {/* {errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber} */}
                      <CustomTextField
                        label="Email Address"
                        variant="outlined"
                        name="email"
                        error={errors.email && touched.email}
                        helperText={errors.email || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {/* <div
                        style={{
                          color: "red",
                          fontSize: "5",
                          textAlign: "right",
                        }}
                      >
                        {errors.email && touched.email && errors.email}
                      </div> */}
                      <TextareaAutosize
                        aria-label="orderNote"
                        placeholder="Order Note (Optional)"
                        style={{
                          width: 344,
                          height: 100,
                          borderTopColor: PRIMARY1_COLOR,
                          borderBottomColor: PRIMARY2_COLOR,
                          borderLeftColor: PRIMARY1_COLOR,
                          borderRightColor: PRIMARY2_COLOR,
                          borderWidth: "1px",
                        }}
                        name="orderNote"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.orderNote}
                      />
                      {/* {errors.orderNote &&
                        touched.orderNote &&
                        errors.orderNote} */}
                      {/* <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button> */}
                      <CustomButton
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                        // sx={{ width: "50%", left: "25%", top: "" }}
                        sx={{
                          background:
                            "linear-gradient(180deg, #FF0101 0%, #F7941D 100%)",
                          width: "50%",
                          left: "25%",
                          top: "",
                        }}
                      >
                        {" "}
                        Place Order
                      </CustomButton>
                    </Stack>
                  </div>
                </Stack>
              </div>
            </Stack>
          </form>
        )}
      </Formik>
    </div>
  );
}
