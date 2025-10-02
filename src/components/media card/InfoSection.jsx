import { memo } from "react";
import { Box, Typography } from "@mui/material";
import { ChipsWithPopover } from "./";

const InfoSection = memo(
  ({ label, items, chipColor, chipVariant, overflowChipVariant }) => (
    <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <Typography variant="h6">{label}</Typography>
      <ChipsWithPopover
        items={items}
        chipColor={chipColor}
        chipVariant={chipVariant}
        overflowChipVariant={overflowChipVariant}
      />
    </Box>
  )
);

export default InfoSection;
