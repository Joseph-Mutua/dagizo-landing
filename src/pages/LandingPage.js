import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
//Icons
import QrCodeIcon from "@mui/icons-material/QrCode";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import DrawerAppBar from "../components/DrawerAppBar";

import Dagizo_Logo from "../images/Dagizo_Logo.png";
import Dagizo_CTA from "../images/Dagizo_CTA.png";
import Dagizo_Peek from "../images/Dagizo_Peek.png";
import Featured_Dishes from "../images/Featured_Dishes.png";
import Order_Progress from "../images/Order_Progress.png";
import Project_Peek from "../images/Project_Peek.png";

const LandingPage = () => {
  const [tabValue, setTabValue] = useState("home");

  const handleChange = (value) => {
    setTabValue(value);
  };
  return (
    <Stack>
      <DrawerAppBar />

      <Stack>
        {" "}
        <img
          src={Dagizo_CTA}
          alt="Dagizo CTA"
          style={{ widht: "100%", height: "100%" }}
        ></img>
      </Stack>
      <Stack sx={{ bgcolor: "primary.main" }}>
        {" "}
        <Stack sx={{ textAlign: "center" }}>
          {" "}
          <Typography
            sx={{ color: "white", fontSize: "3.5rem", fontWeight: 700 }}
          >
            WE HELP YOU ORGANIZE
          </Typography>{" "}
        </Stack>
        <Stack sx={{ textAlign: "center" }}>
          {" "}
          <Typography
            sx={{ color: "black", fontSize: "3.5rem", fontWeight: 700 }}
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
          sx={{ my: 5, }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              bgcolor: "white",
              fontWeight: "500",
              borderRadius: 5,
              mx: 2,
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
              mx:2,
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
          <Stack sx={{ textAlign: "start", mt: 15, pl: 8 }}>
            <Box>
              {" "}
              <Typography variant="h3" fontWeight="700" sx={{ color: "black" }}>
                ONE PLATFORM
              </Typography>
            </Box>
            <Box>
              {" "}
              <Typography variant="h3" fontWeight="700" sx={{ color: "black" }}>
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

              <Box sx={{ mt: 5 }}>
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
          <Grid xs={12} md={6}>
            {" "}
            <Stack justifyContent="center" sx={{ mt: 8, mx:3 }}>
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
          <Grid xs={12} md={6}>
            {" "}
            <Stack justifyContent="center" sx={{ mt: 8, mx:3 }}>
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
          <Grid xs={12} md={6}>
            {" "}
            <Stack justifyContent="center" sx={{ mt: 2, mx:3 }}>
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
          <Grid xs={12} md={6}>
            {" "}
            <Stack justifyContent="center" sx={{ mt: 2 ,mx:3 }}>
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

      <Grid container spacing={5} sx={{ mt: 5 }}>
        <Grid xs={12} md={6}>
          <Box>
            <img
              src={Featured_Dishes}
              alt="Featured Dishes"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </Box>
        </Grid>
        <Grid xs={12} md={6} sx={{mx:3}}>
          <Box
            sx={(theme) => ({
              mt: 15,
              [theme.breakpoints.down("lg")]: {
                mt: 2,
              },
            })}
          >
            <Typography variant="h3" fontWeight="600" sx={{ color: "black" }}>
              MANAGE ALL REQUESTS ON <br />
              ONE PLATFORM
            </Typography>
          </Box>

          <Box sx={{ my: 2 }}>
            <Typography variant="h6">
              A simple order tracking and management tool that brings all your
              orders <br /> into a single dashboard and gives you real-time
              access to to the order status
            </Typography>
          </Box>

          <Box>
            {" "}
            <List
              sx={{
                listStyleType: "disc",
                pl: 3,
                "& .MuiListItem-root": {
                  display: "list-item",
                  fontSize: "1.2rem",
                },
              }}
            >
              <ListItem>Online & Offline order syncing </ListItem>
              <ListItem>
                Ability to view the complete details & the complete order
                history
              </ListItem>
              <ListItem>List & Grid View of Orders</ListItem>
              <ListItem>Add Custom tags for identification</ListItem>
            </List>{" "}
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ mt: 5 }}>
        <Grid xs={12} md={6} sx={{}}>
          <Box
            sx={(theme) => ({
              mt: 15,
              ml: 5,
              [theme.breakpoints.down("md")]: {
                mt: 2,
              },
            })}
          >
            <Typography variant="h3" fontWeight="600" sx={{ color: "black" }}>
              CUSTOMER & FEEDBACK <br />
              MANAGEMENT
            </Typography>
          </Box>

          <Box sx={{ my: 2, ml: 5 }}>
            <Typography variant="h6">
              With Dagizo POS system, you are able to see your customer
              profiles, details of their <br /> orders, and their experience at
              your restaurant from their reviews, all on a single interface
            </Typography>
          </Box>

          <Box sx={{ ml: 5 }}>
            {" "}
            <List
              sx={{
                listStyleType: "disc",
                pl: 3,
                "& .MuiListItem-root": {
                  display: "list-item",
                  fontSize: "1.2rem",
                },
              }}
            >
              <ListItem>See all their orders and reservations </ListItem>
              <ListItem>Track their payment history</ListItem>
              <ListItem>View thier favourite dishes</ListItem>
              <ListItem>Assign orders to their tab</ListItem>
            </List>{" "}
          </Box>
        </Grid>

        <Grid xs={12} md={6}>
          <Box>
            <img
              src={Order_Progress}
              alt="Featured Dishes"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={5}
        sx={{ bgcolor: "primary.tint_5_bg", mt: 10, textAlign: "center" }}
      >
        {" "}
        <Grid xs={12}>
          {" "}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 20 }}
          >
            <Typography variant="h2" fontWeight="600">
              WORK ACROSS <br /> MULTIPLE TEAMS
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography variant="h6">
              You can effectively communicate with your employees through an
              in-app <br /> messaging feature. Dagizo POS system also helps you
              manage their <br /> records, work history and any other importnt
              employee data
            </Typography>
          </Stack>
        </Grid>
        <Grid container xs={12} spacing={5}>
          <Grid xs={2}></Grid>
          <Grid container xs={8} spacing={4}>
            <Grid xs={12} sm={6}>
              <Box>
                <Typography variant="h4" fontWeight="500">
                  STAY ON <br /> TOP OF ALL REQUEST
                </Typography>{" "}
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="500">
                  Here goes some information about the complete system <br />{" "}
                  and it will be nice to have some lines
                </Typography>{" "}
              </Box>
            </Grid>
            <Grid xs={12} sm={6}>
              {" "}
              <Box>
                <Typography variant="h4" fontWeight="500">
                  A CONCIERGE <br /> FOR YOUR EMPLOYEES
                </Typography>{" "}
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="500">
                  Here goes some information about the complete system <br />{" "}
                  and it will be nice to have some lines
                </Typography>{" "}
              </Box>
            </Grid>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
        <Grid container xs={12} spacing={5}>
          <Grid xs={1}></Grid>
          <Grid xs={10}>
            <Box sx={{ overflow: "contain" }}>
              <img
                src={Project_Peek}
                alt="Project Peek"
                style={{ height: "80%", width: "80%" }}
              ></img>
            </Box>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </Grid>

      <Stack sx={{ bgcolor: "primary.main" }}>
        <Stack sx={{ textAlign: "center", mt: 15 }}>
          {" "}
          <Typography variant="h3" sx={{ color: "white", fontWeight: 700 }}>
            READY TO SET UP? <br /> LET US HELP YOU GET STARTED.
          </Typography>{" "}
        </Stack>

        <Stack sx={{ textAlign: "center" }}>
          {" "}
          <Typography
            sx={{ color: "white", fontSize: "1.5rem", fontWeight: 500, mt: 5 }}
          >
            We are set to help you grow your business today and increase your
            sales by 50%
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

      <Grid container spacing={5} sx={{ mt: 15 }}>
        <Grid xs={2}></Grid>
        <Grid container xs={8} spacing={5}>
          <Grid xs={12} sm={6} md={2.5}>
            <Box sx={{ pl: 2 }}>
              <img src={Dagizo_Logo} alt="Dagizo Logo"></img>
            </Box>
            <Box>
              {" "}
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="+254 700 111 222" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="johndoe@gmail.com" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LocationSearchingIcon />
                    </ListItemIcon>
                    <ListItemText primary="Street 2333 Nairobi" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={2.5}>
            <Box>
              <Typography
                variant="h6"
                fontWeight="700"
                sx={{ color: "black", pl: 2 }}
              >
                GO TO PAGES
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              sx={{
                flexGrow: 1,
                "& .MuiTab-root": {
                  textTransform: "none",
                  justifyContent: "flex-start",
                },
                height: 224,
              }}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Features" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="How It Works" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Price Plans" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={2.5}>
            {" "}
            <Box>
              <Typography
                variant="h6"
                fontWeight="700"
                sx={{ color: "black", pl: 2 }}
              >
                LINKS
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              sx={{
                flexGrow: 1,
                "& .MuiTab-root": {
                  textTransform: "none",
                  justifyContent: "flex-start",
                },
                height: 224,
              }}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Terms & Conditions" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Privacy Policy" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="FAQs" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>{" "}
          </Grid>
          <Grid xs={12} sm={6} md={4.5}>
            <Box>
              <Typography variant="h6" fontWeight="700" sx={{ color: "black" }}>
                SUBSCRIBE TO OUR NEWSLETTER
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                sx={{
                  "& fieldset": {
                    borderRadius: 10,
                  },
                }}
                placeholder="Email Address"
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        disableElevation
                        variant="contained"
                        sx={{ color: "white", borderRadius: 5 }}
                      >
                        SIGN UP NOW
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" fontWeight="700" sx={{ color: "black" }}>
                FOLLOW US ON
              </Typography>
            </Box>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  m: 1,
                  p: 1,
                  border: 1,
                  borderRadius: 5,
                  borderColor: " rgba(102, 102, 102, .2) ",
                }}
              >
                {" "}
                <Icon>
                  {" "}
                  <FacebookIcon sx={{ color: "primary.main" }} />{" "}
                </Icon>{" "}
              </Stack>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  m: 1,
                  p: 1,
                  border: 1,
                  borderRadius: 5,
                  borderColor: " rgba(102, 102, 102, .2) ",
                }}
              >
                {" "}
                <Icon sx={{ color: "primary.main" }}>
                  {" "}
                  <LinkedInIcon />{" "}
                </Icon>{" "}
              </Stack>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  m: 1,
                  p: 1,
                  border: 1,
                  borderRadius: 5,
                  borderColor: " rgba(102, 102, 102, .2) ",
                }}
              >
                <Icon sx={{ color: "primary.main" }}>
                  {" "}
                  <InstagramIcon />{" "}
                </Icon>{" "}
              </Stack>

              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  m: 1,
                  p: 1,
                  border: 1,
                  borderRadius: 5,
                  borderColor: " rgba(102, 102, 102, .2) ",
                }}
              >
                {" "}
                <Icon sx={{ color: "primary.main" }}>
                  <YouTubeIcon />
                </Icon>{" "}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>

      <Stack
        sx={{
          bgcolor: "primary.main",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Copyright />
      </Stack>
    </Stack>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      All Rights Reserved. {"Copyright © "}
      <Link color="inherit" href="https://your-website.com/">
        Dagizo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default LandingPage;
