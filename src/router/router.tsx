import { createBrowserRouter } from "react-router";
import Errorpage from "../pages/Common/Errorpage";
import App from "../App";
import Signin from "../pages/Common/Signin";
import Register from "../pages/Common/Register";
import { adminPaths } from "./admin.route";
import { facultyPaths } from "./faculty.route";
import { studentPaths } from "./student.route";
import { routeGenerator } from "../utils/routesGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
  },
  {
    path: "/admin",
    element: <App />,
    children:routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator (facultyPaths)
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator (studentPaths)
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
