import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm px-6 py-3">
          {/* LEFT: Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="The Student Spot"
              className="h-9 w-9 object-contain"
            />
            <span className="text-lg font-bold text-orange-500">
              The Student Spot
            </span>
          </div>

          {/* CENTER: Nav links */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a className="hover:text-orange-500 transition" href="#">
              Home
            </a>
            <a className="hover:text-orange-500 transition" href="#">
              About
            </a>
            <a className="hover:text-orange-500 transition" href="#">
              Opportunities
            </a>
            <a className="hover:text-orange-500 transition" href="#">
              Contact
            </a>
          </nav>

          {/* RIGHT: Auth buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
              Login
            </button>

            <button className="px-5 py-2 rounded-xl text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
