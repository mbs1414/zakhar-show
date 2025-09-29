import { AddRounded } from "@mui/icons-material";
import { Chip, Fab, Popover, Stack } from "@mui/material";
import { useState } from "react";

const ChipsWithPopover = ({
  array,
  firstColor,
  firstVariant,
  secondVariant,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {array.slice(0, 2).map((item) => (
        <Chip
          variant={firstVariant}
          key={item}
          label={item}
          color={firstColor}

        />
      ))}
      {array.length > 3 && (
        <>
          <Fab
            color="success"
            aria-label="show more"
            size="small"
            onClick={handleClick}
          >
            <AddRounded />
          </Fab>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack
              direction="row"
              sx={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              {array.map((item) => (
                <Chip
                  variant={secondVariant}
                  key={item}
                  label={item}
                  color={firstColor}
                />
              ))}
            </Stack>
          </Popover>
        </>
      )}
    </Stack>
  );
};

export default ChipsWithPopover;