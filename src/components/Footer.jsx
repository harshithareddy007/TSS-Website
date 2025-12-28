export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      
      {/* ORANGE ACCENT LINE */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold text-orange-500">
            The Student Spot
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Empowering students with real skills, mentorship, and
            career-ready opportunities.
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Opportunities</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Resources
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Community Guidelines
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Connect
          </h4>

          <ul className="space-y-3 text-sm">
            <li className="text-gray-400">
              support@thestudentspot.in
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/thestudentspot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/the_studentspot/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                Instagram
              </a>
            </li>
          </ul>

          <button className="mt-6 px-5 py-2 rounded-lg bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2025 <span className="text-orange-500 font-medium">The Student Spot</span>.  
        All rights reserved. <br />
        Made with <span className="text-orange-500">♥</span> in India
      </div>
    </footer>
  );
}
