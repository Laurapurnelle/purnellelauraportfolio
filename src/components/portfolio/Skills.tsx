const groups = [
  {
    title: "Design",
    items: ["UI Design", "UX Research", "Wireframing", "Prototypage", "Design System"],
  },
  {
    title: "Outils",
    items: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Notion"],
  },
  {
    title: "Méthodes",
    items: ["Design Thinking", "Tests utilisateurs", "Accessibilité", "Atomic Design"],
  },
  {
    title: "Web",
    items: ["HTML / CSS", "Webflow", "Framer", "Notions de React"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-sm tracking-widest uppercase text-primary/80">
            03 — Compétences
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Une boîte à outils <span className="italic text-gradient">soignée</span>
          </h2>
          <p className="text-muted-foreground">
            Des compétences techniques au service d'idées sensibles et de
            produits utiles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group p-8 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-accent mb-6 opacity-90 group-hover:scale-110 transition-transform" />
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
