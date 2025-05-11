import { createBrowserRouter } from "react-router";

import Errorpage from "../pages/Common/Errorpage";
import App from "../App";
import Signin from "../pages/Common/Signin";
import Register from "../pages/Common/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "home",
        element: <p>kiso akta</p>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "home",
        element: <p>kiso akta</p>,
      },
    ],
  },
  {
    path: "/faculty",
    element: <App />,
    children: [
      {
        path: "home",
        element: <p>kiso akta</p>,
      },
    ],
  },
  {
    path: "/student",
    element: <App />,
    children: [
      {
        path: "home",
        element: <p>kiso akta</p>,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
