import { FiArrowUpRight } from "react-icons/fi";
import { talks } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Talks({ index }: { index: string }) {
  return (
    <Section id="talks" index={index} title="Talks">
      <ul className="talk-list">
        {talks.map((talk, i) => (
          <Reveal as="li" key={talk.href} delay={i * 80}>
            <a className="talk-card" href={talk.href} target="_blank" rel="noreferrer">
              <p className="project-eyebrow">{talk.kind}</p>
              <h3>
                {talk.title} <FiArrowUpRight aria-hidden="true" className="talk-arrow" />
              </h3>
              <p>{talk.description}</p>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
