import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import { addBlog } from "../helpers/firebaseFunctions";
import blogPhoto from "../asset/newblog.png";
import { fontStyle } from "../global/style";

const NewBlog = () => {
  const { currentUser } = useAuthContext();
  const date = new Date().toDateString();

  const initialValues = {
    title: "",
    desc: "",
    img: "",
    email: currentUser.email,
    date: `${date}`,
  };

  const [blogInfo, setBlogInfo] = useState(initialValues);

  console.log(blogInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogInfo({ ...blogInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(blogInfo);
    setBlogInfo(initialValues);
  };

  return (
    <Box sx={{ bgcolor: "#8ac886", minHeight: "calc(100vh - 64px)" }}>
      <Box
        py={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box pb={2}>
          <img
            style={{ width: "14rem", borderRadius: "5px" }}
            src={blogPhoto}
            alt=""
          />
        </Box>
        <Typography variant="h5" pb={3} sx={{ fontStyle }}>
          NEW BLOG
        </Typography>
        <Box
          maxWidth="40rem"
          minWidth="20rem"
          width="50%"
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            type="text"
            color="success"
            name="title"
            variant="outlined"
            label="Blog Name"
            value={blogInfo?.title || ""}
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            type="url"
            color="success"
            name="img"
            variant="outlined"
            label="Image Url"
            value={blogInfo?.img || ""}
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            multiline="true"
            rows="5"
            type="text"
            color="success"
            name="desc"
            variant="outlined"
            label="Description"
            value={blogInfo?.desc || ""}
            onChange={handleChange}
          ></TextField>

          <Button
            type="submit"
            color="success"
            variant="contained"
            sx={{ width: "35%", margin: "auto" }}
          >
            Add Blog
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewBlog;
