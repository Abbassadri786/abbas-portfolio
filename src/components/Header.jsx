import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function Header({ profile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const close = () => setMenuOpen(false);
  return (
    <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
      <div className="topbar-inner">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark">AS</span>
          <span className="brand-word">ABBAS SADRIWALA</span>
        </a>
        <nav
          className={`nav ${menuOpen ? "nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {["about", "projects", "skills", "journey", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={close}>
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={22} />
        </button>
      </div>
    </header>
  );
}
