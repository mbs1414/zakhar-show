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
import { NavLink, useLocation } from "react-router-dom";
import {pages} from "../../constants/globals"
const DrawerContent = () => {
  const location = useLocation();
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
