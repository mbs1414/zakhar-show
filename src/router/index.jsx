import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Media from "../components/Media";
import WatchList from "../components/WatchList";
import Collection from "../components/Collection";
import ErrorCard from "../components/ErrorCard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorCard />,
    children: [
      { path: "/media", element: <Media /> },
      { path: "/watchlist", element: <WatchList /> },
      { path: "/Collection", element: <Collection /> },
    ],
  },
]);
