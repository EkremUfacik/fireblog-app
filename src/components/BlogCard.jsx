import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <Card
      elevation={10}
      sx={{ width: 320, height: "28rem" }}
      onClick={() => navigate("/details/" + blog.id)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={blog.img}
          alt="green iguana"
          sx={{ objectFit: "fill" }}
        />
        <Box sx={{ bgcolor: "#cfcdd0ac" }} px={2} py={1}>
          <Typography gutterBottom variant="h4">
            {blog.title}
          </Typography>
          <Typography variant="p" color="#717171">
            {blog.date}
          </Typography>
          <Typography
            className="desc"
            variant="body2"
            color="#3c3c3c"
            sx={{ height: "4rem" }}
          >
            {blog.desc}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: "5px", ml: "5px" }}
        >
          <AccountCircleIcon />
          <Typography variant="subtitle1">{blog.email}</Typography>
        </Box>
      </CardActionArea>
      <CardActions>
        <FavoriteBorderIcon />
        <CommentIcon />
      </CardActions>
    </Card>
  );
}
