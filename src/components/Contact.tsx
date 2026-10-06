import { FiMail } from "react-icons/fi";
import { contact, profile } from "../data/content";
import Reveal from "./Reveal";

export default function Contact({ index }: { index: string }) {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <Reveal>
        <p className="section-index">{index}. What's next?</p>
        <h2 id="contact-title" className="contact-title">
          {contact.heading}
        </h2>
        <p className="contact-blurb">{contact.blurb}</p>
        <a className="button button-primary button-lg" href={`mailto:${profile.email}`}>
          <FiMail aria-hidden="true" /> Say hello
        </a>
      </Reveal>
    </section>
  );
}
