import { createBrowserRouter } from "react-router";

import Errorpage from "../pages/Common/Errorpage";
import App from "../App";
import Signin from "../pages/Common/Signin";
import Register from "../pages/Common/Register";
import { adminPaths } from "./admin.route";
import { facultyPaths } from "./faculty.route";
import { studentPaths } from "./student.route";
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
    children: adminPaths,
  },
  {
    path: "/faculty",
    element: <App />,
    children: facultyPaths
  },
  {
    path: "/student",
    element: <App />,
    children: studentPaths
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
