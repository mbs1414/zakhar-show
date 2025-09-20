import { createTheme } from "@mui/material";
export const darkTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "tanha, vazir, Roboto",
  },
  palette: {
    mode: "dark",
    background: {
      default: "#282A36",
      paper: "#44475A",
    },
    text: {
      primary: "#F8F8F2",
      secondary: "#6272A4",
    },
    primary: {
      main: "#BD93F9",
    },
    secondary: {
      main: "#FF79C6",
    },
    error: {
      main: "#FF5555",
    },
    warning: {
      main: "#F1FA8C",
    },
    info: {
      main: "#8BE9FD",
    },
    success: {
      main: "#50FA7B",
    },
  },
});

export const lightTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "tanha, vazir, Roboto",
  },
  palette: {
    mode: "light",
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#D32F2F",
    },
    error: {
      main: "#D32F2F",
    },
    warning: {
      main: "#FBC02D",
    },
    info: {
      main: "#0288D1",
    },
    success: {
      main: "#388E3C",
    },
  },
});
