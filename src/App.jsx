import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default App;
