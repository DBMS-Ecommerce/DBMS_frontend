import React from "react";
import LOGO from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingLeft: 30,
        paddingTop: 30,
        cursor: "pointer",
        position: "absolute",
      }}
      onClick={() => navigate("/")}
    >
      <img src={LOGO} alt="" style={{ width: 110, position: "absolute" }} />
    </div>
  );
}
