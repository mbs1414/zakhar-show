import { Typography } from "@mui/material";
import { getAllMedia } from "../services/mediaServices";
const media = async () => {
  try {
    const response = await getAllMedia();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
media();
const Collection = () => {
  return <Typography>کالکشن</Typography>;
};

export default Collection;
