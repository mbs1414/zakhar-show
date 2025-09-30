import { Grid, Typography } from "@mui/material";
import WatchListCard from "./WatchListCard"
const WatchList = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 4, lg: 3 }}>
        <WatchListCard />
      </Grid>
    </Grid>
  );
};

export default WatchList;
