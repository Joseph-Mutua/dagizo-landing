import React from "react";
import { Box, Typography } from "@mui/material";

import DrawerAppBar from "../components/DrawerAppBar";


const LandingPage = () => {
  return (
    <Box sx={{bgcolor: "primary.main"}}>
      <DrawerAppBar />
      <Typography>I am the Landing Page</Typography>
    </Box>
  );
};

export default LandingPage;
