import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function Hero() {
  const headlines = [
    { main: "Where students build", highlight: "real careers." },
    { main: "Real opportunities.", highlight: "Not just certificates." },
    { main: "From campus to", highlight: "industry-ready talent." },
    { main: "Skills that matter.", highlight: "Experience that counts." },
  ];

  const selected = useMemo(
    () => headlines[Math.floor(Math.random() * headlines.length)],
    []
  );

  const [active, setActive] = useState(null);

  const pillars = [
    {
      title: "Paid Internships",
      desc: "Opportunities that actually convert to experience.",
    },
    {
      title: "Mentors Who Reply",
      desc: "Learn from professionals who guide, not ghost.",
    },
    {
      title: "Projects Recruiters Respect",
      desc: "Work that proves skill, not just completion.",
    },
    {
      title: "Direct Company Exposure",
      desc: "Real visibility into startups & hiring teams.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      {/* SOFT ORANGE BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[160px]" />
        <div className="absolute top-40 -right-48 w-[600px] h-[600px] bg-orange-300/25 rounded-full blur-[180px]" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-44 pb-36 grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block mb-6 px-4 py-1 rounded-full text-sm font-medium text-orange-600 bg-orange-100">
            Built for students who think ahead
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            {selected.main}
            <br />
            <span className="text-orange-500">{selected.highlight}</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            The Student Spot connects students, colleges, mentors, and companies
            into one focused ecosystem — turning effort into outcomes recruiters
            actually value.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a
              href="https://www.whatsapp.com/channel/0029Vb6ft6072WTxJ5eMKA2I"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition inline-block"
            >
              Join The Community
            </a>

            <button className="border border-black px-8 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition">
              Explore Opportunities
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Trusted by <span className="font-semibold">10,000+</span> students
            across colleges.
          </p>
        </motion.div>

        {/* RIGHT SIDE – CAREER LAYERS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative flex flex-col gap-6 pt-6"
        >
          {/* ORANGE GUIDE LINE (FIXED & BOUNDED) */}
          <div
            className={`
              absolute left-3 top-2 h-[calc(100%-16px)] w-px rounded-full
              transition-colors duration-300
              ${active !== null ? "bg-orange-400" : "bg-orange-200/60"}
            `}
          />

          {pillars.map((item, i) => {
            const isActive = active === i;
            const isDimmed = active !== null && active !== i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`
                  relative rounded-2xl px-6 py-5
                  bg-white/85 backdrop-blur-xl
                  transition-all duration-300
                  cursor-default
                  ${
                    isActive
                      ? "shadow-2xl ring-2 ring-orange-400 scale-[1.02]"
                      : "shadow-md"
                  }
                  ${isDimmed ? "opacity-40" : "opacity-100"}
                `}
              >
                <h4 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* CLEAN END SPACER */}
      <div className="h-12 bg-white" />
    </section>
  );
}
