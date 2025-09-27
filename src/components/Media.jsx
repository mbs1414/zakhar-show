import { Grid, Paper } from "@mui/material";
import MediaCard from "./MediaCard";
import styled from "@emotion/styled";
import { Rtt } from "@mui/icons-material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const Media = () => {
  return (
    <Grid container spacing={2} sx={{direction: "rtl"}}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid key={index} size={{ xs: 12, lg: 6 }}>
          <MediaCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default Media;
