import { Button, ThemeProvider } from "@mui/material"
import { CheckCircle  } from '@mui/icons-material';
import { Link } from "react-router-dom";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { useState } from "react";
import { darkTheme, lightTheme } from "./layouts/theme";
const App = () => {
  const [theme, setTheme] = useState(true); // true = light, false = dark
  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
    <ToggleThemeButton toggleTheme={toggleTheme} theme={theme}/>
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
    </ThemeProvider>
  );
}

export default App
