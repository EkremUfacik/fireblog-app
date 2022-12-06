import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";
import { useFetch } from "../helpers/firebaseFunctions";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();

  return (
    <>
      <Typography
        variant="h5"
        py={2}
        sx={{ bgcolor: "#7d85a8af", textAlign: "center", color: "#140505" }}
      >
        DASHBOARD
      </Typography>
      <Grid
        container
        minHeight="calc(100vh - 128px)"
        p={4}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#e9e8e8",
          gap: "4rem",
        }}
      >
        {isLoading ? (
          <Box
            sx={{
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            <img
              src="https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
              width="50px"
              alt="load"
            />
          </Box>
        ) : (
          blogList?.map((blog) => (
            <Grid item key={blog.id}>
              <BlogCard blog={blog} />
            </Grid>
          ))
        )}
        {!blogList.length && !isLoading && (
          <Typography variant="button">There is no blog!!</Typography>
        )}
      </Grid>
    </>
  );
};

export default Dashboard;
