import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#FAFAFA]">{children}</main>
      <Footer />
    </>
  );
}
