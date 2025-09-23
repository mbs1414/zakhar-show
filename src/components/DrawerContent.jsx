import {
  MovieTwoTone,
  SmartDisplayRounded,
  VideoLibraryRounded,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Media from "./Media";
import WatchList from "./WatchList";
import Collection from "./Collection";
import { NavLink, useLocation } from "react-router-dom";
const DrawerContent = () => {
  const location = useLocation();
  const pages = [
    {
      name: "سرزمین نمایش‌ ها",
      path: "/media",
      component: <Media />,
      icon: <MovieTwoTone />,
      iconColor: "primary",
    },
    {
      name: "چیزهایی که باید دید",
      path: "/watchlist",
      component: <WatchList />,
      icon: <SmartDisplayRounded />,
      iconColor: "error",
    },
    {
      name: "گنجینه تماشا",
      path: "/collection",
      component: <Collection />,
      icon: <VideoLibraryRounded />,
      iconColor: "success",
    },
  ];
  return (
    <List>
      {pages.map((page, index) => (
        <ListItem key={index} disablePadding>
          <NavLink
            to={page.path}
            style={{ all: "unset", display: "flex", width: "100%" }}
          >
            <ListItemButton
              sx={{
                backgroundColor:
                  location.pathname === page.path && "background.default",
                "&:hover": {
                  backgroundColor: "background.default",
                },
              }}
            >
              <ListItemIcon
                sx={{ color: (theme) => theme.palette[page.iconColor].main }}
              >
                {page.icon}
              </ListItemIcon>
              <ListItemText
                sx={{ color: (theme) => theme.palette.text.primary }}
                primary={page.name}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerContent;
