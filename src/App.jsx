import { Button } from "@mui/material"
import { CheckCircle  } from '@mui/icons-material';
import { Link } from "react-router-dom";
import ToggleThemeButton from "./components/ToggleThemeButton";
const App = () => {
  return (
    <>
    <ToggleThemeButton />
      <Button
        component={Link}
        to="/about"
        variant="contained"
        color="success"
        endIcon={<CheckCircle />}
      >
        About
      </Button>
      <div>درباره ما</div>
    </>
  );
}

export default App
