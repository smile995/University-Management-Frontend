import OfferedCourse from "../pages/Faculty/OfferedCourse";
import StudentDashboard from "../pages/Students/StudentDashboard";



export const studentPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <StudentDashboard />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
];
