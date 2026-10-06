import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <Reveal as="header" className="section-heading">
        <span className="section-index">{index}.</span>
        <h2 id={`${id}-title`}>{title}</h2>
        <span className="section-rule" aria-hidden="true" />
      </Reveal>
      {children}
    </section>
  );
}
