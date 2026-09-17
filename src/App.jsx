import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Identity from './sections/Identity';
import Metrics from './sections/Metrics';
import Systems from './sections/Systems';
import BackendEngineering from './sections/BackendEngineering';
import CloudDevOps from './sections/CloudDevOps';
import EngineeringFundamentals from './sections/EngineeringFundamentals';
import Projects from './sections/Projects';
import AIExploration from './sections/AIExploration';
import Terminal from './sections/Terminal';
import Constellation from './sections/Constellation';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Identity />
        <Metrics />
        <Systems />
        <BackendEngineering />
        <CloudDevOps />
        <EngineeringFundamentals />
        <Projects />
        <AIExploration />
        <Terminal />
        <Constellation />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
