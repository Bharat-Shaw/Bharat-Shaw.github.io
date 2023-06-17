import { useEffect, useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Skills } from "./components/Skills";
import { Github } from "./components/Github";

function App() {
  let [boolean, setBoolean] = useState(true);
  const [mousePosition, SetMousePosition] = useState({
    left: 0,
    top: 0,
  });
  let [cursor, setCursor] = useState(false);
  function handleClick() {
    setBoolean(!boolean);
    // console.log(boolean);
  }
  function handleMouseMove(e) {
    SetMousePosition({ left: e.pageX, top: e.pageY });
    // console.log(mousePosition);
  }
  function handleMouseOver(e) {
    setCursor(false);
    // console.log(e.target)
    if (e.target.tagName == "A" || e.target.parentElement.tagName == "A") {
      setCursor(true);
    }
  }
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseMove={handleMouseMove}
      className="App"
    >
      <div
        style={{ left: mousePosition.left, top: mousePosition.top }}
        className="cursor"
      >
        {(cursor && "Go To") || "hello!"}
      </div>

      <Navbar handleClick={handleClick} boolean={boolean} />
      <Intro handleClick={handleClick} boolean={boolean} />
      <div
        onClick={() => {
          if (boolean === false) handleClick();
        }}
        className="contain give-padding"
      >
        <About />
        <Skills />
        <Work />
        <Projects />
        <Github />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
