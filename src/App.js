import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter} from "react-router-dom";

// Import components 
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import PresentationCard from './components/PresentationCard';

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "aboutme",
      "experience",
      "portfolio",
      "technologies",
      "contact"
    ];
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <Navbar activeSection={activeSection} />
      <div className="main-container">
        <section className="section" id="home">
          <PresentationCard />
        </section>
        <section className="section" id="aboutme">
          <AboutMe />
        </section>
        <section className="section" id="experience">
          <Experience />
        </section>
        <section className="section" id="portfolio">
          <Portfolio />
        </section>
        <section className="section" id="technologies">
          <Technologies />
        </section>
        <section className="section" id="contact">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
