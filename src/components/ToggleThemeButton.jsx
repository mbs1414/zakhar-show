import { ModeNightRounded, LightModeRounded } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/themeSlice";
const ToggleThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeChanger.value);
  return (
    <Fab value={theme} onClick={() => dispatch(setTheme())}>
      {theme ? <ModeNightRounded /> : <LightModeRounded />}
    </Fab>
  );
};

export default ToggleThemeButton;
