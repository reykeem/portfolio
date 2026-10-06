import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/content";
import { useHideOnScroll } from "../hooks/useScrollDirection";

type HeaderProps = {
  items: { label: string; href: string }[];
};

export default function Header({ items }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hidden = useHideOnScroll();

  // Lock page scroll behind the mobile menu and let Escape close it.
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Close the menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${hidden && !menuOpen ? "is-hidden" : ""}`}>
        <div className="container header-inner">
          <a href="#top" className="logo" aria-label={`${profile.name}, back to top`} onClick={close}>
            RK
          </a>

          <nav aria-label="Primary" className="desktop-nav">
            <ol>
              {items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ol>
            <a
              className="button button-outline button-sm"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Résumé
            </a>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Sibling of <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} hidden={!menuOpen}>
        <nav aria-label="Mobile">
          <ol>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
          <a
            className="button button-outline"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            Résumé
          </a>
        </nav>
      </div>
    </>
  );
}
