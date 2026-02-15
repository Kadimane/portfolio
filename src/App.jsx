

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero section with profile image */}
      <Hero />

      {/* About Me section */}
      <About />

      {/* Skills section */}
      <Skills />

      {/* Projects section */}
      <Projects />

      {/* Contact section with email and phone */}
      <Contact />
    </div>
  );
}

export default App;

