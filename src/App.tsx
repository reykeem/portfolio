import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Talks from "./components/Talks";
import { experience, navItems, talks } from "./data/content";

// Optional sections drop out of the nav when their data is empty.
const hidden = new Set([...(experience.length ? [] : ["#experience"]), ...(talks.length ? [] : ["#talks"])]);
const visibleNav = navItems.filter((item) => !hidden.has(item.href));
const shows = (href: string) => !hidden.has(href);
// Section numbers follow nav order, so they stay sequential when a section is hidden.
const indexOf = (href: string) =>
  String(visibleNav.findIndex((item) => item.href === href) + 1).padStart(2, "0");

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header items={visibleNav} />
      <main id="main" className="container">
        <Hero />
        <About index={indexOf("#about")} />
        {shows("#experience") && <Experience index={indexOf("#experience")} />}
        <Projects index={indexOf("#projects")} />
        {shows("#talks") && <Talks index={indexOf("#talks")} />}
        <Contact index={indexOf("#contact")} />
      </main>
      <Footer />
    </>
  );
}
