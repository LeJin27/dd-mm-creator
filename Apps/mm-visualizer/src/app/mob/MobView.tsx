"use client";

import { Grid } from "@mui/material";
import MobList from "./MobList";
import MobCreator from "./MobCreator";

export default function MobView() {

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        border: "1px solid black",
        height:"100vh"
      }}
    >
      <Grid size={6} sx={{ border: "1px solid black", height: "100%" }}>
        <MobCreator/>
      </Grid>
      <Grid size={4} sx={{ border: "1px solid black", height: "100%" }}>
        <MobList/>
      </Grid>
    </Grid>
  );
}
