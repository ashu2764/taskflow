import {
  Bell,
  Search,
} from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
      h-20

      border-b
      border-white/10

      bg-white/5
      backdrop-blur-xl

      flex
      items-center
      justify-between

      px-8
    "
    >
      <div
        className="
        flex
        items-center

        gap-3

        bg-white/5

        px-4
        py-2

        rounded-xl
      "
      >
        <Search size={18} />

        <input
          placeholder="Search..."
          className="
          bg-transparent
          outline-none
        "
        />
      </div>

      <div
        className="
        flex
        items-center
        gap-5
      "
      >
        <Bell size={20} />

        <div
          className="
          w-10
          h-10

          rounded-full

          bg-gradient-to-r
          from-indigo-500
          to-cyan-500
        "
        />
      </div>
    </header>
  );
}