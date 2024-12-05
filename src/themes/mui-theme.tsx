"use client";

import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#6C5DD3", // Vibrant Purple
      light: "#A89CF0", // Light Purple for hover or highlights
      dark: "#4A3B9B", // Dark Purple for headers
      contrastText: "#FFFFFF", // White text for buttons
    },
    secondary: {
      main: "#FF5A5F", // Bright Red for CTAs
      dark: "#D72638", // Deep Red for emphasis
      contrastText: "#FFFFFF", // White text for secondary buttons
    },
    // neutral: {
    //   black: "#1A1A1A", // Deep black for text
    //   white: "#FFFFFF", // Pure white for backgrounds
    //   gray: "#747474", // Gray for secondary text
    // },
    background: {
      default: "#FFFFFF", // Page background
      paper: "#F5F5F5", // Cards or section backgrounds
    },
    text: {
      primary: "#1A1A1A", // Main text color
      secondary: "#747474", // Secondary text color
    },
  },
  typography: {
    fontFamily: "Outfit, Roboto, Arial, sans-serif",
  },
});
