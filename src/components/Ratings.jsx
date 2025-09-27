import styled from "@emotion/styled";
import {
  SentimentVeryDissatisfiedRounded,
  SentimentDissatisfiedRounded,
  SentimentSatisfiedAltRounded,
  SentimentSatisfiedAltOutlined,
  SentimentVerySatisfiedOutlined,
} from "@mui/icons-material";
import { Rating } from "@mui/material";
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedRounded color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedRounded color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedAltRounded color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltOutlined color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedOutlined color="success" />,
    label: "Very Satisfied",
  },
};

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.text.secondary,
  },
  direction: "ltr",
}));

function IconContainer(props) {
  const { value, ...other } = props;
  const reversedValue = 6 - value;
  return <span {...other}>{customIcons[reversedValue].icon}</span>;
}

const Ratings = () => {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
};

export default Ratings;
