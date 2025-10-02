import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = "2025-10-01T16:00:00";
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <Box key={interval} sx={{ mx: 1, textAlign: "center" }}>
        <Typography color="error" variant="h4">
          {timeLeft[interval]}
        </Typography>
        <Typography color="error" variant="caption">
          {interval}
        </Typography>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        mt: 4,
      }}
    >
      {timerComponents.length ? (
        <>
          {timerComponents}
          <Typography color="primary" variant="h5">
            😂😂😂این تایمر تموم شه دهنت گاییدس
          </Typography>
        </>
      ) : (
        <Typography variant="h5" color="error">
          سلام به دندون پزشکی
        </Typography>
      )}
    </Box>
  );
};

export default CountdownTimer;
