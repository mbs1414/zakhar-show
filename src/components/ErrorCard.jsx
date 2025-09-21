import { Box, Card, Typography } from "@mui/material";

const ErrorCard = ({ textError = "زاخار این جا پیدات نشه" }) => {
  return (
    <Box width="100vh" sx={{ m: "auto" }}>
      <Card variant="elevation">
        <Typography
          fontFamily="tanha"
          sx={{
            textAlign: "center",
            color: "red",
            fontWeight: "bold"
          }}
        >
          {textError}
        </Typography>
      </Card>
    </Box>
  );
};

export default ErrorCard;
