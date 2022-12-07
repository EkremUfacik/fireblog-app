import { Avatar, Box, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuthCalls from "../hooks/useAuthCalls";
import registerImg from "../asset/register.jpg";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState(initialValues);

  const { register, googleAuth } = useAuthCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(
      registerInfo?.email,
      registerInfo?.password,
      registerInfo?.name,
      registerInfo?.lastName
    );
  };

  return (
    <Box
      sx={{
        bgcolor: "#6496c5",
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
          backgroundColor: "#afdce9",
        }}
        onSubmit={handleSubmit}
      >
        <Avatar
          src={registerImg}
          alt=""
          sx={{
            width: { xs: "12rem", sm: "14rem" },
            height: { xs: "12rem", sm: "14rem" },
            marginX: "auto",
            mb: "2rem",
          }}
        />

        <TextField
          required
          type="text"
          name="name"
          variant="outlined"
          label="Name"
          value={registerInfo?.name || ""}
          onChange={handleChange}
        />
        <TextField
          required
          type="text"
          name="lastName"
          variant="outlined"
          label="Last Name"
          value={registerInfo?.lastName || ""}
          onChange={handleChange}
        />
        <TextField
          required
          type="email"
          name="email"
          variant="outlined"
          label="Email"
          value={registerInfo?.email || ""}
          onChange={handleChange}
        />
        <TextField
          required
          type="password"
          name="password"
          variant="outlined"
          label="Password"
          value={registerInfo?.password || ""}
          onChange={handleChange}
        />
        <Button
          type="submit"
          color="info"
          sx={{ width: "30%", margin: "auto" }}
          variant="contained"
        >
          Register
        </Button>
        <Button
          type="button"
          color="info"
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

export default Register;
