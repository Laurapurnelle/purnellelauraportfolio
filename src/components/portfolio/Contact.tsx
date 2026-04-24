export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 bg-violet text-primary-foreground overflow-hidden border-t-[3px] border-foreground"
    >
      {/* Decorative blob shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--lime)] border-brutal-thick blob-1" />
      <div className="absolute bottom-1/3 left-8 w-20 h-20 bg-[var(--orange)] border-brutal-thick blob-flower hidden md:block" />
      <div className="absolute top-1/2 right-1/4 w-14 h-14 bg-[var(--lavender)] border-brutal blob-2 hidden lg:block" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase bg-yellow text-foreground border-brutal px-3 py-1.5">
            04 / Contact
          </span>
          <p className="text-lg md:text-xl font-medium max-w-xl mx-auto pt-4">
            Un projet d'interface, une refonte ou une identité ?
            <br />
            Réponse sous 48h, promis.
          </p>
        </div>

        {/* Giant typography button */}
        <a
          href="mailto:hello@laurapurnelle.be"
          aria-label="Envoyer un email à Laura Purnelle"
          className="group block text-center my-8"
        >
          <span className="font-display uppercase leading-[0.85] tracking-tighter block text-[clamp(3rem,15vw,12rem)] text-primary-foreground transition-colors group-hover:text-yellow">
            Travaillons
          </span>
          <span className="font-display uppercase leading-[0.85] tracking-tighter block text-[clamp(3rem,15vw,12rem)] -mt-2 md:-mt-4">
            <span className="bg-yellow text-foreground px-3 md:px-6 inline-block border-brutal-thick shadow-brutal group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform">
              ensemble
            </span>
            <span className="text-yellow group-hover:text-primary-foreground transition-colors">.</span>
          </span>
        </a>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="mailto:hello@laurapurnelle.be"
            className="inline-flex items-center gap-2 px-6 py-4 bg-background text-foreground text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop"
          >
            hello@laurapurnelle.be →
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-foreground text-background text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-20 pt-8 border-t-[3px] border-foreground flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Laura Purnelle</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">
              LinkedIn
            </a>
            <span className="w-1 h-1 bg-primary-foreground rounded-full" />
            <a href="#" className="hover:text-yellow transition-colors">Behance</a>
            <span className="w-1 h-1 bg-primary-foreground rounded-full" />
            <a href="#" className="hover:text-yellow transition-colors">Dribbble</a>
          </div>
          <p>IFAPME Liège · 2025—2027</p>
        </div>
      </div>
    </section>
  );
}
