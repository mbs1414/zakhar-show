import { Button } from "@mui/material"
import { CheckCircle  } from '@mui/icons-material';
const App = () => {
  return (
    <>
      <Button variant="contained" color="success" endIcon={<CheckCircle  />}>
        Success
      </Button>
    </>
  )
}

export default App
