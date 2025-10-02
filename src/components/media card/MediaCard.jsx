import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Ratings from "../Ratings";
import { useMediaQueries } from "../../utils/mediaQueries";
import { BookmarkAddRounded, Collections } from "@mui/icons-material";
import { Description, InfoSection } from "./";
import { movie } from "../../constants/globals";

const MediaCard = () => {
  const { isSm } = useMediaQueries();

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
          <InfoSection
            label="genres:"
            items={movie.genres}
            chipColor="primary"
            chipVariant="filled"
            overflowChipVariant="outlined"
          />
          <Description text={movie.extract} />
          <InfoSection
            label="cast:"
            items={movie.cast}
            chipColor="info"
            chipVariant="outlined"
            overflowChipVariant="filled"
          />
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
