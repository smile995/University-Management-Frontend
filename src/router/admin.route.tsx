import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

// export const adminPaths = [
//   {
//     path: "/admin/dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "/admin/create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "/admin/create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "/admin/create-admin",
//     element: <CreateAdmin />,
//   },
// ];
export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
      {
        name: 'Create Member',
        path: 'create-member',
        element: <CreateStudent />,
      },
    ],
  },
];