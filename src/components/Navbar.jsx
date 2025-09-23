import styled from "@emotion/styled";
import Toolbar from "@mui/material/Toolbar";
import { MenuRounded, ArrowForward, ArrowBack } from "@mui/icons-material";
import MuiAppBar from "@mui/material/AppBar";
import { Drawer, IconButton, useTheme } from "@mui/material";
import { useState } from "react";
import ToggleThemeButton from "../components/ToggleThemeButton";
import DrawerContent from "./DrawerContent";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
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
  return (
    <>
      <AppBar color="primary">
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
      <Main open={open}>{children}</Main>
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
        anchor="left"
        open={open}
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
    </>
  );
};

export default Navbar;
