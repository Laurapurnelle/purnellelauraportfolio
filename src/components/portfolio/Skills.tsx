const groups = [
  {
    title: "Design",
    items: ["UI Design", "UX Research", "Wireframing", "Prototypage haute fidélité", "Design System"],
  },
  {
    title: "Outils",
    items: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "InDesign"],
  },
  {
    title: "Méthodes",
    items: ["Design Thinking", "Tests utilisateurs", "Accessibilité (WCAG)", "Atomic Design"],
  },
  {
    title: "Web & Print",
    items: ["HTML / CSS", "Webflow", "Framer", "Direction artistique", "Mise en page éditoriale"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-medium">
            03 — Compétences
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Une boîte à outils <span className="italic text-gradient">rigoureuse</span>
          </h2>
          <p className="text-muted-foreground">
            Des compétences techniques au service d'idées claires et de
            produits utiles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group p-8 rounded-xl bg-card border border-border/60 shadow-card hover:shadow-glow transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-md bg-gradient-accent mb-6 opacity-90 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {g.title}
              </h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
