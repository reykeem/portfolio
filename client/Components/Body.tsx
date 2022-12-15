import React, { useRef, useState, useEffect } from "react";
import Hero from "./Hero";
import "../styles/body.css";
import About from "./About";
import Featured from "./Featured";
import Contact from "./Contact";
import { useInView } from "react-intersection-observer";
import Experience from "./Experience";
import Footer from "./Footer";

function Body() {
  // const { ref, inView } = useInView();
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const featured1Ref = useRef<HTMLDivElement>(null);
  const featured2Ref = useRef<HTMLDivElement>(null);
  const featured3Ref = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
        // else {
        //   entry.target.classList.remove("animated");
        // }
      });
    });
    const hero = heroRef.current;
    const about = aboutRef.current;
    const experience = experienceRef.current;
    const featured = featuredRef.current;
    const featured1 = featured1Ref.current;
    const featured2 = featured2Ref.current;
    const featured3 = featured3Ref.current;
    const contact = contactRef.current;
    if (hero) observer.observe(hero);
    if (about) observer.observe(about);
    if (experience) observer.observe(experience);
    if (featured) observer.observe(featured);
    if (featured1) observer.observe(featured1);
    if (featured2) observer.observe(featured2);
    if (featured3) observer.observe(featured3);
    if (contact) observer.observe(contact);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="body">
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      {/* <Experience experienceRef={experienceRef} /> */}
      <Featured
        featuredRef={featuredRef}
        featured1Ref={featured1Ref}
        featured2Ref={featured2Ref}
        featured3Ref={featured3Ref}
      />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default Body;
