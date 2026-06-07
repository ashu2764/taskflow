import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}