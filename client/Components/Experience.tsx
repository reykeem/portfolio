import React from "react";
import Tabs from "./Tabs";
import "../styles/exp.css";

type ExperienceProps = {
  experienceRef: any;
};

function Experience({ experienceRef }: ExperienceProps) {
  return (
    <div className="exp" ref={experienceRef}>
      <Tabs />
    </div>
  );
}

export default Experience;
