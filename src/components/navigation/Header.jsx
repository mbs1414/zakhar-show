import { MenuRounded } from "@mui/icons-material";
import { IconButton, Toolbar } from "@mui/material";
import ToggleThemeButton from "../ToggleThemeButton";
import styled from "@emotion/styled";
import MuiAppBar from "@mui/material/AppBar";
import { drawerWidth } from "../../constants/globals";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`, // استفاده از width تغییر کرده
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Header = ({ handleDrawerOpen }) => {
  return (
    <AppBar color="primary" dir="rtl">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="text.primary"
          aria-label="open drawer"
          sx={[
            {
              mr: 2,
            },
            open && { display: "none" },
          ]}
          onClick={() => {
            handleDrawerOpen();
          }}
        >
          <MenuRounded />
        </IconButton>
        <ToggleThemeButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
