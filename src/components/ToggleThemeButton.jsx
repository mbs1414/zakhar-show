import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleThemeButton = () => {
  const [theme, setTheme] = useState(true); // true = light, false = dark

  const handleTheme = (e) => {
    setTheme(e.target.checked);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={theme}
              onChange={handleTheme}
              icon={<DarkModeIcon />}
              checkedIcon={<LightModeIcon />}
            />
          }
        />
      </FormGroup>
    </FormControl>
  );
};

export default ToggleThemeButton;
