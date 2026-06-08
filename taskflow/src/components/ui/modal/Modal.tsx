import { ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  open,
  onClose,
  children,
}: Props) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
      fixed
      inset-0

      bg-black/50

      backdrop-blur-sm

      flex
      items-center
      justify-center

      z-50
    "
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
        w-full
        max-w-xl

        bg-[#111827]

        border
        border-white/10

        rounded-3xl

        p-6
      "
      >
        {children}
      </div>
    </div>
  );
}