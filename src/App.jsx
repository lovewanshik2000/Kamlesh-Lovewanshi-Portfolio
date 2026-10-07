import React, { useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Identity from './sections/Identity';
import TechUniverse from './sections/TechUniverse';
import Timeline from './sections/Timeline';
import Projects from './sections/Projects';
import Systems from './sections/Systems';
import AIExploration from './sections/AIExploration';
import Automation from './sections/Automation';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Film grain overlay */}
      <div className="noise" aria-hidden="true" />

      {/* Cinematic loader */}
      <Loader onComplete={() => setLoaded(true)} />

      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main cinematic content — 10 choreographed scenes */}
      <main id="top">
        {/* SCENE 01 — Hero (Cinematic Walking Character + Dolly Transition) */}
        <Hero />

        {/* SCENE 02 — The Identity ("I BUILD THE SYSTEMS BEHIND THE EXPERIENCE") */}
        <Identity />

        {/* SCENE 03 — The Engineering Universe (Spatial 3D Constellation) */}
        <TechUniverse />

        {/* SCENE 04 — Career Timeline (2023–2026 Spatial Milestone Cards) */}
        <Timeline />

        {/* SCENE 05 — Project Worlds (HUDs + Live Interactive Simulators) */}
        <Projects />

        {/* SCENE 06 — System Design ("BEYOND CODE. THINKING IN SYSTEMS.") */}
        <Systems />

        {/* SCENE 07 — AI + Backend ("INTELLIGENCE MEETS ENGINEERING.") */}
        <AIExploration />

        {/* SCENE 08 — Automation Architecture ("AUTOMATE THE REPETITIVE.") */}
        <Automation />

        {/* SCENE 09 — About ("THE ENGINEER BEHIND THE SYSTEM.") */}
        <About />

        {/* SCENE 10 — Contact ("LET'S BUILD SOMETHING GREAT.") */}
        <Contact />
      </main>
    </>
  );
}

export default App;
