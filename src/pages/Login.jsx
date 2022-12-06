import { Box, Button, TextField } from "@mui/material";
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
      sx={{ bgcolor: "#822e2e", minHeight: "calc(100vh - 128px)", py: "2rem" }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "20rem", sm: "30rem" },
          marginX: "auto",
          gap: "1rem",
          p: "2rem",
          border: "1px solid black",
          backgroundColor: "#d1c5c5",
        }}
        onSubmit={handleSubmit}
      >
        <Box py={1} sx={{ textAlign: "center" }}>
          <img
            src={loginImg}
            alt=""
            style={{ borderRadius: "50%", width: "16rem", height: "16rem" }}
          />
        </Box>
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
      </Box>
    </Box>
  );
};

export default Login;
