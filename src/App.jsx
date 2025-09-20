import { Button } from "@mui/material"
import { CheckCircle  } from '@mui/icons-material';
import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <Button
        component={Link}
        to="/about"
        variant="contained"
        color="success"
        endIcon={<CheckCircle />}
      >
        About
      </Button>
    </>
  );
}

export default App
