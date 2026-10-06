import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { profile, socials } from "../data/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <Reveal>
        <p className="hero-eyebrow">Hi, my name is</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="hero-name">{profile.name}.</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="hero-role">{profile.role}.</p>
      </Reveal>
      <Reveal delay={240}>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-location">
          <FiMapPin aria-hidden="true" /> {profile.location}
        </p>
      </Reveal>
      <Reveal delay={320} className="hero-actions">
        <a className="button button-primary" href="#experience">
          See my work <FiArrowRight aria-hidden="true" />
        </a>
        <a className="button button-outline" href={profile.resumeUrl} target="_blank" rel="noreferrer">
          Résumé
        </a>
      </Reveal>
      <Reveal delay={400} as="ul" className="hero-socials">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
