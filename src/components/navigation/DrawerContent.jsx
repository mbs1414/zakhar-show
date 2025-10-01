import {
  MedicalServices,
  MovieTwoTone,
  TheaterComedyRounded,
  VideoLibraryRounded,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Media from "../../pages/Media";
import WatchList from "../../pages/WatchList";
import Collection from "../../pages/Collection";
import { NavLink, useLocation } from "react-router-dom";
import Hadi from "../../pages/Hadi";
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
      icon: <TheaterComedyRounded />,
      iconColor: "error",
    },
    {
      name: "گنجینه تماشا",
      path: "/collection",
      component: <Collection />,
      icon: <VideoLibraryRounded />,
      iconColor: "success",
    },
    {
      name: "هادی",
      path: "/hadi",
      component: <Hadi />,
      icon: <MedicalServices />,
      iconColor: "info",
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
                direction: "ltr",
                backgroundColor:
                  location.pathname === page.path && "info.contrastText",
                "&:hover": {
                  backgroundColor: "info.contrastText",
                  transition: "background-color 0.3s ease",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: (theme) => theme.palette[page.iconColor].main,
                  minWidth: "2rem",
                }}
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
