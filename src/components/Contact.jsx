import React,{useEffect} from "react";
import AOS from "aos";

export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up"  className="contact-continer sections" id="contact">
      <h1 className="heading">
        <span className="sauce">Contact Me</span>
      </h1>
      <div data-aos="fade-up" className="flex-center">
        <h1 className="title">Get In Touch</h1>
        <p style={{ textAlign: "center", "": 700 }}>
          Shoot an Email. I would love to talk more to you. Best case scenario i
          recommend an anime to watch. worst case scenario i recommend you an
          anime to watch.
        </p>
        <div className="button-container">
          <a
            className="contact-button"
            href="mailto: bharat.teachief0171@gmail.com"
          >
            Send an email
          </a>
        </div>
        <div id="contact-phone" className="button-container">
          <a
            className="contact-button"
            href="tel:+917685992093"
          >
            Give a Ring
          </a>
        </div>
      </div>
    </section>
  );
}
