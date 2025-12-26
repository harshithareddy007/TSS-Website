export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              <span className="text-orange-500">The</span> Student Spot
            </h3>

            <p className="text-sm leading-relaxed">
              Empowering students with real skills, mentorship, and
              career-ready opportunities.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Opportunities", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-500 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              {["Privacy Policy", "Terms & Conditions", "Community"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-orange-500 transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 transition cursor-pointer">
                support@thestudentspot.in
              </li>
              <li className="hover:text-orange-500 transition cursor-pointer">
                LinkedIn
              </li>
              <li className="hover:text-orange-500 transition cursor-pointer">
                Instagram
              </li>
            </ul>
          </div>
        </div>

        {/* ORANGE DIVIDER */}
        <div className="mt-12 pt-6 border-t border-orange-500/30 text-center text-sm">
          © {new Date().getFullYear()} The Student Spot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
