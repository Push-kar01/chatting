import React from "react";
import { Error as ErrorIcon } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { notfoundit } from "../constants/color";

const NotFound = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh", backgroundImage:`url(${notfoundit.notfound})` ,
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    color: "rgba(122, 144, 118, 1)",
    display: "flex",
    alignItems: "center",
    overflow: "auto",}}>
      <Stack
        alignItems={"center"}
        spacing={"2rem"}
        justifyContent={"center"}
        height="100%"
      >
        <ErrorIcon sx={{ fontSize: "10rem" }} />
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">Not Found</Typography>
        <Link to="/">Go back to home</Link>
      </Stack>
    </Container>
  );
};

export default NotFound;
