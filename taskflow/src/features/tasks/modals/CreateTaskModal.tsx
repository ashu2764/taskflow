import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../../../components/ui/modal/Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateTaskModal({
  open,
  onClose,
}: Props) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const handleCreate = () => {
    if (!title.trim()) {
      toast.error("Title required");
      return;
    }

    toast.success("Task created");

    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-6
      "
      >
        Create Task
      </h2>

      <div className="space-y-4">
        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Task title"
          className="
          w-full

          bg-white/5

          border
          border-white/10

          rounded-xl

          p-3
        "
        />

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          placeholder="Description"
          className="
          w-full

          h-32

          bg-white/5

          border
          border-white/10

          rounded-xl

          p-3
        "
        />

        <button
          onClick={handleCreate}
          className="
          w-full

          bg-indigo-500

          rounded-xl

          py-3
        "
        >
          Create Task
        </button>
      </div>
    </Modal>
  );
}