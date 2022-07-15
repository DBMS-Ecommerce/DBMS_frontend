import React from "react";
import { Card } from "@mui/material";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const CustomButton = styled(Button)({
  borderRadius: 15,
  height: 30,
  width: 100,
  background: "linear-gradient(180deg, #FF0101 30%, #F7941D 90%)",
});

export default function HomeItem(props) {
  //   const { IMAGE } = props.image;
  const navigate = useNavigate();

  return (
    <Card
      style={{
        margin: 7,
        padding: 10,
        width: 250,
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <img src={props.image} alt="" style={{ width: 200 }} />
      <p>{props.description}</p>
      <p style={{ fontWeight: "bold" }}>{props.price}</p>
      <CustomButton
        type="submit"
        color="secondary"
        variant="contained"
        size="large"
        onClick={() => {
          navigate("/viewItem");
        }}
      >
        View
      </CustomButton>
    </Card>
  );
}
