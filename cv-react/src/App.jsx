import React from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-maintext transition-colors relative overflow-hidden">
      <BackgroundParticles />
      <Navbar />
      <ThemeToggle />
      <main className="mx-auto relative z-0">
        <Hero />
        <Experience />
        <Projects />
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
