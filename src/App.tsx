import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { experience, navItems } from "./data/content";

const hasExperience = experience.length > 0;
const visibleNav = navItems.filter((item) => hasExperience || item.href !== "#experience");
// Section numbers follow nav order, so they stay sequential when Experience is hidden.
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
        {hasExperience && <Experience index={indexOf("#experience")} />}
        <Projects index={indexOf("#projects")} />
        <Contact index={indexOf("#contact")} />
      </main>
      <Footer />
    </>
  );
}
