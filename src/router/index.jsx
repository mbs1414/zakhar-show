import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
]);
