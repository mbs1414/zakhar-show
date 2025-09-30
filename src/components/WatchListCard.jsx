import { Box, Typography } from "@mui/material";

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
    position: "relative",
    width: "10rem",
    height: "15rem",
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
  {/* تصویر */}
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

  {/* متن - دقیقاً وسط تصویر با transform */}
  <Box
    className="overlay"
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // باعث وسط‌چینی دقیق میشه
      bgcolor: "rgba(0, 0, 0, 0.6)",
      color: "white",
      textAlign: "center",
      opacity: 0,
      transition: "opacity 0.3s ease",
      p: 2,
      zIndex: 1,
      borderRadius: 2,
    }}
  >
    <Typography variant="h6">{movie.title}</Typography>
    <Typography variant="body2">{movie.year}</Typography>
  </Box>
</Box>

  );
};

export default WatchListCard;
