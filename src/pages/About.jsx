import Layout from "../layout/Layout";

export default function About() {
  return (
    <Layout>
      {/* HERO */}
      <section className="px-6 md:px-20 py-24 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-orange-500 font-semibold mb-4">
              About The Student Spot
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Talent is everywhere. <br />
              <span className="text-gray-900">
                Opportunities are not.
              </span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg max-w-xl">
              Students put in effort every day, but clarity is missing — what to
              learn, where to apply, and what actually moves the needle.
            </p>
            <p className="mt-4 text-gray-800 font-medium">
              We exist to fix that.
            </p>
          </div>

          {/* BELIEF CARD */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Our belief
            </p>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              From confusion to clarity
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Guidance over noise</li>
              <li>• Community over chaos</li>
              <li>• Action over intention</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GAP – SCROLLABLE PREMIUM CARDS */}
      <section className="px-6 md:px-20 py-24 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          The gap we’re fixing
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth">
          {[
            {
              title: "Scattered advice",
              desc: "Students receive conflicting guidance from multiple platforms with no clear direction."
            },
            {
              title: "Closed opportunities",
              desc: "Most real opportunities stay inside closed circles, making access unfair."
            },
            {
              title: "Directionless skills",
              desc: "Learning happens, but without knowing how it converts into careers."
            },
            {
              title: "Effort without outcomes",
              desc: "Hard work doesn’t always translate into visible progress or results."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] bg-[#FAFAFA] rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY – PATH STYLE */}
      <section className="px-6 md:px-20 py-28 bg-[#FAFAFA]">
        <h2 className="text-3xl font-bold text-gray-900 mb-20">
          The journey so far
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-px bg-gray-300" />

          {[
            "Started as a simple student-help initiative",
            "Students began sharing real guidance",
            "Community expanded across colleges & cities",
            "Mentors and recruiters joined the ecosystem",
            "Evolving into a career-first student platform"
          ].map((step, i) => (
            <div key={i} className="relative pl-16 mb-16">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-orange-500" />
              <p className="text-lg text-gray-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER + IMPACT */}
      <section className="px-6 md:px-20 py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Built by a student, for students
            </h2>
            <p className="font-medium text-gray-900 mb-2">
              Rajkamal Panthagani
            </p>
            <p className="italic text-gray-600 mb-4">
              Talent isn’t rare. Guidance is.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Student Spot was built to help students move from effort to
              opportunity — without confusion, gatekeeping, or noise.
            </p>
          </div>

          <div className="bg-[#FAFAFA] rounded-2xl p-10 border border-gray-100">
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>• 10,000+ learners</li>
              <li>• Pan-India student community</li>
              <li>• Mentorship & career guidance</li>
              <li>• Jobs, internships & events</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA – SAME BG, NO BREAK */}
      <section className="px-6 md:px-20 py-24 bg-white">
        <div className="max-w-5xl mx-auto bg-[#FAFAFA] rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            You’re early. <span className="text-orange-500">That’s powerful.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Join a community that’s building skills, careers, and clarity
            together — shaping opportunities, not chasing them.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition">
              Join Now
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
