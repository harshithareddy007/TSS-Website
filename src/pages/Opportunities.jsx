import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const opportunities = [
  {
    role: "Frontend Developer Intern",
    company: "TechCorp",
    location: "Bangalore",
    type: "Internship",
    date: "Dec 15, 2024",
    desc: "Work on real-world React projects and collaborate with designers.",
  },
  {
    role: "Product Manager",
    company: "InnovateCo",
    location: "Pune",
    type: "Full-time",
    date: "Dec 12, 2024",
    desc: "Lead product development for a fast-growing SaaS platform.",
  },
  {
    role: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Internship",
    date: "Dec 10, 2024",
    desc: "Design intuitive interfaces used by thousands of students.",
  },
];

export default function Opportunities() {
  return (
    <>
      {/* SAME NAVBAR AS HOME */}
      <Navbar />

      <section className="bg-[#FAFAFA] min-h-screen pt-28">
        {/* HERO */}
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Job & Internship{" "}
            <span className="text-orange-500">Opportunities</span>
          </motion.h1>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Explore verified internships and jobs shared by trusted startups and
            companies. Opportunities that actually build careers.
          </p>
        </div>

        {/* SEARCH & FILTER */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by role, company..."
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <select className="border border-gray-200 rounded-xl px-4 py-3">
              <option>All Types</option>
              <option>Internship</option>
              <option>Full-time</option>
            </select>
            <select className="border border-gray-200 rounded-xl px-4 py-3">
              <option>All Locations</option>
              <option>Remote</option>
              <option>Bangalore</option>
              <option>Pune</option>
            </select>
          </div>
        </div>

        {/* OPPORTUNITY CARDS */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid gap-6">
          {opportunities.map((job, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.role}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.company} • {job.location} • {job.type}
                  </p>
                  <p className="mt-3 text-gray-600">{job.desc}</p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3">
                  <span className="text-xs text-gray-400">
                    Posted on {job.date}
                  </span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold transition">
                    Quick Apply
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RECRUITER CTA */}
        <div className="bg-orange-50 py-20 mt-10">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Are you a <span className="text-orange-500">Recruiter?</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Post internships or jobs and connect with 10,000+ skilled students.
            </p>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition">
              Post an Opportunity
            </button>
          </div>
        </div>
      </section>

      {/* SAME FOOTER AS HOME */}
      <Footer />
    </>
  );
}
