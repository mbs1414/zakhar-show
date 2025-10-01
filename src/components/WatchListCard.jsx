import { Box, Chip, Typography } from "@mui/material";

const WatchListCard = () => {
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
      "John Henry is a 2020 American thriller drama film starring Terry Crews and Ludacris...",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg",
    thumbnail_width: 220,
    thumbnail_height: 316,
    rating: 0,
  };

  return (
    <Box
      sx={{
        m: "auto",
        position: "relative",
        width: "15rem",
        height: "20rem",
        borderRadius: "1rem",
        overflow: "hidden",
        "&:hover .overlay": {
          opacity: 1,
        },
        "&:hover .image": {
          filter: "blur(5px)",
        },
      }}
    >
      <Box
        className="image"
        component="img"
        src={movie.thumbnail}
        alt={movie.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "filter 0.3s ease",
          borderRadius: "1rem",
        }}
      />

      <Box
        className="overlay"
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: "0",
          left: "0",
          bgcolor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
          width: 1,
          height: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Chip
            label={movie.year}
            color="error"
            sx={{
              m: "0.5rem",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flex: 1
          }}
        >
          <Typography variant="h5">{movie.title}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WatchListCard;
