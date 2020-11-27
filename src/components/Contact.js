import React from "react";
import github from "../images/github-logo.png";
import linkedin from "../images/linkedin-button.png";
import codepen from "../images/codepen.png";
import instagram from "../images/instagram-logo.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="content">
        <a href="mailto:hawolyba@gmail.com">
          <h2>hawolyba@gmail.com</h2>
        </a>
        <p>
          <a
            rel="noopener noreferrer"
            href="https://github.com/HawolyBa/"
            target="_blank"
          >
            <img src={github} alt="github" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/hawoly-ba-21068449"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://codepen.io/hawoly"
            target="_blank"
          >
            <img src={codepen} alt="codepen" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.instagram.com/pixikraft/?hl=fr"
            target="_blank"
          >
            <img src={instagram} alt="google" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
