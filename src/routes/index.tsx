import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import NavigationContainer from "../components/NavigationContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationContainer />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

export default router;
