import {
  LayoutDashboard,
  CheckSquare,
  Clock,
  User,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },

  {
    name: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },

  {
    name: "Pending",
    path: "/pending",
    icon: Clock,
  },

  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];