import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import DashboardPage from "../../features/dashboard/pages/Dashboardpage";

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
]);