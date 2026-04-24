import { FlowerSticker, Star, WavyDivider } from "./FlowerFrame";

type Item = {
  date: string;
  title: string;
  org: string;
  desc: string;
  color: string;
  textColor?: string;
};

const formation: Item[] = [
  {
    date: "2025 — 2027",
    title: "Formation UX/UI Design",
    org: "IFAPME · Château Massart",
    desc: "Alternance — Recherche utilisateur, prototypage, design system, accessibilité.",
    color: "var(--magenta)",
    textColor: "var(--cream)",
  },
  {
    date: "2025",
    title: "Foundations of User Experience",
    org: "Google Career Certificate",
    desc: "Bases du design centré utilisateur, méthodologie UX.",
    color: "var(--lime)",
  },
  {
    date: "2025",
    title: "Google AI Essentials",
    org: "Google Career Certificate",
    desc: "Maîtrise et bonne gestion des outils IA dans un workflow design.",
    color: "var(--lavender)",
  },
  {
    date: "2019",
    title: "Certificat d'Étude Secondaire",
    org: "Institut de la Providence — Herve",
    desc: "Enseignement secondaire général.",
    color: "var(--orange)",
    textColor: "var(--cream)",
  },
];

const experiences: Item[] = [
  {
    date: "2025",
    title: "Vendeuse en boulangerie",
    org: "Le Matin Hutois",
    desc: "Conseil et service client, maintien d'un espace de vente accueillant et soigné.",
    color: "var(--lime)",
  },
  {
    date: "2024",
    title: "Vendeuse",
    org: "Hangar 86",
    desc: "Conseil client, mise en valeur des produits et observation des besoins.",
    color: "var(--orange)",
    textColor: "var(--cream)",
  },
  {
    date: "2023 — 2024",
    title: "Employée administrative",
    org: "Carrefour",
    desc: "Gestion de dossiers, encodage de données et coordination entre services.",
    color: "var(--magenta)",
    textColor: "var(--cream)",
  },
];

function TimelineCard({ item, index }: { item: Item; index: number }) {
  const rot = index % 2 === 0 ? "-rotate-1" : "rotate-1";
  return (
    <article
      className={`border-brutal-thick rounded-3xl p-5 md:p-6 shadow-brutal hover-pop ${rot}`}
      style={{ background: item.color, color: item.textColor ?? "var(--ink)" }}
    >
      <span className="inline-block text-[10px] md:text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-background text-foreground border-brutal mb-3">
        {item.date}
      </span>
      <h4 className="font-display uppercase text-xl md:text-2xl leading-tight">
        {item.title}
      </h4>
      <p className="text-sm font-bold uppercase tracking-wide opacity-80 mt-1">
        {item.org}
      </p>
      <p className="text-sm md:text-base mt-3 leading-relaxed">{item.desc}</p>
    </article>
  );
}

export function Journey() {
  return (
    <>
      <WavyDivider color="var(--cream)" />
      <section
        id="parcours"
        className="relative py-24 md:py-32 px-6 overflow-hidden"
        style={{ background: "var(--cream)", color: "var(--ink)" }}
      >
        {/* Decor */}
        <FlowerSticker color="var(--magenta)" size={64} className="absolute top-16 left-[5%] hidden md:block -rotate-12" />
        <FlowerSticker color="var(--lime)" size={52} className="absolute bottom-24 right-[6%] hidden md:block rotate-6" />
        <Star color="var(--orange)" size={24} className="absolute top-32 right-[12%]" />
        <Star color="var(--magenta)" size={20} className="absolute bottom-20 left-[12%] rotate-12" />
        <div
          className="absolute top-1/2 -left-12 w-32 h-32 border-brutal-thick blob-1 hidden md:block opacity-90"
          style={{ background: "var(--lavender)" }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span
              className="inline-block text-xs font-bold tracking-[0.3em] uppercase border-brutal px-4 py-2 rounded-full"
              style={{ background: "var(--magenta)", color: "var(--cream)" }}
            >
              ★ 04 / Parcours ★
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9]">
              D'où je
              <br />
              <span style={{ color: "var(--magenta)" }}>viens.</span>
            </h2>
            <p className="text-base md:text-lg font-medium pt-2 opacity-80">
              Une trajectoire qui mêle terrain, sens du service et passion du design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Formation */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-2xl md:text-3xl uppercase">
                  Formation
                </span>
                <span className="flex-1 h-[3px] bg-foreground" />
                <Star color="var(--magenta)" size={22} />
              </div>
              <div className="space-y-5">
                {formation.map((item, i) => (
                  <TimelineCard key={item.title} item={item} index={i} />
                ))}
              </div>
            </div>

            {/* Expériences */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-2xl md:text-3xl uppercase">
                  Expériences
                </span>
                <span className="flex-1 h-[3px] bg-foreground" />
                <Star color="var(--orange)" size={22} />
              </div>
              <div className="space-y-5">
                {experiences.map((item, i) => (
                  <TimelineCard key={item.title} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Langues */}
          <div className="mt-20 border-brutal-thick rounded-3xl p-6 md:p-8 shadow-brutal max-w-2xl mx-auto" style={{ background: "var(--background)" }}>
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <h3 className="font-display text-2xl uppercase">Langues</h3>
              <Star color="var(--magenta)" size={18} />
            </div>
            <ul className="space-y-4">
              {[
                { lang: "Français", level: 100, color: "var(--magenta)" },
                { lang: "Anglais", level: 55, color: "var(--lime)" },
              ].map((l) => (
                <li key={l.lang}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold uppercase tracking-wider text-sm">
                      {l.lang}
                    </span>
                    <span className="text-xs font-bold uppercase opacity-70">
                      {l.level === 100 ? "Natif" : "Intermédiaire"}
                    </span>
                  </div>
                  <div className="h-3 border-brutal rounded-full overflow-hidden bg-background">
                    <div
                      className="h-full"
                      style={{ width: `${l.level}%`, background: l.color }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
