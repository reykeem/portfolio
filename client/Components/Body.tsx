import React from "react";
import Hero from "./Hero";
import "../styles/body.css";
import About from "./About";
import Featured from "./Featured";
import Contact from "./Contact";

function Body() {
  return (
    <div className="body">
      <Hero />
      <About />
      <Featured />
      <Contact />
    </div>
  );
}

export default Body;
