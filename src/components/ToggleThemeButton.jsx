import { ModeNightRounded, LightModeRounded } from "@mui/icons-material";
import { Fab } from "@mui/material";
const ToggleThemeButton = ({ isLightMode, toggleTheme }) => {
  return (
    <Fab value={isLightMode} onClick={toggleTheme}>
      {isLightMode ? <ModeNightRounded /> : <LightModeRounded />}
    </Fab>
  );
};

export default ToggleThemeButton;
