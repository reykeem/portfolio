import React from "react";
import "../styles/contact.css";
import github from "../assets/icons8-github-48.png";
import linkedin from "../assets/icons8-linkedin-circled-60.png";
import email from "../assets/icons8-mail-48.png";

type ContactPropsType = {
  contactRef: any;
};

function Contact({ contactRef }: ContactPropsType) {
  return (
    <div className="contact" ref={contactRef}>
      <h1>Get In Touch</h1>
      <span className="spiel">
        Currently in pursuit of new opportunities and environments to feed my
        earnest growth as a dev. Feel free to reach out for any questions and
        further conversation! Thanks!
      </span>
      <br />
      <br />
      <span>My Links:</span>
      <br />
      <br />
      <div className="links-sec">
        <ul className="links">
          <li>
            <a href="https://www.linkedin.com/in/raymondhkim/">
              <img src={github} alt="gh" className="icon" />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/reykeem">
              <img src={linkedin} alt="linkedin" className="icon" />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="mailto:rayhkim23@gmail.com">
              <img src={email} alt="email" className="icon" />
              <span>Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
