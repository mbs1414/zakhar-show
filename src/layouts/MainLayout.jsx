import { Box, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import createCache from "@emotion/cache";
import ToggleThemeButton from "../components/ToggleThemeButton";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";

const MainLayout = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true); // true = light, false = dark
  const toggleTheme = () => {
    setIsLightMode((prevTheme) => !prevTheme);
  };
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            m: 0,
            p: 0,
            height: "100vh",
          }}
        >
          <ToggleThemeButton toggleTheme={toggleTheme} theme={isLightMode} />
          {children}
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
