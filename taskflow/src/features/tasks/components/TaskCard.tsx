import {
  Pencil,
  Trash2,
} from "lucide-react";

import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";

interface Props {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    dueDate: string;
  };
}

export default function TaskCard({
  task,
}: Props) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl

      border
      border-white/10

      rounded-2xl

      p-5

      transition-all

      hover:-translate-y-1
      hover:border-indigo-500/50
    "
    >
      <div
        className="
        flex
        justify-between
        mb-4
      "
      >
        <PriorityBadge
          priority={task.priority}
        />

        <StatusBadge
          status={task.status}
        />
      </div>

      <h3
        className="
        text-lg
        font-semibold
      "
      >
        {task.title}
      </h3>

      <p
        className="
        mt-2
        text-sm
        text-gray-400
      "
      >
        {task.description}
      </p>

      <p
        className="
        mt-4
        text-xs
        text-gray-500
      "
      >
        Due: {task.dueDate}
      </p>

      <div
        className="
        flex
        gap-3
        mt-5
      "
      >
        <button>
          <Pencil size={18} />
        </button>

        <button>
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}