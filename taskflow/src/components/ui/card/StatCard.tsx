import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
      bg-white/5

      backdrop-blur-xl

      border
      border-white/10

      rounded-2xl

      p-6
    "
    >
      <p className="text-gray-400">
        {title}
      </p>

      <h2
        className="
        text-3xl
        font-bold
        mt-2
      "
      >
        {value}
      </h2>
    </motion.div>
  );
}