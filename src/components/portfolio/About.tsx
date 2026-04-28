import { useState, useEffect, useRef } from "react";
import { FlowerSticker, Star, WavyDivider } from "./FlowerFrame";

const stats = [
  { num: "2027", label: "Diplôme UX/UI", bg: "var(--cream)", txt: "var(--magenta)" },
  { num: "FR · EN", label: "Langues", bg: "var(--magenta)", txt: "var(--cream)" },
  { num: "Liège", label: "& alentours", bg: "var(--orange)", txt: "var(--cream)" },
];

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <WavyDivider color="var(--lime)" />

      <section
        id="about"
        className="relative py-24 md:py-32 px-6 overflow-hidden"
        style={{ background: "var(--lime)", color: "var(--ink)" }}
      >
        {/* Sprinkled stars */}
        <Star color="var(--ink)" size={22} className="absolute top-16 left-[10%] -rotate-12" />
        <Star color="var(--magenta)" size={18} className="absolute top-20 right-[15%]" />
        <Star color="var(--ink)" size={16} className="absolute bottom-24 left-[8%] rotate-12" />
        <Star color="var(--magenta)" size={26} className="absolute bottom-32 right-[12%]" />

        <FlowerSticker color="var(--magenta)" size={60} className="absolute top-12 right-[6%] hidden md:block rotate-12" />
        <FlowerSticker color="var(--lime)" size={48} className="absolute bottom-16 left-[6%] hidden md:block -rotate-6" />

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
              (2025 · 2027), je conçois des expériences numériques où la
              stratégie de marque rencontre la logique d'usage.
            </p>
            <p style={{ color: "color-mix(in oklab, var(--ink) 75%, transparent)" }}>
              Mon terrain de jeu : la recherche utilisateur, le prototypage
              haute fidélité et la direction artistique. J'aime quand un projet
              a du caractère, pas juste un beau pixel. Ouverte à l'alternance
              à Liège et aux opportunités à distance, je cherche à collaborer
              avec des équipes qui croient que le design peut vraiment changer
              les choses.
            </p>

            {/* Animated stat pills */}
            <div ref={statsRef} className="grid grid-cols-3 gap-3 pt-8">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="border-brutal-thick p-3 md:p-4 blob-flower"
                  style={{
                    background: s.bg,
                    color: "var(--ink)",
                    transition: "opacity 0.55s ease, transform 0.55s ease",
                    transitionDelay: `${i * 130}ms`,
                    opacity: statsVisible ? 1 : 0,
                    transform: statsVisible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
                  }}
                >
                  <p
                    className="font-display text-lg sm:text-2xl md:text-3xl leading-none"
                    style={{ color: s.txt }}
                  >
                    {s.num}
                  </p>
                  <p className="text-[9px] sm:text-xs font-bold uppercase tracking-wider mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div
          aria-hidden="true"
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

      <WavyDivider color="var(--lime)" flip />
    </>
  );
}
