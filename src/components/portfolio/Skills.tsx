import { useState } from "react";
import { FlowerSticker, Star } from "./FlowerFrame";

type Tag = { label: string; variant: "magenta" | "lime" | "orange" | "lavender" | "ink" | "outline" };

const tags: Tag[] = [
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
            Survole, clique, joue. Les outils du quotidien.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {tags.map((t, i) => {
            const isActive = active === t.label;
            const baseRot = i % 4 === 0 ? "-rotate-2" : i % 4 === 2 ? "rotate-2" : "";
            return (
              <button
                key={t.label}
                onClick={() => setActive(isActive ? null : t.label)}
                onMouseEnter={() => setActive(t.label)}
                onMouseLeave={() => setActive(null)}
                className={`${variantClasses[t.variant]} ${baseRot} border-brutal-thick px-5 py-3 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-150 ${
                  isActive
                    ? "translate-x-[-3px] translate-y-[-3px] shadow-brutal"
                    : ""
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
