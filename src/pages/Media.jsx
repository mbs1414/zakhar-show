import { Grid } from "@mui/material";
import { MediaCard } from "../components/media card";
const Media = () => {
  return (
    <Grid container spacing={2} sx={{ direction: "rtl" }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid key={index} size={{ xs: 12, lg: 6 }}>
          <MediaCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default Media;
