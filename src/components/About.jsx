import React,{useEffect} from "react";
import resume from "../resume/Bharat_Resume.pdf"
import AOS from "aos";

export default function About() {

  const handleDownload = () => {
    window.open(resume, '_blank');
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="about section sections" id="about">
      <h1 data-aos="fade-up"  className="heading">
        <span className="sauce">0. </span>About Me
      </h1>
      <div>
        <div data-aos="fade-up" className=" first">
          <p id="user-detail-intro">
            Welcome to where I turn coffee into code! I'm Bharat,
            a full stack web developer proficient in HTML5, CSS3, JavaScript, ReactJs, NodeJs, and Express, with a strong grasp of database technologies such as MongoDB.
 with a passion for building websites that not only look great but also make users say, <p style={{display:'inline-block'}} className="sauce">'Wow, this is awesome!' </p> &nbsp; 
             I may not have superpowers, but I have a keen eye for detail and a
            commitment to excellence that drives me to tackle even the most
            complex coding challenges. When I'm not coding, you can find me
            exploring the animes.
            <br />
          </p>
          <br />
          
        </div>
        <a onClick={handleDownload} rel="noreferrer" href={resume} download={"Bharat-Durge-Resume"} id="resume-button-2" className="contact-button resume-button second-btn">Resume</a>
      </div>
    </section>
  );
}
