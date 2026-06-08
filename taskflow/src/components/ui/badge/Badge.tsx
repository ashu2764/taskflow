type Variant =
  | "success"
  | "pending"
  | "danger";

interface BadgeProps {
  text: string;
  variant: Variant;
}

export default function Badge({
  text,
  variant,
}: BadgeProps) {
  const styles = {
    success:
      "bg-green-500/20 text-green-400",

    pending:
      "bg-yellow-500/20 text-yellow-400",

    danger:
      "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`
      px-3
      py-1
      rounded-full
      text-xs
      font-medium
      ${styles[variant]}
      `}
    >
      {text}
    </span>
  );
}