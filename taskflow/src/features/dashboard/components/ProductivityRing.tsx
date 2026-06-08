export default function ProductivityRing() {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-2xl
      p-6

      flex
      flex-col
      items-center
      justify-center
    "
    >
      <div
        className="
        w-40
        h-40
        rounded-full

        border-[10px]
        border-indigo-500

        flex
        items-center
        justify-center
      "
      >
        <span
          className="
          text-3xl
          font-bold
        "
        >
          82%
        </span>
      </div>

      <p className="mt-5 text-gray-400">
        Productivity Score
      </p>
    </div>
  );
}