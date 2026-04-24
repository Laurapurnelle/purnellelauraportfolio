import { useState } from "react";
import { FlowerSticker, Star } from "./FlowerFrame";

type Tag = { label: string; variant: "magenta" | "lime" | "orange" | "lavender" | "ink" | "outline" };

// Soft / méthodo — réellement abordés en formation UX/UI
const skills: Tag[] = [
  { label: "UI Design", variant: "magenta" },
  { label: "UX Research", variant: "ink" },
  { label: "Wireframing", variant: "outline" },
  { label: "Prototypage HF", variant: "lime" },
  { label: "Design System", variant: "orange" },
  { label: "Figma", variant: "ink" },
  { label: "Adobe XD", variant: "lavender" },
  { label: "Illustrator", variant: "lime" },
  { label: "Photoshop", variant: "outline" },
  { label: "InDesign", variant: "magenta" },
  { label: "Webflow", variant: "ink" },
  { label: "Framer", variant: "orange" },
  { label: "HTML / CSS", variant: "lavender" },
  { label: "Design Thinking", variant: "magenta" },
  { label: "Tests utilisateurs", variant: "ink" },
  { label: "WCAG · A11y", variant: "lime" },
  { label: "Atomic Design", variant: "outline" },
  { label: "Direction artistique", variant: "orange" },
  { label: "Mise en page éditoriale", variant: "ink" },
  { label: "Branding", variant: "lavender" },
];

// Outils — niveaux issus du CV
type Software = { name: string; level: number; color: string };
const softwares: Software[] = [
  { name: "Figma", level: 4, color: "var(--magenta)" },
  { name: "Adobe Illustrator", level: 4, color: "var(--orange)" },
  { name: "Adobe Photoshop", level: 3, color: "var(--lime)" },
  { name: "Google AI Essentials", level: 4, color: "var(--lavender)" },
];

const variantClasses: Record<Tag["variant"], string> = {
  magenta: "bg-[var(--magenta)] text-[var(--cream)]",
  lime: "bg-[var(--lime)] text-foreground",
  orange: "bg-[var(--orange)] text-[var(--cream)]",
  lavender: "bg-[var(--lavender)] text-foreground",
  ink: "bg-foreground text-background",
  outline: "bg-background text-foreground",
};

export function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative blobs, flowers & stars */}
      <div className="absolute top-20 right-12 w-32 h-32 border-brutal-thick blob-1 hidden md:block" style={{ background: "var(--lime)" }} />
      <div className="absolute bottom-20 left-12 w-24 h-24 border-brutal-thick blob-flower hidden md:block" style={{ background: "var(--magenta)" }} />
      <FlowerSticker color="var(--orange)" size={64} className="absolute top-1/3 left-[5%] hidden md:block -rotate-12" />
      <FlowerSticker color="var(--magenta)" size={48} className="absolute bottom-1/3 right-[6%] hidden md:block rotate-6" />
      <Star color="var(--orange)" size={26} className="absolute top-12 left-1/3 -rotate-12" />
      <Star color="var(--magenta)" size={20} className="absolute bottom-12 right-1/4" />
      <Star color="var(--lime)" size={18} className="absolute top-1/2 right-12 hidden lg:block" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-violet">
            03 / Compétences
          </span>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9]">
            Stack &
            <br />
            <span className="text-violet">savoir-faire</span>
          </h2>
          <p className="text-foreground font-medium pt-2">
            Méthodes apprises à l'IFAPME · outils en progression continue.
          </p>
        </div>

        {/* Méthodes / savoir-faire */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20">
          {skills.map((t, i) => {
            const isActive = active === t.label;
            const baseRot = i % 4 === 0 ? "-rotate-2" : i % 4 === 2 ? "rotate-2" : "";
            return (
              <button
                key={t.label}
                onClick={() => setActive(isActive ? null : t.label)}
                onMouseEnter={() => setActive(t.label)}
                onMouseLeave={() => setActive(null)}
                className={`${variantClasses[t.variant]} ${baseRot} border-brutal-thick px-5 py-3 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-150 rounded-full ${
                  isActive ? "translate-x-[-3px] translate-y-[-3px] shadow-brutal" : ""
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Outils avec niveaux */}
        <div className="border-brutal-thick rounded-3xl p-6 md:p-10 shadow-brutal" style={{ background: "var(--cream)" }}>
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <h3 className="font-display text-2xl md:text-3xl uppercase">Outils ★</h3>
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">
              Niveau actuel — 2025
            </span>
          </div>
          <ul className="space-y-5">
            {softwares.map((s) => (
              <li key={s.name} className="flex items-center gap-4">
                <span className="font-bold uppercase tracking-wider text-sm md:text-base flex-1 min-w-0 truncate">
                  {s.name}
                </span>
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 rounded-full border-[2px] border-foreground"
                      style={{
                        background: i < s.level ? s.color : "transparent",
                      }}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs italic opacity-70">
            En formation continue · IFAPME Château Massart 2025—2027
          </p>
        </div>
      </div>
    </section>
  );
}
