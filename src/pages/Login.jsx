import { Avatar, Box, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuthCalls from "../hooks/useAuthCalls";
import loginImg from "../asset/login.jpg";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginInfo, setLoginInfo] = useState(initialValues);

  const { login, googleAuth } = useAuthCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginInfo?.email, loginInfo?.password);
  };

  return (
    <Box
      sx={{
        bgcolor: "#822e2e",
        minHeight: { xs: "calc(100vh - 120px)", sm: "calc(100vh - 128px)" },
        py: "2rem",
      }}
    >
      <Paper
        elevation={10}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "18rem", sm: "30rem" },
          marginX: "auto",
          gap: "1rem",
          p: "2rem",
          backgroundColor: "#d1c5c5dc",
        }}
        onSubmit={handleSubmit}
      >
        <Avatar
          src={loginImg}
          alt=""
          sx={{
            width: { xs: "10rem", sm: "14rem" },
            height: { xs: "10rem", sm: "14rem" },
            marginX: "auto",
            mb: "2rem",
          }}
        />

        <TextField
          required
          color="warning"
          type="email"
          name="email"
          variant="outlined"
          label="Email"
          value={loginInfo?.email || ""}
          onChange={handleChange}
        />
        <TextField
          required
          color="warning"
          type="password"
          name="password"
          variant="outlined"
          label="Password"
          value={loginInfo?.password || ""}
          onChange={handleChange}
        />
        <Button
          type="submit"
          color="error"
          sx={{ width: "30%", margin: "auto" }}
          variant="contained"
        >
          Login
        </Button>
        <Button
          type="button"
          color="error"
          sx={{ width: "50%", margin: "auto" }}
          onClick={googleAuth}
          variant="outlined"
        >
          Continue with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
