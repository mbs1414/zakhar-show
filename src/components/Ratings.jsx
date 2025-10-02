import styled from "@emotion/styled";
import { Rating } from "@mui/material";
import { ratingIcons } from "../constants/ratingIcons";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.text.secondary,
  },
  direction: "ltr",
}));

function IconContainer(props) {
  const { value, ...other } = props;
  const reversedValue = 6 - value;
  return <span {...other}>{ratingIcons[reversedValue].icon}</span>;
}

const Ratings = () => {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => ratingIcons[value].label}
      highlightSelectedOnly
    />
  );
};

export default Ratings;
