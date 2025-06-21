import { Box, Button, Fab, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function MobCreator() {
  const growFull = { flexGrow: 1, height: "100%" };


  const nameOfMobButton =()=> {
    return (
    <Button variant="contained">Test</Button>
    )
  }
  return (
    <React.Fragment>
      <Box sx={{ ...growFull }}>
        <Paper
          sx={{
            ...growFull,
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
            gap: 2
          }}
        >
          <Typography variant="h3">
            <strong>Create your Mob</strong>
          </Typography>
          <Fab>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CameraAltIcon />
              <Typography>Upload</Typography>
            </Box>
          </Fab>
          <Box width="60%">

          <TextField placeholder="Name of mob" fullWidth />
          <TextField placeholder = "Size of Mob" inputProps={{ type: 'number'}} defaultValue="1"  fullWidth/>
          <TextField placeholder="Description (Optional)" fullWidth/>
          <Button fullWidth variant="contained">Enter</Button>
          </Box>
        </Paper>
      </Box>
    </React.Fragment>
  );
}
