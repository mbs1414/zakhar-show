import { Box, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const theme = useSelector((state) => state.themeChanger.value);

  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <Box
          sx={{
            m: 0,
            p: 0,
            backgroundColor: (theme) => theme.palette.background.default
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
