import resume from "../resume/Bharat_Resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
export default function Navbar({ handleClick, boolean }) {

  const handleDownload = () => {
    window.open(resume, '_blank');
  };

  return (
    <nav id="nav-menu" onClick={handleClick}>
      <div id="logo-nav">
        <h1 className="nav-link home">
          <a className="sauce name rubber" href="#home">
            Bharat 
          </a>
        </h1>
        <div className="ham-container">
          <a rel="noreferrer" href={resume} onClick={handleDownload} download={'Bharat-Durge-Resume'} className="contact-button resume-button first-btn">
            Resume
          </a>
          <span className="ham">
          <FontAwesomeIcon icon={boolean ? faBars : faXmark} />
          </span>
        </div>
      </div>
      <ul className={boolean ? "hide" : ""}>
        <li className="nav-link about">
          <a href="#about" className="underline">
            <span className="sauce">0. </span>About
          </a>
        </li>
        <li className="nav-link skills">
          <a href="#skills" className="underline">
            <span className="sauce">1. </span>Skills
          </a>
        </li>
        <li>
          <a href="#experience" className="underline">
            <span className="sauce">2. </span>Experience
          </a>
        </li>
        <li className="nav-link projects">
          <a href="#projects" className="underline">
            <span className="sauce">3. </span>Projects
          </a>
        </li>
        <li className="nav-link contact">
          <a href="#contact" className="underline">
            <span className="sauce">4. </span>Contact
          </a>
        </li>
      </ul>
      <a href={resume} onClick={handleDownload} rel="noreferrer" download={'Bharat-Durge-Resume'} id="resume-button-1" className="contact-button nav-link resume resume-button second-btn">Resume</a>
    </nav>
  );
}
