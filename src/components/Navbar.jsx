import styled from "@emotion/styled";
import Toolbar from "@mui/material/Toolbar";
import { MenuRounded, ArrowForward, ArrowBack } from "@mui/icons-material";
import MuiAppBar from "@mui/material/AppBar";
import { Drawer, IconButton, SwipeableDrawer, useTheme } from "@mui/material";
import { useState } from "react";
import ToggleThemeButton from "../components/ToggleThemeButton";
import DrawerContent from "./DrawerContent";
import { useMediaQueries } from "../utils/mediaQueries";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? `${drawerWidth}px` : "0",
    height: "100%",
  })
);

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navbar = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const anchor = "left";

  const { isMd } = useMediaQueries();
  return (
    <>
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
            onClick={handleDrawerOpen}
          >
            <MenuRounded />
          </IconButton>
          <ToggleThemeButton />
        </Toolbar>
      </AppBar>
      <Main open={isMd ? open : false}>
        <DrawerHeader />
        {children}
      </Main>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor={anchor}
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor={anchor}
          open={isMd ? open : true}
        >
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              color="text.primary"
              size="large"
            >
              {theme.direction === "ltr" ? <ArrowBack /> : <ArrowForward />}
            </IconButton>
          </DrawerHeader>
          <DrawerContent />
        </Drawer>
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
