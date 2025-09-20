import { CheckCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
    return (
      <div>
        <Button
          component={Link}
          to="/"
          variant="outlined"
          color="success"
          endIcon={<CheckCircle />}
        >
          Home
        </Button>
      </div>
    );
};

export default About;