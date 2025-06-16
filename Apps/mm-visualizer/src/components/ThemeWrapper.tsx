"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "../theme";
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { Fab } from "@mui/material";
import React from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [light, setLight] = React.useState(true);
  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
      <Fab
        onClick={() => setLight((prev) => !prev)}
        color="primary"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 9999,
        }}
      >
        {light ? <BedtimeIcon/> : <SunnyIcon/>}
      </Fab>
    </ThemeProvider>
  );
}
