import AnimatedNumber from "./AnimatedNumber";
import { motion } from "framer-motion";

const stats = [
  { value: 10000, label: "Students onboarded" },
  { value: 500, label: "Opportunities unlocked" },
  { value: 50, label: "College partners" },
  { value: 100, label: "Workshops delivered" },
];

export default function Stats() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="group cursor-default transition"
            >
              <div className="text-4xl font-extrabold text-gray-900 group-hover:text-orange-500 transition">
                <AnimatedNumber value={item.value} />
              </div>

              <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-700 transition">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
