import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import TasksPage from "../../features/tasks/pages/TasksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
  path: "/tasks",
  element: <TasksPage />,
},
]);