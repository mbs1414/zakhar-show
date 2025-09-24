import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const useMediaQueries = () => {
  const theme = useTheme();

  return {
    isXs: useMediaQuery(theme.breakpoints.up("xs")), // بیشتر از xs
    isSm: useMediaQuery(theme.breakpoints.up("sm")),
    isMd: useMediaQuery(theme.breakpoints.up("md")),
    isLg: useMediaQuery(theme.breakpoints.up("lg")),
    isXl: useMediaQuery(theme.breakpoints.up("xl")),
  };
};
