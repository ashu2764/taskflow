interface AvatarProps {
  name: string;
}

export default function Avatar({
  name,
}: AvatarProps) {
  return (
    <div
      className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-indigo-500
      font-semibold
      text-white
      "
    >
      {name.charAt(0)}
    </div>
  );
}