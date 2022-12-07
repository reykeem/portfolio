import React from "react";
import "../styles/contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <span className="spiel">
        Currently in pursuit of new opportunities and environments to feed my
        earnest growth as a dev. Please feel free to reach out if there are any
        questions or concerns! Thanks for visiting my website!
      </span>
      <br />
      <br />
      <span>My Links:</span>
      <br />
      <br />
      <ul className="links">
        <li>
          <a href="https://www.linkedin.com/in/raymondhkim/m">
            <GitHubIcon />
          </a>
          Github
        </li>
        <li>
          <a href="https://github.com/reykeem">
            <LinkedInIcon />
          </a>
          LinkedIn
        </li>
      </ul>
    </div>
  );
}

export default Contact;
