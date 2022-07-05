import React from "react";
import { Card } from "@mui/material";


export default function HomeItem(props) {
//   const { IMAGE } = props.image;

  return (
  <Card style={{margin:10,padding:10,width: 240,overflow: "hidden",textOverflow: "ellipsis",}}>
    <img src={props.image} alt="" style={{ width: 200,}} />
    <p>{props.description}</p>
    <p style={{fontWeight:'bold'}}>{props.price}</p>
  </Card>
  );
}