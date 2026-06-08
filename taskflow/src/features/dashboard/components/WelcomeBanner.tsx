export default function WelcomeBanner() {
  return (
    <div
      className="
      relative
      overflow-hidden

      rounded-3xl

      p-10

      bg-gradient-to-r
      from-indigo-600
      via-purple-600
      to-cyan-600
    "
    >
      <h2
        className="
        text-4xl
        font-bold
        mb-3
      "
      >
        Welcome Back Ashwani 👋
      </h2>

      <p className="text-white/80">
        Let's make today productive.
      </p>
    </div>
  );
}