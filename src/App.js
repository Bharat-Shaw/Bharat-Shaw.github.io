import { useEffect, useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Skills } from "./components/Skills";
import { Github } from "./components/Github";
import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

function App() {
  let [boolean, setBoolean] = useState(true);
  function handleClick() {
    setBoolean(!boolean);
  }

  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
  
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar handleClick={handleClick} boolean={boolean} />
      <Intro handleClick={handleClick} boolean={boolean} />
      <div className="contain give-padding" onClick={() => {
        if (boolean === false) handleClick();
      }}>
        <About />
        <Skills />
        {/* <Work /> */}
        <Projects />
        <Github />
        <Contact />
      </div>
      <Footer />
      <Particles options={particlesOptions} init={particlesInit}/>
    </div>
  );
}

export default App;
