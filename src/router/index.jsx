import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorCard from "../components/ErrorCard";
import { pages } from "../constants/globals";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorCard />,
    children: pages.map(({ path, component: element }) => ({ path, element })),
  },
]);
