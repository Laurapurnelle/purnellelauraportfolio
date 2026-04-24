import { FlowerSticker, Star, WavyDivider } from "./FlowerFrame";

export function About() {
  return (
    <>
      {/* Wavy divider going INTO the lime section */}
      <WavyDivider color="var(--lime)" />

      <section
        id="about"
        className="relative py-24 md:py-32 px-6 overflow-hidden"
        style={{ background: "var(--lime)", color: "var(--ink)" }}
      >
        {/* Sprinkled stars */}
        <Star color="var(--ink)" size={22} className="absolute top-16 left-[10%] -rotate-12" />
        <Star color="var(--lime)" size={18} className="absolute top-20 right-[15%]" />
        <Star color="var(--cream)" size={16} className="absolute bottom-24 left-[8%] rotate-12" />
        <Star color="var(--magenta)" size={26} className="absolute bottom-32 right-[12%]" />

        {/* Side stickers */}
        <FlowerSticker
          color="var(--magenta)"
          size={60}
          className="absolute top-12 right-[6%] hidden md:block rotate-12"
        />
        <FlowerSticker
          color="var(--lime)"
          size={48}
          className="absolute bottom-16 left-[6%] hidden md:block -rotate-6"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-6">
            <span
              className="inline-block text-xs font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border-brutal"
              style={{ background: "var(--cream)", color: "var(--ink)" }}
            >
              ★ 01 / À propos
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9]">
              Designer
              <br />
              <span style={{ color: "var(--magenta)" }}>qui aime</span>
              <br />
              le détail.
            </h2>
          </div>

          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
            <p>
              Étudiante en alternance en{" "}
              <span
                className="px-2 font-bold rounded-md inline-block -rotate-1"
                style={{ background: "var(--magenta)", color: "var(--cream)" }}
              >
                UI/UX Design à l'IFAPME Liège
              </span>{" "}
              (2025 → 2027), je conçois des expériences numériques où la
              stratégie de marque rencontre la logique d'usage.
            </p>
            <p style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}>
              Mon terrain de jeu : la recherche utilisateur, le prototypage
              haute fidélité et la direction artistique. J'aime quand un projet
              a du caractère — pas juste un beau pixel.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { num: "10+", label: "Projets", bg: "var(--cream)", txt: "var(--magenta)" },
                { num: "2027", label: "Diplôme", bg: "var(--lime)", txt: "var(--ink)" },
                { num: "Liège", label: "BE", bg: "var(--magenta)", txt: "var(--cream)" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border-brutal-thick p-4 hover-pop rounded-2xl"
                  style={{ background: s.bg, color: "var(--ink)" }}
                >
                  <p className="font-display text-3xl md:text-4xl" style={{ color: s.txt }}>
                    {s.num}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom marquee — cream on orange */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden border-t-[3px] border-foreground"
          style={{ background: "var(--cream)" }}
        >
          <div className="marquee-track flex whitespace-nowrap py-2 font-display uppercase text-sm">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center gap-6 px-4">
                {Array.from({ length: 8 }).map((__, j) => (
                  <span key={j} className="flex items-center gap-6">
                    UI Design
                    <Star color="var(--magenta)" size={14} />
                    UX Research
                    <Star color="var(--orange)" size={14} />
                    Brand
                    <Star color="var(--magenta)" size={14} />
                    Prototypage
                    <Star color="var(--orange)" size={14} />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      <WavyDivider color="var(--orange)" flip />
    </>
  );
}
