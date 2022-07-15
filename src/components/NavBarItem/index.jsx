import React from "react";
import Link from "@mui/material/Link";
import { style } from "typestyle";
// import { useNavigate } from "react-router-dom";

export default function NavBarItem(props) {
  //   const navigate = useNavigate();
  // const niceColors = style({
  //     $nest: {
  //       '&:hover': {
  //         color: 'red'
  //       }
  //     }
  // });
  return (
    <div
      style={{
        textAlign: "left",
        paddingLeft: 40,
        fontSize: 18,
        marginTop: 24,
        // '&:hover':{color:'red'}
      }}
      // className={niceColors}
    >
      <Link href={props.page} style={{ textDecoration: "none", color: "#000" }}>
        {props.text}
      </Link>
    </div>
  );
}
