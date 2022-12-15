import React, { useEffect, useRef, useState } from "react";
import { observe } from "react-intersection-observer";
import "../styles/hero.css";

type HeroPropsType = {
  heroRef: any;
};

function Hero({ heroRef }: HeroPropsType) {
  // const myRef = useRef<HTMLDivElement>(null);
  // const [visibility, setVisibility] = useState<any>();
  // console.log("isVisible? ", visibility);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setVisibility(entry.isIntersecting);
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("animated");
  //       } else {
  //         entry.target.classList.remove("animated");
  //       }
  //     });
  //   });
  //   const element = myRef.current;
  //   if (element) observer.observe(element);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div className="hero" ref={heroRef}>
      <span>Hello, my name is</span>
      <h1>Raymond Kim</h1>
      <span>
        I am a full-stack software engineer motivated towards contributing to
        the developer space.
      </span>
    </div>
  );
}

export default Hero;
