import { Link } from "@tanstack/react-router";
import p1 from "@/assets/projet-1.jpg";
import p2 from "@/assets/projet-2.jpg";
import p3 from "@/assets/project-3.jpg";
import krouselSplit from "@/assets/krousel-split.png";
import krouselTraiteurMockup from "@/assets/krousel-traiteur-mockup.png";

type OtherProject = {
  title: string;
  href?: "/projets/showshanks" | "/projets/festi-safe";
  category: string;
  year: string;
  image: string;
  accentClass: string;
  tags: string[];
};

const others: OtherProject[] = [
  {
    title: "ShowShanks",
    href: "/projets/showshanks",
    category: "Direction artistique · 2025",
    year: "2025",
    image: p1,
    accentClass: "bg-foreground",
    tags: ["Direction artistique", "Typographie", "Print"],
  },
  {
    title: "Festi'Safe",
    href: "/projets/festi-safe",
    category: "Événementiel · 2025",
    year: "2025",
    image: p2,
    accentClass: "bg-[var(--magenta)]",
    tags: ["Branding", "Identité visuelle", "Affiche"],
  },
  {
    title: "Ce Portfolio",
    category: "HTML/CSS · GitHub Pages · 2025",
    year: "2025",
    image: p3,
    accentClass: "bg-[var(--lime)]",
    tags: ["HTML · CSS", "GitHub Pages", "React"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden" style={{ background: "var(--cream)" }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span
              className="inline-block text-xs font-bold tracking-[0.3em] uppercase px-3 py-1.5 border-brutal-thick rounded-full mb-4"
              style={{ background: "var(--magenta)", color: "var(--cream)" }}
            >
              ★ 02 / Sélection
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-3 leading-[0.9]">
              Projets qui
              <br />
              <span className="px-3 inline-block rounded-full -rotate-1" style={{ background: "var(--lime)" }}>claquent.</span>
            </h2>
          </div>
          <p className="text-foreground max-w-sm font-medium">
            Six projets récents : recherche, design d'interface et direction
            artistique.
          </p>
        </div>
      </div>

      {/* FOCUS PROJECT — The K'rousel */}
      <div className="max-w-7xl mx-auto mb-32">
        <Link
          to="/krousel"
          className="block relative border-brutal-thick p-6 pt-10 md:p-12 md:pt-14 shadow-brutal-lg overflow-visible hover-pop cursor-pointer"
          style={{ background: "var(--lavender)" }}
        >
          <div
            className="absolute -top-5 right-3 md:-top-6 md:right-6 border-brutal-thick px-4 py-1.5 rotate-3 shadow-brutal rounded-full z-20"
            style={{ background: "var(--magenta)", color: "var(--cream)" }}
          >
            <span className="font-display text-xs uppercase tracking-widest whitespace-nowrap">★ Featured Project</span>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-6 text-foreground">
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-foreground/70">
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
                Une identité hybride pour Kassandra Lorquet, ancrée à Liège,
                entre friterie itinérante et traiteur haut de gamme. Split screen diagonal
                à 15°, copywriting sourcé, savoir-faire assumé.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["UI Design", "Branding", "Lovable", "Copywriting", "Direction artistique"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-background text-foreground border border-foreground/40 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest border-brutal-thick rounded-full mt-4"
                style={{ background: "var(--magenta)", color: "var(--cream)" }}
              >
                Découvrir l'étude de cas →
              </div>
            </div>

            <div className="md:col-span-6 relative">
              <div
                className="relative bg-background border-brutal-square overflow-hidden shadow-brutal"
                style={{ borderRadius: "62% 38% 55% 45% / 50% 60% 40% 50%" }}
              >
                <img
                  src={krouselSplit}
                  alt="Split screen diagonal du site The K'Rousel"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div
                className="hidden md:block absolute -bottom-8 -right-4 w-44 bg-background border-brutal-square rotate-6 shadow-brutal overflow-hidden"
                style={{ borderRadius: "55% 45% 40% 60% / 45% 60% 40% 55%" }}
              >
                <img
                  src={krouselTraiteurMockup}
                  alt="Mockup section traiteur"
                  width={400}
                  height={300}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* PTB + Autres projets */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h3 className="font-display text-3xl md:text-4xl uppercase">
            + Autres projets
          </h3>
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            02 → 05
          </span>
        </div>

        {/* PTB */}
        <Link
          to="/projets/ptb"
          className="block border-brutal-thick mb-6 overflow-hidden hover-pop cursor-pointer"
          style={{ background: "var(--background)" }}
        >
          <div className="flex flex-col md:flex-row min-h-[220px]">
            <div
              className="md:w-2/5 shrink-0 border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground p-8 flex flex-col justify-between"
              style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
            >
              <div className="text-xs font-bold tracking-[0.3em] uppercase" style={{ opacity: 0.9 }}>
                UX Mobile-first · Engagement civique · 2025
              </div>
              <div>
                <h4 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.9]">
                  PTB : Digitaliser
                  <br />
                  l'activisme
                </h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["UX Strategy", "Figma", "Accessibilité", "Mobile-first"].map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.4)]"
                      style={{ color: "var(--cream)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="inline-flex items-center gap-2 mt-5 px-5 py-3 text-xs font-bold uppercase tracking-widest border-brutal-thick rounded-full"
                  style={{ background: "var(--cream)", color: "var(--ptb-red)" }}
                >
                  Voir l'étude de cas →
                </div>
              </div>
            </div>
            <div className="md:col-span-5 p-6 flex items-center justify-center bg-background">
              <div
                className="relative w-full aspect-[4/5] max-w-[200px] border-brutal-square shadow-brutal flex items-center justify-center"
                style={{ background: "var(--ptb-red)", borderRadius: "58% 42% 50% 50% / 45% 55% 45% 55%" }}
              >
                <span className="font-display text-7xl md:text-8xl" style={{ color: "var(--cream)" }}>★</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Landscape banners — ShowShanks, Festi'Safe, Ce Portfolio */}
        <div className="space-y-5">
          {others.map((p, i) => {
            const rotate = i === 1 ? "rotate-[0.4deg]" : i === 2 ? "-rotate-[0.4deg]" : "";

            const inner = (
              <div className="flex flex-col sm:flex-row overflow-hidden" style={{ minHeight: "200px" }}>
                {/* Image */}
                <div
                  className={`sm:w-[38%] shrink-0 border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-foreground ${p.accentClass} overflow-hidden`}
                  style={{ minHeight: "180px" }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    style={{ minHeight: "180px" }}
                    loading="lazy"
                  />
                </div>
                {/* Text */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {p.category}
                    </div>
                    <h4 className="font-display text-3xl md:text-4xl uppercase">{p.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-secondary border border-foreground/40 rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {p.href && (
                    <div
                      className="text-sm font-bold uppercase tracking-widest mt-4"
                      style={{ color: "var(--magenta)" }}
                    >
                      Voir le projet →
                    </div>
                  )}
                </div>
              </div>
            );

            return p.href ? (
              <Link
                key={p.title}
                to={p.href}
                className={`block border-brutal-thick hover-pop cursor-pointer overflow-hidden ${rotate}`}
                style={{ background: "var(--background)" }}
              >
                {inner}
              </Link>
            ) : (
              <article
                key={p.title}
                className={`border-brutal-thick overflow-hidden ${rotate}`}
                style={{ background: "var(--background)" }}
              >
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
