import React from "react";
import "../styles/about.css";
import ray from "../assets/ray.png";
import css from "../assets/icons8-css3-48.png";
import gql from "../assets/icons8-graphql-48.png";
import html from "../assets/icons8-html-5-48.png";
import mui from "../assets/icons8-material-ui-48.png";
import mongo from "../assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png";
import pql from "../assets/icons8-postgresql-48.png";
import redux from "../assets/icons8-redux-48.png";
import webpack from "../assets/icons8-webpack-48.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import ts from "../assets/ts.png";
import redis from "../assets/icons8-redis-48.png";
import py from "../assets/icons8-python-48.png";

type AboutPropsType = {
  aboutRef: any;
};

function About({ aboutRef }: AboutPropsType) {
  const techs = [
    { name: "React", src: react },
    { name: "JavaScript", src: js },
    { name: "TypeScript", src: ts },
    { name: "GraphQL", src: gql },
  ];
  const techs2 = [
    { name: "HTML5", src: html },
    { name: "CSS3", src: css },
    { name: "Redux + TK", src: redux },
    { name: "Material UI", src: mui },
  ];
  const techs3 = [
    { name: "PostgresQL", src: pql },
    { name: "MongoDB", src: mongo },
    { name: "Python3", src: py },
    { name: "Redis", src: redis },
  ];

  return (
    <div id="about" className="about" ref={aboutRef}>
      <div className="heading">
        <h1>About Me</h1>
        <hr className="hr" />
      </div>
      <div className="sub-h1">
        <div>
          <span>
            Hello! My name is Ray and I am a creator involved in web development
            and software engineering. My interest in web development stems from
            an honest interest in the progression of technology and the
            internet. My goals are to continue to contribute to this growing
            network and sharpen my skills.
            <br />
            <br />
            Hobbies &amp; Interests:
            <br />
            <br />- Web3 (Crypto, DeFi, NFTs)
            <br />
            - Men's Hair
            <br />- Gaming
            <br />- Men's Fashion
          </span>
          <br />
          <br />
          <span>
            Here are a few technologies I have been working with recently:
          </span>
          <div className="stack-ul">
            <ul className="techstack">
              {techs.map((tech) => (
                <li key={tech.name}>
                  <img src={tech.src} alt={tech.name} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
            <ul className="techstack">
              {techs2.map((tech) => (
                <li key={tech.name}>
                  <img src={tech.src} alt={tech.name} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
            <ul className="techstack">
              {techs3.map((tech) => (
                <li key={tech.name}>
                  <img src={tech.src} alt={tech.name} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <img id="headshot" src={ray} alt="headshot" />
      </div>
    </div>
  );
}

export default About;
