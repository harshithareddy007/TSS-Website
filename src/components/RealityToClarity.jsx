import { motion } from "framer-motion";

export default function RealityToClarity() {
  return (
    <section className="bg-[#F3F4F6] py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">
            The Student Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            From confusion to clarity
          </h2>
        </motion.div>

        {/* MIRROR CARDS */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          
          {/* LEFT — WITHOUT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-[#E5E7EB] p-10 shadow-sm"
          >
            <span className="absolute top-6 right-6 text-xs font-semibold text-gray-500">
              WITHOUT TSS
            </span>

            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              The usual student struggle
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Scattered opportunities across platforms</li>
              <li>• Random internships with no outcomes</li>
              <li>• Mentors who don’t respond</li>
              <li>• Skills that recruiters ignore</li>
              <li>• No clear direction or roadmap</li>
            </ul>
          </motion.div>

          {/* RIGHT — WITH */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -6,
              boxShadow: "0 25px 60px rgba(249, 115, 22, 0.25)",
            }}
            className="relative rounded-3xl bg-white p-10 shadow-lg border border-orange-100"
          >
            <span className="absolute top-6 right-6 text-xs font-semibold text-orange-500">
              WITH THE STUDENT SPOT
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              A focused career pathway
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                One clear, trusted ecosystem
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                Paid & verified internships
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                Mentors who actually reply
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                Projects recruiters respect
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                Clear growth from college to career
              </li>
            </ul>

            {/* SOFT GLOW */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-orange-500/5 opacity-0 hover:opacity-100 transition" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
