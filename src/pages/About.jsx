import { motion } from "framer-motion";
import Layout from "../layout/Layout";

export default function About() {
  return (
    <Layout>
      {/* ORIGIN STORY */}
<section className="max-w-4xl mx-auto px-6 pt-24 pb-32">
  <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
    Our Story
  </p>

  <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
    The Student Spot didn’t start as a startup.
    <br />
    It started as a <span className="text-orange-500">frustration.</span>
  </h1>

  <div className="mt-10 space-y-6 text-lg text-gray-600 leading-relaxed">
    <p>
      Students were doing everything they were told to do.
      Studying hard. Completing courses. Collecting certificates.
    </p>

    <p>
      But when it came to real opportunities — internships, guidance, replies —
      there was silence.
    </p>

    <p className="font-medium text-gray-800">
      Effort was real. Outcomes were not.
    </p>

    <p>
      The Student Spot was built to fix that gap.
      Not with noise. Not with motivation quotes.
      But with systems that actually work.
    </p>
  </div>
</section>


      

      {/* SOLUTION */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold text-gray-900">
          So we built something <span className="text-orange-500">different</span>.
        </h2>

        <p className="mt-6 max-w-3xl text-gray-600">
          The Student Spot is an ecosystem where students, mentors, colleges,
          and companies come together — not for noise, but for real outcomes.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Outcome-first",
              desc: "Proof of skill matters more than paper validation.",
            },
            {
              title: "Mentors who respond",
              desc: "No ghosting. Real humans. Real guidance.",
            },
            {
              title: "Community-driven growth",
              desc: "You grow faster when you grow together.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 shadow-md border border-gray-100"
            >
              <span className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-l-2xl" />
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — ONLY HERE */}
      <section className="bg-gray-900 text-white py-28 text-center">
        <h2 className="text-4xl font-extrabold">
          You’re early. <span className="text-orange-500">That’s powerful.</span>
        </h2>

        <p className="mt-4 text-gray-300">
          Join a community that’s building careers — together.
        </p>

        <a
          href="https://www.whatsapp.com/channel/0029Vb6ft6072WTxJ5eMKA2I"
          target="_blank"
          className="inline-block mt-8 bg-orange-500 px-10 py-4 rounded-xl font-bold hover:bg-orange-600 transition"
        >
          Join the Community
        </a>
      </section>
    </Layout>
  );
}
