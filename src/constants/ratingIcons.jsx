import {
  SentimentVeryDissatisfiedRounded,
  SentimentDissatisfiedRounded,
  SentimentSatisfiedAltRounded,
  SentimentSatisfiedAltOutlined,
  SentimentVerySatisfiedOutlined,
} from "@mui/icons-material";
export const ratingIcons = {
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