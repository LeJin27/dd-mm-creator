import { Box, Button, Fab, Paper, TextField, Typography } from "@mui/material";
import { useState, ChangeEvent } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { createMobAction } from "./action";

export default function MobCreator() {
  const growFull = { flexGrow: 1, height: "100%" };

  const [mobDetails, setMobDetails] = useState({ name: undefined, size: 1, description: undefined});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: textFieldValue, name: textFieldName } = event.currentTarget;
    setMobDetails((prev) => ({
      ...prev,
      [textFieldName]: textFieldValue,
    }));
  };

  const handleClickEnter = async() => {
    const mob = await createMobAction({
      name: mobDetails.name,
      size: Number(mobDetails.size),
      description: mobDetails.description,
      image: undefined
    });
    console.log(mob)
  }

  const isFormInvalid = !(mobDetails.name && mobDetails.size);


  return (
    <>
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
            <strong>Add new Mob</strong>
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

          <TextField name = "name" onChange={handleInputChange} placeholder="Name of mob" fullWidth />
          <TextField name = "size" onChange ={handleInputChange} placeholder = "Size of Mob" inputProps={{ type: 'number'}} defaultValue="1"  fullWidth/>
          <TextField name = "description" multiline = {true} minRows= {4} onChange = {handleInputChange} placeholder="Description (Optional)" fullWidth/>
          <Button fullWidth variant="contained" onClick={handleClickEnter} disabled = {isFormInvalid}>Enter</Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
