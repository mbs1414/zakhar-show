import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

const ComponentName = () => {
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
    <div dir="ltr">
      <Card
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          display: "flex",
        }}
      >
        <CardMedia
          component="img"
          image={movie.thumbnail}
          alt="Paella dish"
          sx={{ width: "15rem", height: "23rem", objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {movie.title}
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography variant="h6" component="div">
              genres:
            </Typography>
            <Stack direction="row" sx={{ display: "flex", gap: "0.5rem" }}>
              {movie.genres.map((genre) => (
                <Chip
                  key={genre}
                  label={genre}
                  color="primary"
                  sx={{
                    color: "primary.contrastText",
                  }}
                />
              ))}
            </Stack>
          </Box>
          <Box component="div">
            <Typography variant="h6" component="div">
              description:
            </Typography>
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
          </Box>
          <Box component="div">
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <Typography variant="h6" component="div">
                cast:
              </Typography>
              <Stack direction="row" sx={{ display: "flex", gap: "0.5rem" }}>
                {movie.cast.map((actor) => (
                  <Chip
                    variant="outlined"
                    key={actor}
                    label={actor}
                    color="info"
                    sx={{
                      color: "text.primary",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentName;
