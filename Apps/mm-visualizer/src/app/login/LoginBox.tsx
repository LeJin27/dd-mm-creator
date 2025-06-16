"use client";

import { Box, Button, TextField } from "@mui/material";

import { useState, ChangeEvent } from "react";
export default function LoginBox() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: textFieldValue, name: textFieldName } = event.currentTarget;
    setCredentials((prev) => ({
      ...prev,
      [textFieldName]: textFieldValue,
    }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
      <Box sx={{ display: "flex" , justifyContent:'space-evenly',width: '100%'}}>
        <Button fullWidth = {true}>Sign in</Button>
        <Button fullWidth = {true}>Sign Up</Button>
      </Box>
    </Box>
  );
}
