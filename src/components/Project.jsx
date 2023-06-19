import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import getProjects from "../data/projects";
import AOS from "aos";

export default function Projects() {
  const [projects, setProjects] = useState(getProjects());

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="projects-continer sections" id="projects">
      <h1 className="heading">
        <span className="sauce">Projects</span>
      </h1>
      <div className="">
        <div className="project-cards">
          {projects?.map((project, index) => (
            <div data-aos="fade-up" key={project.id} className="project-card">
              <div className="project-img">
                <img
                  src={require(`../images/projects/${project.image}`)}
                  alt=""
                />
              </div>
              <div className="project-info">
                <a target="_blank" rel="noreferrer" href={project.projectLinkHosted}>
                  <div className="project-title">{project.projectTitle}</div>
                </a>
                <div className="project-description">{project.projectInfo}</div>
                <ul className="tech-used project-tech-stack">
                  {project.techUsed.map((tech, index) => (
                    <li  key={index}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a className="project-github-link" rel="noreferrer" target="_blank" href={project.projectLinkGithub}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a className="project-deployed-link" rel="noreferrer" target="_blank" href={project.projectLinkHosted}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div style={{textAlign:"center",marginTop:'1.5rem' ,paddingTop:"10px"}}>
          </div>
        </div>
      </div>
    </section>
  );
}
