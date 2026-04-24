export function About() {
  return (
    <section id="about" className="relative py-32 px-6 bg-foreground text-background overflow-hidden">
      {/* Marquee strip */}
      <div className="absolute top-0 left-0 right-0 bg-[var(--lime)] border-b-[3px] border-foreground overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap py-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-3 text-foreground font-display uppercase text-sm">
              {Array.from({ length: 8 }).map((__, j) => (
                <span key={j} className="flex items-center gap-6">
                  UI Design
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  UX Research
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  Brand
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  Prototypage
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start mt-12">
        <div className="md:col-span-5 space-y-6">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-yellow">
            01 / À propos
          </span>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9]">
            Designer
            <br />
            <span className="text-violet">qui aime</span>
            <br />
            le détail.
          </h2>
        </div>

        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>
            Étudiante en alternance en{" "}
            <span className="bg-violet text-primary-foreground px-1.5 font-bold">
              UI/UX Design à l'IFAPME Liège
            </span>{" "}
            (2025 → 2027), je conçois des expériences numériques où la
            stratégie de marque rencontre la logique d'usage.
          </p>
          <p className="text-background/80">
            Mon terrain de jeu : la recherche utilisateur, le prototypage
            haute fidélité et la direction artistique. J'aime quand un projet
            a du caractère — pas juste un beau pixel.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-8">
            {[
              { num: "10+", label: "Projets" },
              { num: "2027", label: "Diplôme" },
              { num: "Liège", label: "BE" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-background text-foreground border-brutal-thick p-4 hover-pop"
              >
                <p className="font-display text-3xl md:text-4xl text-violet">{s.num}</p>
                <p className="text-xs font-bold uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
