import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Media from "../pages/Media";
import WatchList from "../pages/WatchList";
import Collection from "../pages/Collection";
import ErrorCard from "../components/ErrorCard";
import Hadi from "../pages/Hadi";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorCard />,
    children: [
      { path: "/media", element: <Media /> },
      { path: "/watchlist", element: <WatchList /> },
      { path: "/Collection", element: <Collection /> },
      { path: "/hadi", element: <Hadi /> },
    ],
  },
]);
