interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div
      className="
      flex
      items-center

      gap-3

      bg-white/5

      border
      border-white/10

      rounded-xl

      px-4
      py-3
    "
    >
      <input
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        placeholder="Search tasks..."
        className="
        bg-transparent
        outline-none
        w-full
      "
      />
    </div>
  );
}