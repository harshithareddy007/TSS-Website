import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I found internships and mentors here that I never had access to before.",
    role: "CSE Student",
    meta: "2nd Year",
  },
  {
    quote:
      "This platform actually bridges the gap between college and industry.",
    role: "Final Year Student",
    meta: "Engineering",
  },
  {
    quote:
      "We hired motivated students through The Student Spot. Solid talent pool.",
    role: "Startup Founder",
    meta: "Hiring Partner",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F6F7F9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="mb-14">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-medium rounded-full bg-orange-100 text-orange-600">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Loved by students & startups
          </h2>

          <p className="mt-3 text-gray-600 max-w-xl">
            Real experiences from people building real careers with The Student
            Spot.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-orange-100 transition"
            >
              {/* ORANGE STRIP */}
              <div className="absolute top-0 left-0 h-1 w-full bg-orange-500 rounded-t-2xl" />

              {/* QUOTE */}
              <div className="text-orange-500 text-3xl font-bold mb-4">“</div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {item.quote}
              </p>

              <div className="text-sm">
                <p className="font-semibold text-gray-900">{item.role}</p>
                <p className="text-gray-500">{item.meta}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
