import { useState } from "react";
import { Plus } from "lucide-react";

import { tasks } from "../../../mock/tasks";

import TaskCard from "../components/TaskCard";
import SearchBar from "../components/SearchBar";
import CreateTaskModal from "../modals/CreateTaskModal";

export default function TasksPage() {
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="space-y-8">
        {/* Header */}
        <div
          className="
          flex
          flex-col
          gap-4

          md:flex-row
          md:items-center
          md:justify-between
        "
        >
          <div>
            <h1
              className="
              text-4xl
              font-bold
            "
            >
              Tasks
            </h1>

            <p
              className="
              text-gray-400
              mt-2
            "
            >
              Manage your tasks and stay productive.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="
            flex
            items-center
            justify-center

            gap-2

            bg-indigo-500
            hover:bg-indigo-600

            px-5
            py-3

            rounded-xl

            transition-all
            duration-300
          "
          >
            <Plus size={18} />

            Create Task
          </button>
        </div>

        {/* Search */}
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        {/* Tasks Grid */}
        {filteredTasks.length > 0 ? (
          <div
            className="
            grid

            md:grid-cols-2
            xl:grid-cols-3

            gap-6
          "
          >
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
              />
            ))}
          </div>
        ) : (
          <div
            className="
            h-72

            rounded-3xl

            border
            border-dashed
            border-white/10

            bg-white/5

            flex
            flex-col
            items-center
            justify-center
          "
          >
            <h3
              className="
              text-xl
              font-semibold
            "
            >
              No Tasks Found
            </h3>

            <p
              className="
              text-gray-400
              mt-2
            "
            >
              Try a different search term.
            </p>
          </div>
        )}
      </div>

      <CreateTaskModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}