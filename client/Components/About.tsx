import React from "react";
import "../styles/about.css";
import ray from "../assets/ray.png";
// const ray = "../assets/ray.png";

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="sub-h1">
        <span>
          Hello! My name is Ray and I am a creator involved in web development
          and software engineering.
        </span>
        <img src={ray} alt="headshot" />
      </div>
    </div>
  );
}

export default About;
