import {
  MedicalServices,
  MovieTwoTone,
  TheaterComedyRounded,
  VideoLibraryRounded,
} from "@mui/icons-material";
import { Collection, Hadi, Media, WatchList } from "../pages";

export const movie = {
  id: 14,
  title: "John Henry",
  year: 2020,
  cast: [
    "Terry Crews",
    "Ludacris",
    "Jamila Velazquez",
    "Ken Foree",
    "Tyler Alvarez",
    "Joseph Julian Soria",
  ],
  genres: ["Drama", "Thriller"],
  href: "John_Henry_(2020_film)",
  extract:
    "John Henry is a 2020 American thriller drama film starring Terry Crews and Ludacris...",
  thumbnail:
    "https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg",
  thumbnail_width: 220,
  thumbnail_height: 316,
  rating: 0,
};

export const drawerWidth = 240;

export const pages = [
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
