import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Skills" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between bg-background border-brutal-thick rounded-full ${
          scrolled ? "shadow-brutal" : ""
        } px-5 py-3 transition-shadow`}
      >
        <a
          href="#hero"
          className="font-display text-xl md:text-2xl tracking-tight text-foreground flex items-center gap-1"
        >
          LAURA
          <span
            className="inline-block w-2.5 h-2.5 ml-0.5 rounded-full"
            style={{ background: "var(--magenta)" }}
          />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-[var(--magenta)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold uppercase tracking-wider border-brutal hover-pop rounded-full"
          style={{ background: "var(--magenta)", color: "var(--cream)" }}
        >
          Contact →
        </a>
      </nav>
    </header>
  );
}
