import { projects, type Project } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

function ProjectMedia({ media }: { media: Project["media"] }) {
  if (media.kind === "phone") {
    return (
      <div className="project-media phones">
        {media.shots.map((shot) => (
          <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" width={480} height={1038} />
        ))}
      </div>
    );
  }
  return (
    <div className="project-media browser">
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <img src={media.src} alt={media.alt} loading="lazy" />
    </div>
  );
}

export default function Projects({ index }: { index: string }) {
  return (
    <Section id="projects" index={index} title="Featured projects">
      <ul className="project-list">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} className={`project ${i % 2 ? "is-flipped" : ""}`}>
            <ProjectMedia media={project.media} />
            <div className="project-body">
              <p className="project-eyebrow">Featured project</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="tag-list">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ul className="project-links">
                {project.links.map(({ label, href, icon: Icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on ${label}`}
                    >
                      <Icon aria-hidden="true" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
