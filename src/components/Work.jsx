import React, { useState, useEffect } from "react";
import getWork from "../data/work";
import AOS from "aos";

export default function Work() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(getWork());
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section data-aos="fade-up" className="exp-continer sections" id="experience">
      <h1 data-aos="fade-up"  className="heading">
        <span className="sauce">2. </span>Where I've Worked
      </h1>
      <div  className="work">
        {companies.map((company, index) => (
          <div data-aos="fade-up" key={company.id} className="company">
            <div className=" company-name ">
              <a target="_blank" rel="noreferrer" href={company.companyLink} className="sauce">{company.companyName}</a>
            </div>
            <div className="company-desc expand">
              <span className="txt-highlights">{company.position}</span>
              <ul>
                {company.points.map((point,index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
