
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HiddenExtras from "./components/HiddenExtras";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-background text-white font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      

      {/* About Section */}
      <About />
      
      {/* Hidden Extras Section */}
      <HiddenExtras />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
