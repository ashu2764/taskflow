import { InputHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm text-slate-300">
          {label}
        </label>
      )}

      <input
        className={cn(
          `
          w-full
          h-12
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          text-white
          outline-none
          backdrop-blur-xl

          focus:border-indigo-500
          focus:ring-2
          focus:ring-indigo-500/20
          `,
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}