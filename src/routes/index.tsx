import { createHashRouter } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import NavigationContainer from "../components/NavigationContainer";
import Group from "./Group";

const router = createHashRouter([
  {
    path: "/",
    element: <NavigationContainer />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/group/:number",
        element: <Group />,
      },
    ],
  },
]);

export default router;
