const activities = [
  "Created Dashboard UI",
  "Completed Login Page",
  "Updated Task Board",
  "Finished Analytics",
];

export default function ActivityTimeline() {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-2xl
      p-6
    "
    >
      <h3 className="font-semibold mb-6">
        Recent Activity
      </h3>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex gap-4"
          >
            <div
              className="
              w-3
              h-3
              mt-2
              rounded-full
              bg-indigo-500
            "
            />

            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}