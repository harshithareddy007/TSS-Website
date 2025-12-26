import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = {
  students: {
    title: "For Students",
    points: [
      "Verified internships that actually convert",
      "Mentors who respond and guide",
      "Projects recruiters respect",
      "Clear roadmap from college to career",
    ],
  },
  mentors: {
    title: "For Mentors",
    points: [
      "Mentor serious, high-potential students",
      "Flexible mentoring — your time, your rules",
      "Build personal brand & credibility",
      "Create real impact beyond LinkedIn posts",
    ],
  },
  colleges: {
    title: "For Colleges",
    points: [
      "Industry exposure for students",
      "Outcome-based internships & workshops",
      "Improved placement readiness",
      "Stronger college–industry connections",
    ],
  },
  companies: {
    title: "For Companies",
    points: [
      "Access pre-skilled student talent",
      "Hire through real project performance",
      "Reduce hiring noise & screening time",
      "Early access to future-ready candidates",
    ],
  },
};

export default function WhoIsItFor() {
  const [active, setActive] = useState("students");

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
          Who is The Student Spot for?
        </h2>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {Object.keys(roles).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition
                ${
                  active === key
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* CONTENT CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl rounded-3xl bg-[#FAFAFA] p-10 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {roles[active].title}
            </h3>

            <ul className="space-y-4 text-gray-700 text-left">
              {roles[active].points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
