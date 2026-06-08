interface Props {
  status: string;
}

export default function StatusBadge({
  status,
}: Props) {
  const styles = {
    Completed:
      "bg-green-500/20 text-green-400",

    Pending:
      "bg-yellow-500/20 text-yellow-400",

    "In Progress":
      "bg-blue-500/20 text-blue-400",
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
          status as keyof typeof styles
        ]
      }
    `}
    >
      {status}
    </span>
  );
}