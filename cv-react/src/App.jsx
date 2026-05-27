import React from 'react';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-maintext">
      <Navbar />
      <ThemeToggle />
      <main className="mx-auto relative z-0">
        <div id="hero" className="h-16" />
        <Experience />
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
