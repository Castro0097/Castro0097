import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LiberoA from "../../styles/image/avatar/Libero.png"
import AnaA from "../../styles/image/avatar/Ana.png";
import MarcoA from "../../styles/image/avatar/Marco.png";



export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar id="avat" alt="Remy Sharp" src={LiberoA} />
      <Avatar id="avat" alt="Travis Howard" src={AnaA} />
      <Avatar id="avat" alt="Cindy Baker" src={MarcoA} />
    </Stack>
  );
}
