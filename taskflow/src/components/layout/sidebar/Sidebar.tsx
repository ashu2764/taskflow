import { NavLink } from "react-router-dom";
import { navigation } from "../../../constants/navigation";

export default function Sidebar() {
  return (
    <aside
      className="
      w-72
      min-h-screen

      bg-white/5
      backdrop-blur-xl

      border-r
      border-white/10

      p-6
    "
    >
      <div className="mb-12">
        <h1
          className="
          text-2xl
          font-bold
          bg-gradient-to-r
          from-indigo-400
          to-cyan-400
          bg-clip-text
          text-transparent
        "
        >
          TaskFlow AI
        </h1>
      </div>

      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3

                px-4
                py-3

                rounded-xl

                transition-all

                ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : "hover:bg-white/5 text-gray-400"
                }
              `
              }
            >
              <Icon size={20} />

              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}