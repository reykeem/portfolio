import { about, profile, skills } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About({ index }: { index: string }) {
  return (
    <Section id="about" index={index} title="About me">
      <div className="about-grid">
        <Reveal className="about-text">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            Outside of code: <span className="muted-list">{about.interests.join(" · ")}</span>
          </p>
          <p>Technologies I've been working with recently:</p>
          <ul className="skill-grid">
            {skills.map(({ name, icon: Icon }) => (
              <li key={name} className="chip">
                <Icon aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="about-photo" delay={120}>
          <img
            src={profile.headshot}
            alt={`Portrait of ${profile.name}`}
            width={640}
            height={631}
            loading="lazy"
          />
        </Reveal>
      </div>
    </Section>
  );
}
