import { Box, Card, Typography } from "@mui/material";

const ErrorCard = ({ textError = "زاخار این جا پیدات نشه" }) => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#282A36", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography
        fontFamily="tanha"
        variant="h5"
        sx={{
          textAlign: "center",
          color: "red",
          fontWeight: "bold",
        }}
      >
        {textError}
      </Typography>
    </Box>
  );
};

export default ErrorCard;
