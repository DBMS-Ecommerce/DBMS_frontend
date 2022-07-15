import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#FF0101",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function ProfileAvatar(props) {
  // console.log(props);
  return (
    <div>
      <Avatar
        style={{
          width: 100,
          height: 100,
          fontSize: 50,
          marginLeft: 170,
          marginBottom: 10,
        }}
        {...stringAvatar(props.name)}
      />
    </div>
  );
}
