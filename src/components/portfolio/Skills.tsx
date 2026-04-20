import { useState } from "react";

type Tag = { label: string; variant: "violet" | "yellow" | "ink" | "outline" };

const tags: Tag[] = [
  { label: "UI Design", variant: "violet" },
  { label: "UX Research", variant: "ink" },
  { label: "Wireframing", variant: "outline" },
  { label: "Prototypage HF", variant: "yellow" },
  { label: "Design System", variant: "violet" },
  { label: "Figma", variant: "ink" },
  { label: "Adobe XD", variant: "outline" },
  { label: "Illustrator", variant: "yellow" },
  { label: "Photoshop", variant: "outline" },
  { label: "InDesign", variant: "violet" },
  { label: "Webflow", variant: "ink" },
  { label: "Framer", variant: "yellow" },
  { label: "HTML / CSS", variant: "outline" },
  { label: "Design Thinking", variant: "violet" },
  { label: "Tests utilisateurs", variant: "ink" },
  { label: "WCAG · A11y", variant: "yellow" },
  { label: "Atomic Design", variant: "outline" },
  { label: "Direction artistique", variant: "violet" },
  { label: "Mise en page éditoriale", variant: "ink" },
  { label: "Branding", variant: "yellow" },
];

const variantClasses: Record<Tag["variant"], string> = {
  violet: "bg-violet text-primary-foreground",
  yellow: "bg-yellow text-foreground",
  ink: "bg-foreground text-background",
  outline: "bg-background text-foreground",
};

export function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-12 w-20 h-20 bg-yellow border-brutal-thick rotate-12 hidden md:block" />
      <div className="absolute bottom-20 left-12 w-12 h-12 bg-violet border-brutal-thick rounded-full hidden md:block" />

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
