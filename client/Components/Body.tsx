import React from "react";
import Hero from "./Hero";
import "../styles/body.css";
import About from "./About";

function Body() {
  return (
    <div className="body">
      <Hero />
      <About />
    </div>
  );
}

export default Body;
