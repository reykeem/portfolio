import { about, profile, skillGroups } from "../data/content";
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
          <p className="about-education">{about.education}</p>
        </Reveal>
        <Reveal className="about-photo" delay={120}>
          <img
            src={profile.headshot}
            alt={`Portrait of ${profile.name}`}
            width={800}
            height={1200}
            loading="lazy"
          />
        </Reveal>
      </div>
      <Reveal className="skills" delay={80}>
        <h3 className="skills-heading">Tools I work with</h3>
        <dl className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <dt>{group.label}</dt>
              <dd>
                <ul className="skill-grid">
                  {group.items.map(({ name, icon: Icon }) => (
                    <li key={name} className="chip">
                      {Icon && <Icon aria-hidden="true" />}
                      {name}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
