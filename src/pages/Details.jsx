import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import { Navigate, useNavigate, useParams } from "react-router";
import { delBlog, getBlog, useGetBlog } from "../helpers/firebaseFunctions";
import { Box } from "@mui/system";
import { useAuthContext } from "../contexts/AuthProvider";
import { useEffect, useState } from "react";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = useAuthContext();
  const { blogDetail, getBlog, load } = useGetBlog();
  // if (blogDetail) {
  //   const { desc, email, img, title } = blogDetail;
  // }
  useEffect(() => {
    getBlog(id);
  }, []);

  const handleDel = () => {
    delBlog(id);
    navigate("/");
  };

  return (
    <>
      <Typography
        variant="h5"
        py={2}
        sx={{
          bgcolor: "#7d85a8af",
          textAlign: "center",
          color: " #140505",
        }}
      >
        DETAILS
      </Typography>
      {load ? (
        <Box sx={{ textAlign: "center" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
        </Box>
      ) : (
        <div>
          <Box
            sx={{
              maxWidth: 700,
              width: "50%",
              marginX: "auto",
              marginY: "2rem",
            }}
          >
            <CardMedia
              component="img"
              height="340"
              image={blogDetail?.img}
              alt="green iguana"
              sx={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h3">
                {blogDetail?.title}
              </Typography>
              <Typography variant="p" color="#717171">
                {blogDetail?.date}
              </Typography>
              <Typography variant="body2" color="#3c3c3c">
                {blogDetail?.desc}
              </Typography>
              <Typography variant="h6">{blogDetail?.email}</Typography>
            </CardContent>

            <CardActions>
              <FavoriteBorderIcon />
              <CommentIcon />
            </CardActions>
            <Divider />
            {currentUser?.email === blogDetail?.email && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginY: "1rem",
                }}
              >
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => navigate("/update/" + id)}
                >
                  Update
                </Button>
                <Button variant="outlined" color="error" onClick={handleDel}>
                  Delete
                </Button>
              </Box>
            )}
          </Box>
        </div>
      )}
    </>
  );
};

export default Details;
