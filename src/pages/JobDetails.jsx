import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JobDetails() {
  const { id } = useParams();

  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-4xl font-bold text-gray-900">
          Frontend Developer Intern
        </h1>

        <p className="mt-2 text-gray-500">
          TechCorp • Bangalore • Internship
        </p>

        <div className="mt-8 bg-white rounded-2xl shadow p-8 space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Job Description</h3>
            <p className="text-gray-600 mt-2">
              Work on real-world React projects, collaborate with designers,
              and ship features used by thousands of students.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Eligibility</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>CS / IT students</li>
              <li>Basic React knowledge</li>
              <li>Good problem-solving skills</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Requirements</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Git basics</li>
            </ul>
          </div>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold">
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
