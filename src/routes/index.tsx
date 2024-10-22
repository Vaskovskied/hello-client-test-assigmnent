import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

export default router;
