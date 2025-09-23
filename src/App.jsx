import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <MainLayout>
      <Navbar>
        <Outlet />
      </Navbar>
    </MainLayout>
  );
};

export default App;
