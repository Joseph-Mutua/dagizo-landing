import React from "react";

import {
  AppBar,
  Stack,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Dagizo_Logo from "./images/Dagizo_Logo.png"

const drawerWidth = 240;
const navItems = ["Home", "Features", "Price Plans", "Contact Us"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{my:2}}>
        {" "}
        <img src={Dagizo_Logo} alt="Dagizo Logo"></img>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar elevation={0} sx={{ bgcolor: "white" }}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ minHeight: 70, mx: 15 }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
            <img src={Dagizo_Logo} alt="Dagizo Logo"></img>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  fontSize: "1rem",
                  color: "#666666",
                  textTransform: "none",
                  mr: 5,
                }}
              >
                {item}
              </Button>
            ))}

            <Button variant="outlined" sx={{color: "primary.main", borderRadius: 5, length: 25}}>Sign Up</Button>
          </Box>
        </Stack>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}


export default DrawerAppBar;