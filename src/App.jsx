import { Button, ThemeProvider, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { Link } from "react-router-dom";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { useState } from "react";
import { darkTheme, lightTheme } from "./layouts/theme";
const App = () => {
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
        <Button
          component={Link}
          to="/about"
          variant="contained"
          color="success"
          endIcon={<CheckCircle />}
        >
          About
        </Button>
        <div>محمد</div>
        <Typography variant="h4" sx={{ fontFamily: "vazir" }}>
          تست فونت تنـها
        </Typography>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
