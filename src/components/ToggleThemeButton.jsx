import { ModeNightRounded, LightModeRounded } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/themeSlice";
const ToggleThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeChanger.value);
  
  return (
    <Fab onClick={() => dispatch(setTheme())} size="small" color={theme ? "primary" : "warning"}>
      {theme ? <ModeNightRounded /> : <LightModeRounded />}
    </Fab>
  );
};

export default ToggleThemeButton;
