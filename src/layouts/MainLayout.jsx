import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import createCache from "@emotion/cache";
import ToggleThemeButton from "../components/ToggleThemeButton";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";
const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState(true); // true = light, false = dark
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
