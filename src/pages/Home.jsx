import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import RealityToClarity from "../components/RealityToClarity";
import Audience from "../components/Audience";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <RealityToClarity />
      <Audience />
      <Testimonials />
      <Footer />
    </div>
  );
}
