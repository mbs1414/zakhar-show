import { AddRounded } from "@mui/icons-material";
import { Chip, Fab, Popover, Stack } from "@mui/material";
import { useState } from "react";

const ChipsWithPopover = ({
  items,
  chipColor ,
  chipVariant ,
  overflowChipVariant ,
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
      {items.slice(0, 2).map((item) => (
        <Chip
          variant={chipVariant }
          key={item}
          label={item}
          color={chipColor }

        />
      ))}
      {items.length > 2 && (
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
              {items.map((item) => (
                <Chip
                  variant={overflowChipVariant }
                  key={item}
                  label={item}
                  color={chipColor }
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