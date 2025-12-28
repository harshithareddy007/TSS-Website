import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
