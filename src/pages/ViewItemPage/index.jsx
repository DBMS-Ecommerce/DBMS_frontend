import React from "react";
import IMAGE from "../../assets/bag.svg";
import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import ImageButtons from "../../components/ImageButtons";
import { styled } from "@mui/system";
import { Formik } from "formik";

const CutomeImageButton = styled(Button)({
  width: "50% !important",
});

export default function ViewItemPage() {
  return (
    <div>
      <h1>Nevigation Bar</h1>
      <Card sx={{ width: "80%", position: "absolute", left: "10%" }}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <div>
              <img src={IMAGE}></img>
            </div>
            <div>
              <Stack direction="column" spacing={2}>
                <div>
                  <Typography>
                    <b>
                      Teenager Backpack Leisure Travel Backpack Large Outdoor
                      Hiking Backpack Youth College Student Bag Rucksack 6354
                    </b>
                    <br></br>
                    Free shipping
                    <hr></hr>
                  </Typography>
                </div>
                <div style={{ color: "red" }}>LKR 2500.00</div>
                <div>
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
                          <CustomTextField
                            label="Username"
                            variant="outlined"
                            color="secondary"
                            error={errors.userName && touched.userName}
                            helperText={errors.userName || ""}
                            onChange={(event) =>
                              handleChange("userName")(event)
                            }
                          />

                          <CustomTextField
                            label="Password"
                            variant="outlined"
                            color="secondary"
                            type="password"
                            error={errors.password && touched.password}
                            helperText={errors.password || ""}
                            onChange={(event) =>
                              handleChange("password")(event)
                            }
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
                </div>
              </Stack>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
