import { profile, socials } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <ul className="footer-socials">
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
      </ul>
      <p>
        Designed &amp; built by {profile.name} · © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
