import React,{useEffect} from "react";
import {DiMongodb, DiHtml5} from 'react-icons/di'
import {SiExpress,SiCss3, SiRedux, SiTailwindcss,SiJavascript,SiReact,SiPostman,SiVite} from 'react-icons/si'
import {FaNodeJs, FaGitSquare, FaJava} from 'react-icons/fa'
import {TbBrandVscode} from 'react-icons/tb'
import AOS from "aos";

export const Skills = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <section data-aos="fade-up" className="sections" id="skills">
        <h1 data-aos="fade-up"  className="heading">
        <span className="sauce">1. </span>Skills
      </h1>
      <div></div>
        <p data-aos="fade-up">Here are a few Technologies I’ve been working with recently:</p>
          <ul data-aos="fade-up"  className="skills-list">
            <li className="skills-card">
              <div className="skills-card-name" > <SiJavascript className="skills-card-img" color="#ff6b6b" /> JavaScript</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <SiReact className="skills-card-img" color="#ff6b6b"/>  ReactJs</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiRedux className="skills-card-img" color="#ff6b6b"/> Redux</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <SiExpress className="skills-card-img" color="#ff6b6b"/> ExpressJs</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <FaNodeJs className="skills-card-img" color="#ff6b6b"/> Node.js</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <DiMongodb className="skills-card-img" color="#ff6b6b"/> MangoDb</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><DiHtml5 className="skills-card-img" color="#ff6b6b"/> HTML</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiCss3 className="skills-card-img" color="#ff6b6b"/> CSS</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiTailwindcss className="skills-card-img" color="#ff6b6b"/> Tailwind</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><FaJava className="skills-card-img" fontSize={'27px'} color="#ff6b6b"/> Java</div>
            </li>
          </ul>
        <p data-aos="fade-up" style={{marginTop:'3rem'}}>Here are a few Tools I’ve been working with recently:</p>
          <ul data-aos="fade-up"  className="skills-list">
            <li className="skills-card">
              <div className="skills-card-name" > <FaGitSquare className="skills-card-img" color="#ff6b6b"/> Git</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><TbBrandVscode className="skills-card-img" fontSize={'25px'} color="#ff6b6b"/> VScode</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiPostman className="skills-card-img" color="#ff6b6b"/> Postman</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiVite className="skills-card-img" fontSize={'25px'} color="#ff6b6b"/> Vite</div>
            </li>
          </ul>
    </section>
  )
}
