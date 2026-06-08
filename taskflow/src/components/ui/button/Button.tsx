import { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-indigo-500 hover:bg-indigo-600 text-white",

    secondary:
      "bg-violet-500 hover:bg-violet-600 text-white",

    outline:
      "border border-white/20 bg-transparent hover:bg-white/10",

    ghost:
      "bg-transparent hover:bg-white/10",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      className={cn(
        `
        h-11
        px-5
        rounded-xl
        font-medium
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-[0.98]
        `,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}