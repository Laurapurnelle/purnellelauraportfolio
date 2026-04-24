import { Link } from "@tanstack/react-router";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const others = [
  {
    title: "Bloom",
    category: "App mobile · Bien-être",
    year: "2024",
    image: p1,
    accent: "bg-yellow",
    rotate: "-rotate-1",
    tags: ["UX Research", "Mobile"],
  },
  {
    title: "Atelier Camélia",
    category: "E-shop · Bijouterie",
    year: "2024",
    image: p2,
    accent: "bg-violet",
    rotate: "rotate-1",
    tags: ["Webflow", "UI Design"],
  },
  {
    title: "Maison Lila",
    category: "Identité · Branding",
    year: "2024",
    image: p3,
    accent: "bg-foreground",
    rotate: "-rotate-1",
    tags: ["Branding", "Print"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-background relative">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-violet">
              02 / Sélection
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-3 leading-[0.9]">
              Projets qui
              <br />
              <span className="bg-yellow px-2 inline-block">claquent.</span>
            </h2>
          </div>
          <p className="text-foreground max-w-sm font-medium">
            Six projets récents — recherche, design d'interface et direction
            artistique.
          </p>
        </div>
      </div>

      {/* FOCUS PROJECT — The K'rousel */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="relative border-brutal-thick p-6 md:p-12 shadow-brutal-lg overflow-hidden" style={{ background: "var(--lime)" }}>
          <div className="absolute -top-5 -left-3 border-brutal-thick px-4 py-1.5 -rotate-3 shadow-brutal rounded-full" style={{ background: "var(--magenta)", color: "var(--cream)" }}>
            <span className="font-display text-xs uppercase tracking-widest">★ Featured Project</span>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-6 text-foreground">
              <div className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "var(--magenta)" }}>
                UI Design · Stratégie de contenu · 2025
              </div>
              <h3
                className="uppercase text-foreground"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 900,
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.02em",
                }}
              >
                The K'Rousel
              </h3>
              <p
                className="italic text-foreground/85"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)",
                  lineHeight: 1.2,
                }}
              >
                L'art de la friterie & l'élégance traiteur.
              </p>
              <p className="text-base leading-relaxed text-foreground/80 max-w-lg">
                Une identité hybride pour Kassandra Lorquet, ancrée à Liège — entre
                friterie itinérante et traiteur haut de gamme. Split screen diagonal
                à 15°, copywriting sourcé, savoir-faire assumé.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["UI Design", "Direction artistique", "Copywriting", "Branding"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-background text-foreground border-brutal"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/krousel"
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop mt-4 rounded-full"
                style={{ background: "var(--magenta)", color: "var(--cream)" }}
              >
                Découvrir l'étude de cas →
              </Link>
            </div>

            <div className="md:col-span-6 relative">
              <div className="relative bg-background border-brutal-thick overflow-hidden">
                <img
                  src={p1}
                  alt="Mockup principal de The K'Rousel"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="hidden md:block absolute -bottom-10 -right-6 w-48 bg-background border-brutal-thick rotate-6 shadow-brutal overflow-hidden">
                <img
                  src={p2}
                  alt="Vue secondaire"
                  width={400}
                  height={300}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of others */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h3 className="font-display text-3xl md:text-4xl uppercase">
            + Autres projets
          </h3>
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            03 → 06
          </span>
        </div>

        {/* Refonte de plateforme — wide */}
        <article className="bg-background border-brutal-thick mb-8 grid md:grid-cols-12 hover-pop">
          <div className="md:col-span-7 border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground bg-yellow p-8 flex flex-col justify-between min-h-[280px]">
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-foreground">
              UX · Architecture de l'information · 2025
            </div>
            <div>
              <h4 className="font-display text-4xl md:text-5xl uppercase leading-[0.9]">
                Refonte de
                <br />
                plateforme
              </h4>
              <p className="text-sm font-medium mt-4 max-w-md">
                Restructuration complète : optimisation de la hiérarchie,
                simplification des parcours et refonte du design system.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 p-6 flex items-center justify-center bg-background">
            <img
              src={p2}
              alt="Refonte de plateforme"
              width={500}
              height={400}
              loading="lazy"
              className="w-full h-auto object-cover border-brutal"
            />
          </div>
        </article>

        {/* Design publicitaire — wide */}
        <article className="bg-foreground text-background border-brutal-thick mb-12 grid md:grid-cols-12 hover-pop">
          <div className="md:col-span-5 p-6 flex items-center justify-center bg-violet border-r-[3px] border-foreground">
            <img
              src={p3}
              alt="Design publicitaire"
              width={500}
              height={400}
              loading="lazy"
              className="w-full h-auto object-cover border-brutal"
            />
          </div>
          <div className="md:col-span-7 p-8 flex flex-col justify-between min-h-[280px]">
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-yellow">
              Direction artistique · Print · 2024
            </div>
            <div>
              <h4 className="font-display text-4xl md:text-5xl uppercase leading-[0.9]">
                Design
                <br />
                publicitaire
              </h4>
              <p className="text-sm font-medium mt-4 max-w-md text-background/85">
                Série d'affiches synthétisant des messages de marque
                percutants — typographie forte, palette maîtrisée.
              </p>
            </div>
          </div>
        </article>

        {/* Dynamic 3-grid: Bloom, Camélia, Lila */}
        <div className="grid md:grid-cols-3 gap-8">
          {others.map((p) => (
            <article
              key={p.title}
              className={`bg-background border-brutal-thick hover-pop ${p.rotate}`}
            >
              <div className={`${p.accent} border-b-[3px] border-foreground p-3`}>
                <img
                  src={p.image}
                  alt={p.title}
                  width={500}
                  height={400}
                  loading="lazy"
                  className="w-full h-48 object-cover border-brutal"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span>{p.category}</span>
                  <span className="text-muted-foreground">{p.year}</span>
                </div>
                <h4 className="font-display text-2xl uppercase">{p.title}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-secondary border border-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
