import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

export const adminPaths = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/create-student",
    element: <CreateStudent />,
  },
  {
    path: "/admin/create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "/admin/create-admin",
    element: <CreateAdmin />,
  },
];
