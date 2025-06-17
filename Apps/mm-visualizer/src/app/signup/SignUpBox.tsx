"use client";

import {
  Alert,
  Box,
  Button,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useState, ChangeEvent } from "react";
export default function SignInBox() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [failedLogin, setFailedLogin] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: textFieldValue, name: textFieldName } = event.currentTarget;
    setCredentials((prev) => ({
      ...prev,
      [textFieldName]: textFieldValue,
    }));
  };

  const handleClickSignUp = () => {
    if (credentials.name === '' || credentials.email === '' || credentials.password === '') {
      setFailedLogin(true)
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Typography variant="h5">
        <strong>DD-MM Visualizer SignUp</strong>
      </Typography>
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          p: 2,
          gap: 2,
        }}
      >
        <TextField
          name="name"
          type="name"
          placeholder="Name"
          fullWidth
          onChange={handleInputChange}
          required
        />
        <TextField
          name="email"
          type="email"
          placeholder="Email Address"
          fullWidth
          onChange={handleInputChange}
          required
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          fullWidth
          required
        />
          <Button variant="contained" color="secondary" fullWidth={true} onClick={handleClickSignUp}>
            Sign Up
          </Button>
        {failedLogin && (
          <Alert sx={{ width: "100%" }} severity="warning">
            Fields are empty
          </Alert>
        )}

      </Paper>
      <Typography>Already have an account? <Link href="/login">Login</Link></Typography>
    </Box>
  );
}
