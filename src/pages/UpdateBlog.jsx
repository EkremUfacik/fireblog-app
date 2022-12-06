import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { updateBlog, useGetBlog } from "../helpers/firebaseFunctions";

const UpdateBlog = () => {
  const { id } = useParams();
  const { blogDetail, setBlogDetail, getBlog } = useGetBlog();
  const navigate = useNavigate();

  useEffect(() => {
    getBlog(id);
    // eslint-disable-next-line
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogDetail({ ...blogDetail, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(blogDetail, id);
    navigate("/");
  };

  return (
    <div>
      {!blogDetail ? (
        <Box sx={{ textAlign: "center" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt="img"
          />
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", py: "1rem" }}>
          <Box py={1}>
            <img
              style={{ width: "14rem", borderRadius: "5px" }}
              src={blogDetail?.img || ""}
              alt="blogImg"
            />
          </Box>
          <Typography variant="h5" pb={3}>
            UPDATE BLOG
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
              margin: "auto",
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
              value={blogDetail?.title || ""}
              onChange={handleChange}
            ></TextField>
            <TextField
              required
              type="url"
              color="success"
              name="img"
              variant="outlined"
              label="Image Url"
              value={blogDetail?.img || ""}
              onChange={handleChange}
            ></TextField>
            <TextField
              required
              multiline={true}
              rows="5"
              type="text"
              color="success"
              name="desc"
              variant="outlined"
              label="Description"
              value={blogDetail?.desc || ""}
              onChange={handleChange}
            ></TextField>

            <Button
              type="submit"
              color="success"
              variant="contained"
              sx={{ width: "40%", margin: "auto" }}
            >
              Update
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default UpdateBlog;
