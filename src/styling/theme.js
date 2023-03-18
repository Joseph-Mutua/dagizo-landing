import { createTheme } from "@mui/material";

const theme = createTheme({
  // shadows: 0,
  palette: {
    primary: {
      main: "#F4B315", //rgba(244, 179, 21, 1)
      tint_1: "#F6C244",
      tint_2: "#F8D173",
      tint_3: "#FBE1A1",
      tint_4_bg: "#FDF0D0",
      tint_5_bg: "#FEF8E8",
    },

    secondary: {
      main: "#000000",
      tint_1: "#333333",
      tint_2: "#666666",
      tint_3: "#999999",
      tint_4: "#CCCCCC",
      tint_5_bg: "#E6E6E6",
      input_field: "#FAFAFA",
    },
    error: {
      main: "#FF3B30",
    },
  },
  typography: {
    fontFamily: ["Mulish"],
    allVariants: {
      color: "#666666", //rgba(102, 102, 102, 1)
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
