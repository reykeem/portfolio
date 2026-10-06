import { experience } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience({ index }: { index: string }) {
  return (
    <Section id="experience" index={index} title="Experience">
      <ol className="timeline">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.period}`} className="timeline-item" delay={i * 80}>
            <p className="timeline-period">{job.period}</p>
            <div>
              <h3>
                {job.title}{" "}
                <span className="accent">
                  @{" "}
                  {job.href ? (
                    <a href={job.href} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </span>
              </h3>
              <ul className="bullets">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {job.tech && (
                <ul className="tag-list">
                  {job.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
