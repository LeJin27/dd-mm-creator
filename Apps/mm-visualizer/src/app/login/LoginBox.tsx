"use client";

import { Alert, Box, Button, TextField } from "@mui/material";

import { useState, ChangeEvent } from "react";
import { loginAction } from "./action";
import { useRouter } from 'next/navigation'
export default function LoginBox() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [failedLogin, setFailedLogin] = useState(false);

  const router = useRouter()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: textFieldValue, name: textFieldName } = event.currentTarget;
    setCredentials((prev) => ({
      ...prev,
      [textFieldName]: textFieldValue,
    }));
  };

  const handleClickSignIn = async() => {
    const validUser = await loginAction({email: credentials.email, password: credentials.password})
    if (validUser) {
      router.push('/dashboard')
    } else {
      setFailedLogin(true)
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2}}>
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
      <Box sx={{ display: "flex" , justifyContent:'space-evenly',width: '100%', gap: 2}}>
        <Button variant = "contained" fullWidth = {true} onClick={handleClickSignIn}>Sign in</Button>
        <Button variant = "contained" color = "secondary" fullWidth = {true}>Sign Up</Button>
      </Box>
      {failedLogin && 
        <Alert severity="warning">Invalid Credentials</Alert>
      }
    </Box>
  );
}
