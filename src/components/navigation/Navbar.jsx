import styled from "@emotion/styled";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { IconButton, SwipeableDrawer, useTheme } from "@mui/material";
import { useState } from "react";
import DrawerContent from "./DrawerContent";
import { useMediaQueries } from "../../utils/mediaQueries";
import Header from "./Header";
import { drawerWidth } from "../../constants/globals";
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
      <Header handleDrawerOpen={handleDrawerOpen} />
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
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
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
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
