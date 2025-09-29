import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Tooltip,
  Typography,
} from "@mui/material";
import Ratings from "./Ratings";
import { useMediaQueries } from "../utils/mediaQueries";
import {
  BookmarkAddRounded,
  Collections,
} from "@mui/icons-material";
import ChipsWithPopover from "./media card/ChipsWithPopover";

const MediaCard = () => {
  const { isSm } = useMediaQueries();
  const movie = {
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
      "John Henry is a 2020 American thriller drama film starring Terry Crews and Ludacris, and directed by Will Forbes. Inspired by the folk lore of John Henry, the plot follows an ex-gang member from Los Angeles who must help two immigrant children who are on the run from his former crime boss. The film had a limited release on January 24, 2020, and received negative reviews from critics.",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg",
    thumbnail_width: 220,
    thumbnail_height: 316,
    rating: 0,
  };

  return (
    <Box
      sx={{ ...(!isSm && { mt: "10rem", pt: "2rem", position: "relative" }) }}
    >
      <Card
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          display: "flex",
          flexDirection: isSm ? "row" : "column",
          width: "100%",
          // ...(!isSm && { position: "relative" }),
        }}
      >
        <CardMedia
          component="img"
          image={movie.thumbnail}
          alt={movie.title}
          sx={{
            width: { xs: "15rem", md: "12rem" },
            height: isSm ? "23rem" : "21rem",
            objectFit: "fill",
            flex: "1 0 auto",
            m: "auto",
            ...(!isSm && {
              position: "absolute",
              top: "80%%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "1rem",
            }),
          }}
        />
        <CardContent
          sx={{
            ...(!isSm && { mt: "11rem" }),
            width: isSm ? "60%" : "90%",
            "&.MuiCardContent-root": { pb: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "0.5rem",
            }}
          >
            <Typography variant="h5" component="div">
              {movie.title}
            </Typography>
            <Chip
              label={movie.year}
              color="error"
              sx={{
                color: "error.contrastText",
                fontWeight: "bolder",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Typography variant="h6" component="div">
              genres:
            </Typography>
            <ChipsWithPopover
              items={movie.genres}
              chipColor="primary"
              chipVariant="filled"
              overflowChipVariant ="outlined"
            />
          </Box>
          <Box component="div">
            <Typography variant="h6" component="div">
              description:
            </Typography>
            <Tooltip title={movie.extract}>
              <Typography
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {movie.extract}
              </Typography>
            </Tooltip>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
          >
            <Typography variant="h6" component="div">
              cast:
            </Typography>
            <ChipsWithPopover
              items={movie.cast}
              chipColor="info"
              chipVariant="outlined"
              overflowChipVariant ="filled"
            />
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
          >
            <Typography variant="h6" component="div">
              rating:
            </Typography>
            <Ratings />
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: "0.5rem", my: "0.8rem" }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{ flex: 1, direction: "ltr" }}
              endIcon={<BookmarkAddRounded />}
            >
              چیزی که باید دید
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ flex: 1, direction: "ltr" }}
              endIcon={<Collections />}
            >
              گنجینه
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MediaCard;
