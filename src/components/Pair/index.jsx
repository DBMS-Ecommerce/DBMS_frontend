import React from "react";
import Stack from "@mui/material/Stack";

// import { useNavigate } from "react-router-dom";

export default function Pair(props) {
  //   const navigate = useNavigate();
  return (
    <div>
      <Stack direction="row">
        <p style={{ fontWeight: "bold" }}>{props.title}</p>
        <p style={{ paddingLeft: 40 }}>{props.description}</p>
      </Stack>
    </div>
  );
}
