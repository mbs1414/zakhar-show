import { memo } from "react";
import { Box, Typography, Tooltip } from "@mui/material";

const Description = memo(({ text }) => (
  <Box component="div">
    <Typography variant="h6" component="div">
      description:
    </Typography>
    <Tooltip title={text}>
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {text}
      </Typography>
    </Tooltip>
  </Box>
));

export default Description;
