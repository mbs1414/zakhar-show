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
      contrastText: "#1E1E2F",
    },
    secondary: {
      main: "#FF79C6",
      contrastText: "#3A0022",
    },
    error: {
      main: "#FF5555",
      contrastText: "#330000",
    },
    warning: {
      main: "#F1FA8C",
      contrastText: "#333300",
    },
    info: {
      main: "#8BE9FD",
      contrastText: "#003344",
    },
    success: {
      main: "#50FA7B",
      contrastText: "#00331A",
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
      default: "#E0E0E0",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    primary: {
      main: "#1976D2",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#D32F2F",
      contrastText: "#FFCCCC",
    },
    error: {
      main: "#D32F2F",
      contrastText: "#FFCCCC",
    },
    warning: {
      main: "#FBC02D",
       contrastText: "#3B3000",
    },
    info: {
      main: "#0288D1",
      contrastText: "#E0F7FA",
    },
    success: {
      main: "#388E3C",
      contrastText: "#D0F0C0",
    },
  },
});
