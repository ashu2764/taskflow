import { cn } from "@/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        `
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-2xl
        p-6
        shadow-xl
      `,
        className
      )}
    >
      {children}
    </div>
  );
}