import React from "react";
import { Box, Typography, Stack, Button, Icon } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
//Icons
import QrCodeIcon from "@mui/icons-material/QrCode";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";

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
        <Stack sx={{ textAlign: "center" }}>
          {" "}
          <Typography variant="h1" sx={{ color: "white", fontWeight: 700 }}>
            WE HELP YOU ORGANIZE
          </Typography>{" "}
        </Stack>
        <Stack sx={{ textAlign: "center" }}>
          {" "}
          <Typography
            sx={{ color: "black", fontSize: "4rem", fontWeight: 700, mt: -3 }}
          >
            YOUR RESTAURANT.
          </Typography>{" "}
        </Stack>

        <Stack sx={{ textAlign: "center" }}>
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
      <Stack direction="row" justifyContent="center" sx={{ width: "100%" }}>
        <img src={Dagizo_Peek} style={{ width: "100vw" }}></img>
      </Stack>

      <Grid container spacing={2}>
        <Grid xs={12} md={5}>
          {" "}
          <Stack sx={{ textAlign: "start", mt: 15, ml: 8 }}>
            <Box>
              {" "}
              <Typography variant="h2" fontWeight="700" sx={{ color: "black" }}>
                ONE PLATFORM
              </Typography>
            </Box>
            <Box>
              {" "}
              <Typography variant="h2" fontWeight="600" sx={{ color: "black" }}>
                MANY SOLUTIONS
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                From menu management to easy generation of financial statements,
                <br />
                Dagizo provides you with advanced features and user friendly
                <br />
                interfaces to interact with
              </Typography>

              <Box sx={{mt:5}}>
                {" "}
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    fontWeight: "700",
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
              </Box>
            </Box>
          </Stack>{" "}
        </Grid>
        <Grid xs={0} md={1}></Grid>
        <Grid container xs={12} md={6} spacing={5}>
          <Grid xs={6}>
            {" "}
            <Stack justifyContent="center" sx={{ mt: 8 }}>
              <Box
                display="flex"
                sx={{
                  height: 100,
                  width: 100,
                  bgcolor: "rgba(244, 179, 21, .2)",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  mb: 4,
                }}
              >
                <Icon>
                  <QrCodeIcon sx={{ color: "primary.main" }} />
                </Icon>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ color: "black" }}
                >
                  QR CODE GENERATOR{" "}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">
                  Automatically generate unique QR Codes according to table
                  number, room number or area and make it easy for your
                  customers to scan and pay for orders. This speeds up services
                  with contactlesss payments.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid xs={6}>
            {" "}
            <Stack justifyContent="center" sx={{ mt: 8 }}>
              <Box
                display="flex"
                sx={{
                  height: 100,
                  width: 100,
                  bgcolor: "rgba(244, 179, 21, .2)",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  mb: 4,
                }}
              >
                <Icon>
                  <MenuBookIcon sx={{ color: "primary.main" }} />
                </Icon>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ color: "black" }}
                >
                  MENU SET-UP & MANAGEMENT
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">
                  Quickly create your menus and add food items for your
                  customers to see. You can customise them by adding discounts
                  and amazing deals to boost your sales. Dagizo POS system gives
                  you the ability to import menus from excel or your other
                  outlets menus.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid xs={6}>
            {" "}
            <Stack justifyContent="center" sx={{ mt: 8 }}>
              <Box
                display="flex"
                sx={{
                  height: 100,
                  width: 100,
                  bgcolor: "rgba(244, 179, 21, .2)",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  mb: 4,
                }}
              >
                <Icon>
                  <AssessmentIcon sx={{ color: "primary.main" }} />
                </Icon>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ color: "black" }}
                >
                  QUALITY REPORTING
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">
                  Receive real-time reports to keep you updated on your
                  restaurant operations across all your branches. This helps you
                  track your sales and expenses right from your device. This is
                  important to measure the growth of your business.
                </Typography>
                <Typography variant="h6">
                  You also have the ability to generate financial statements ans
                  share with all the stakeholders
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid xs={6}>
            {" "}
            <Stack justifyContent="center" sx={{ mt: 8 }}>
              <Box
                display="flex"
                sx={{
                  height: 100,
                  width: 100,
                  bgcolor: "rgba(244, 179, 21, .2)",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  mb: 4,
                }}
              >
                <Icon>
                  <TableRestaurantIcon sx={{ color: "primary.main" }} />
                </Icon>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ color: "black" }}
                >
                  BRANCH SETTING & TABLE MANAGEMENT
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">
                  Efficient built-in table management system that helps receive
                  and process all your guest reservations easily. This gives you
                  quick updates on the status of all your tables anytime from
                  all your restaurant branches
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
