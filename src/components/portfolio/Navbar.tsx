import { useState, useEffect, useCallback } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Skills" },
  { href: "#parcours", label: "Parcours" },
];

function WipBanner() {
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(false);

  const dismiss = useCallback(() => {
    setClosing(true);
    setTimeout(() => setGone(true), 360);
  }, []);

  useEffect(() => {
    const t = setTimeout(dismiss, 5500);
    return () => clearTimeout(t);
  }, [dismiss]);

  if (gone) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        overflow: "hidden",
        maxHeight: closing ? 0 : "5rem",
        opacity: closing ? 0 : 1,
        transition: "max-height 0.36s ease, opacity 0.25s ease",
      }}
    >
      <div
        className="flex items-center justify-between gap-2 px-4 py-2 border-b-[3px] border-foreground text-[10px] sm:text-xs font-bold uppercase tracking-widest"
        style={{ background: "var(--orange)", color: "var(--cream)" }}
      >
        <div className="flex-1 text-center leading-snug">
          <span className="sm:hidden">✦ Portfolio en cours de création ✦</span>
          <span className="hidden sm:inline">✦ Portfolio en cours de création · Pas le résultat final ✦</span>
        </div>
        <button
          onClick={dismiss}
          aria-label="Fermer la bannière"
          className="shrink-0 w-6 h-6 flex items-center justify-center border-[2px] border-[var(--cream)] rounded-full hover:bg-[var(--cream)] hover:text-[var(--orange)] transition-colors text-[10px]"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <WipBanner />
      <div
        className={`transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}
      >
        <nav
          aria-label="Navigation principale"
          className={`max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between bg-background border-brutal-thick rounded-full px-5 py-3 transition-shadow ${
            scrolled ? "shadow-brutal" : ""
          }`}
        >
          <a
            href="#hero"
            className="font-display text-xl md:text-2xl tracking-tight text-foreground flex items-center gap-1"
          >
            LAURA
            <span
              aria-hidden="true"
              className="inline-block w-2.5 h-2.5 ml-0.5 rounded-full"
              style={{ background: "var(--magenta)" }}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
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

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold uppercase tracking-wider border-brutal hover-pop rounded-full"
            style={{ background: "var(--magenta)", color: "var(--cream)" }}
          >
            Contact →
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 min-w-[44px] min-h-[44px] px-3 border-brutal-thick rounded-full cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            style={{ background: mobileOpen ? "var(--magenta)" : "var(--background)" }}
          >
            <span className="block w-5 h-[2px] transition-all duration-200" style={{ background: mobileOpen ? "var(--cream)" : "var(--foreground)", transform: mobileOpen ? "rotate(45deg) translateY(7px)" : undefined }} />
            <span className="block w-5 h-[2px] transition-all duration-200" style={{ background: mobileOpen ? "var(--cream)" : "var(--foreground)", opacity: mobileOpen ? 0 : 1 }} />
            <span className="block w-5 h-[2px] transition-all duration-200" style={{ background: mobileOpen ? "var(--cream)" : "var(--foreground)", transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : undefined }} />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden max-w-6xl mx-auto mt-1 px-4">
          <div className="bg-background border-brutal-thick rounded-3xl p-4 shadow-brutal">
            <ul className="flex flex-col gap-1" role="list">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={closeMobile}
                    className="block py-3 px-4 text-sm font-bold uppercase tracking-wider text-foreground rounded-2xl transition-colors hover:text-[var(--magenta)] hover:bg-[var(--lime)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="block py-3 px-4 text-sm font-bold uppercase tracking-wider text-center border-brutal rounded-full"
                  style={{ background: "var(--magenta)", color: "var(--cream)" }}
                >
                  Contact →
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
