import { ModeNightRounded, LightModeRounded } from "@mui/icons-material";
import { Fab } from "@mui/material";
const ToggleThemeButton = ({theme, toggleTheme}) => {
  
  return (
    <Fab value={theme} onClick={toggleTheme}>
      {theme ? <ModeNightRounded /> : <LightModeRounded /> }
    </Fab>
  );
};

export default ToggleThemeButton;
