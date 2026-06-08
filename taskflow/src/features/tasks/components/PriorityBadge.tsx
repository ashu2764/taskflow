interface Props {
  priority: string;
}

export default function PriorityBadge({
  priority,
}: Props) {
  const styles = {
    High:
      "bg-red-500/20 text-red-400",

    Medium:
      "bg-yellow-500/20 text-yellow-400",

    Low:
      "bg-green-500/20 text-green-400",
  };

  return (
    <span
      className={`
      px-3
      py-1

      rounded-full

      text-xs

      font-medium

      ${
        styles[
          priority as keyof typeof styles
        ]
      }
    `}
    >
      {priority}
    </span>
  );
}