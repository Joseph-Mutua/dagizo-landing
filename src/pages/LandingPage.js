import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

import Image from "mui-image";

import DrawerAppBar from "../components/DrawerAppBar";
import Dagizo_CTA from "../images/Dagizo_CTA.png";
import Dagizo_Peek from "../images/Dagizo_Peek.png";

const LandingPage = () => {
  return (
    <Box sx={{}}>
      <DrawerAppBar />

      <Stack>
        {" "}
        <img src={Dagizo_CTA} alt="Dagizo CTA"></img>
      </Stack>
      <Stack sx={{ bgcolor: "primary.main" }}>
        <Stack direction="row" justifyContent="center">
          {" "}
          <Typography
            sx={{ color: "white", fontSize: "4rem", fontWeight: 700 }}
          >
            WE HELP YOU ORGANIZE
          </Typography>{" "}
        </Stack>
        <Stack direction="row" justifyContent="center">
          {" "}
          <Typography
            sx={{ color: "black", fontSize: "4rem", fontWeight: 700, mt: -3 }}
          >
            YOUR RESTAURANT.
          </Typography>{" "}
        </Stack>

        <Stack direction="row" justifyContent="center" alignItems="center">
          {" "}
          <Typography
            sx={{ color: "white", fontSize: "1.5rem", fontWeight: 500 }}
          >
            Scale your business today with our unified POS system that will help
            you provide exceptional customer satisfaction.
          </Typography>{" "}
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ my: 5 }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              bgcolor: "white",
              fontWeight: "500",
              borderRadius: 5,
              mr: 4,
              ":hover": {
                bgcolor: "black", // theme.palette.primary.main
                color: "white",
              },
            }}
          >
            {" "}
            REQUEST A DEMO
          </Button>{" "}
          <Button
            variant="outlined"
            size="large"
            sx={{
              bgcolor: "black",
              fontWeight: "500",
              borderRadius: 5,
              ":hover": {
                bgcolor: "white", // theme.palette.primary.main
                color: "primary.main",
              },
            }}
          >
            START YOUR FREE TRIAL TODAY
          </Button>{" "}
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="center" sx={{width: "100%"}}>
        {" "}
        {/* <Stack sx={{ border: 0 }}>
          {" "}
          <Image src={Dagizo_Peek} />{" "}
          
        </Stack> */}

        <img src={Dagizo_Peek} style={{width: "100vw"}}></img>
      </Stack>
    </Box>
  );
};

export default LandingPage;
