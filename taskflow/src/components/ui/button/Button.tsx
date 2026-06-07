import { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        `
        px-5
        py-3
        rounded-xl
        bg-indigo-500
        hover:bg-indigo-600
        transition-all
        duration-300
        font-medium
        shadow-lg
        hover:scale-[1.02]
      `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}