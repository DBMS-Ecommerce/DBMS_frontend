import {
  Box,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  Stack,
} from "@mui/material";
import React from "react";
import AddButton from "../../../components/Owner/AddButton";
import TitleSelect from "../../../components/Owner/TitleSelect";
import TitleText from "../../../components/Owner/TitleText";
import { FieldArray, Formik, Field } from "formik";
import VariantTypeSeg from "../../../components/Owner/VariantTypeSeg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import VariantSeg from "../../../components/Owner/VariantSeg";

function AddVariant() {
  const [components, setComponents] = React.useState([]);

  function addComponent(arrayHelpers, index) {
    // setComponents([...components, "Sample Component"]);
    // arrayHelpers.insert(index, "");
  }
  const categoryList = ["Category 1", "Category 2", "Category 3"];
  const subCategoryList = [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
  ];
  const productList = ["Product 1", "Product 2", "Product 3"];

  return (
    <Formik
      initialValues={{
        categoryTitle: "",
        subCategoryTitle: "",
        productTitle: "",
        variantTypeLst: [
          {
            type: "",
            variantLst: [
              {
                title: "",
                price: "",
              },
            ],
          },
          // {
          //   type: "Test2",
          //   variantLst: ["SubT2"],
          // },
        ],
        // variantTypes: {
        //   type: "",
        //   title: "",
        //   price: "",
        // },
      }}
      validate={(values) => {
        const errors = {};
        if (!values.categoryTitle) {
          errors.categoryTitle = "Required";
        }
        if (!values.subCategoryTitle) {
          errors.subCategoryTitle = "Required";
        }
        if (!values.productTitle) {
          errors.productTitle = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              // height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                // height: "90%",
                position: "absolute",
                top: "5%",
              }}
            >
              <FormGroup>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category Title
                  </InputLabel>
                  <TitleSelect
                    name="categoryTitle"
                    value={values.categoryTitle}
                    label="Category Title"
                    onChange={handleChange}
                    list={categoryList}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Sub Category Title
                  </InputLabel>
                  <TitleSelect
                    name="subCategoryTitle"
                    value={values.subCategoryTitle}
                    label="Sub Category Title"
                    onChange={handleChange}
                    list={subCategoryList}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Product Title
                  </InputLabel>
                  <TitleSelect
                    name="productTitle"
                    value={values.productTitle}
                    label="Product Title"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    list={productList}
                  />
                </FormControl>
                <br />
                <Stack
                  spacing={2}
                  justifyContent="flex-start"
                  alignItems="baseline"
                >
                  <FieldArray
                    name="variantTypeLst"
                    render={(arrayHelpers) => (
                      <div>
                        {values.variantTypeLst &&
                        values.variantTypeLst.length > 0 ? (
                          values.variantTypeLst.map((friend, index) => (
                            <div key={index}>
                              <VariantTypeSeg
                                name={`variantTypeLst[${index}].type`}
                                value={values.variantTypeLst[index].type}
                                onChange={handleChange}
                              />

                              <FieldArray
                                name={`variantTypeLst[${index}].variantLst`}
                                render={(arrayHelpers1) => (
                                  <div>
                                    {values.variantTypeLst[index].variantLst &&
                                    values.variantTypeLst[index].variantLst
                                      .length > 0 ? (
                                      values.variantTypeLst[
                                        index
                                      ].variantLst.map((subf, index1) => (
                                        <div key={index1}>
                                          <VariantSeg
                                            nameTitle={`variantTypeLst[${index}].variantLst[${index1}].title`}
                                            valueTitle={
                                              values.variantTypeLst[index]
                                                .variantLst[index1].title
                                            }
                                            onChangeTitle={handleChange}
                                            namePrice={`variantTypeLst[${index}].variantLst[${index1}].price`}
                                            valuePrice={
                                              values.variantTypeLst[index]
                                                .variantLst[index1].price
                                            }
                                            onChangePrice={handleChange}
                                          />
                                          <Stack
                                            spacing={1}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="flex-start"
                                            sx={{ marginBottom: 2 }}
                                          >
                                            <Button
                                              variant="outlined"
                                              name={`variantTypeLst[${index}].variantLst[${index1}]`}
                                              startIcon={
                                                <RemoveCircleOutlineIcon />
                                              }
                                              onClick={() =>
                                                arrayHelpers1.remove(index1)
                                              }
                                            >
                                              Remove Variant
                                            </Button>
                                            {values.variantTypeLst[index]
                                              .variantLst.length -
                                              index1 ==
                                            1 ? (
                                              <Button
                                                variant="outlined"
                                                name={`variantTypeLst[${index}].variantLst[${index1}]`}
                                                startIcon={
                                                  <AddCircleOutlineIcon />
                                                }
                                                onClick={() =>
                                                  arrayHelpers1.insert(
                                                    index1 + 1,
                                                    ""
                                                  )
                                                } // insert an empty string at a position
                                              >
                                                Add Variant
                                              </Button>
                                            ) : null}
                                          </Stack>
                                        </div>
                                      ))
                                    ) : (
                                      <Button
                                        variant="outlined"
                                        startIcon={<AddCircleOutlineIcon />}
                                        sx={{ marginBottom: 2 }}
                                        onClick={() => arrayHelpers1.push("")}
                                      >
                                        {/* show this when user has removed all variantTypeLst from the list */}
                                        Add Variant
                                      </Button>
                                    )}
                                  </div>
                                )}
                              />
                              <Stack
                                spacing={1}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                sx={{ marginBottom: 2 }}
                              >
                                <Button
                                  variant="outlined"
                                  name={`variantTypeLst[${index}].type`}
                                  startIcon={<RemoveCircleOutlineIcon />}
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove Variant Type
                                </Button>

                                {values.variantTypeLst.length - index == 1 ? (
                                  <Button
                                    variant="outlined"
                                    name={`variantTypeLst[${index}].type`}
                                    startIcon={<AddCircleOutlineIcon />}
                                    onClick={() =>
                                      arrayHelpers.insert(index + 1, "")
                                    }
                                  >
                                    Add Variant Type
                                  </Button>
                                ) : null}
                              </Stack>
                            </div>
                          ))
                        ) : (
                          <Button
                            variant="outlined"
                            // name={`variantTypeLst[0].type`}
                            startIcon={<AddCircleOutlineIcon />}
                            onClick={() => arrayHelpers.push("")}
                            sx={{ marginBottom: 2 }}
                          >
                            {/* show this when user has removed all variantTypeLst from the list */}
                            Add Variant Type
                          </Button>
                        )}
                      </div>
                    )}
                  />
                </Stack>

                <AddButton disabled={isSubmitting} />
              </FormGroup>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default AddVariant;
