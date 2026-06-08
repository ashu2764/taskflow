import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { day: "Mon", tasks: 3 },
  { day: "Tue", tasks: 7 },
  { day: "Wed", tasks: 5 },
  { day: "Thu", tasks: 9 },
  { day: "Fri", tasks: 6 },
  { day: "Sat", tasks: 10 },
  { day: "Sun", tasks: 8 },
];

export default function AnalyticsChart() {
  return (
    <div
      className="
      h-[350px]
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      "
    >
      <h3 className="mb-6 font-semibold">
        Weekly Productivity
      </h3>

      <div
       className="
        w-full
        h-[250px]
        min-w-0
        "
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <XAxis dataKey="day" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="tasks"
              stroke="#6366F1"
              fill="#6366F1"
              fillOpacity={0.25}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}