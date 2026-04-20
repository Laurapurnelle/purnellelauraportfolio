import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "The Carrousel",
    category: "UI Design · Stratégie de contenu",
    year: "2025",
    description:
      "Conception d'une interface dynamique de carrousel éditorial, pensée pour mettre en valeur le contenu et fluidifier la navigation entre formats variés.",
    image: p1,
    tags: ["UI Design", "Prototypage", "Contenu"],
  },
  {
    title: "Refonte de plateforme",
    category: "UX · Architecture de l'information",
    year: "2025",
    description:
      "Restructuration complète d'une plateforme web : optimisation de la hiérarchie, simplification des parcours utilisateurs et refonte du design system.",
    image: p2,
    tags: ["UX Research", "Wireframing", "Design System"],
  },
  {
    title: "Design publicitaire",
    category: "Direction artistique · Print",
    year: "2024",
    description:
      "Création d'une série d'affiches synthétisant des messages de marque percutants, à travers une typographie forte et une palette graphique maîtrisée.",
    image: p3,
    tags: ["Affiche", "Typographie", "Branding"],
  },
  {
    title: "Bloom — App de bien-être",
    category: "UI/UX · Mobile",
    year: "2024",
    description:
      "Application mobile accompagnant le quotidien de ses utilisateur·rice·s : rituels personnalisés, journal d'émotions et suivi d'objectifs.",
    image: p1,
    tags: ["UX Research", "Mobile", "Prototypage"],
  },
  {
    title: "Atelier Camélia — E-shop",
    category: "Web Design · E-commerce",
    year: "2024",
    description:
      "Refonte du site marchand d'une créatrice de bijoux artisanaux : tunnel d'achat optimisé et univers de marque retravaillé.",
    image: p2,
    tags: ["Webflow", "UI Design", "Branding"],
  },
  {
    title: "Maison Lila — Identité",
    category: "Branding · Direction artistique",
    year: "2024",
    description:
      "Création de l'identité visuelle d'une boutique liégeoise : logo, papeterie, supports imprimés et guidelines complètes.",
    image: p3,
    tags: ["Branding", "Print", "Logo"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-medium">
              02 — Projets
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3">
              Sélection de <span className="italic text-gradient">réalisations</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Projets récents mêlant recherche utilisateur, design d'interface
            et direction artistique.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:[direction:ltr] group relative">
                <div className="absolute inset-0 -m-3 rounded-2xl bg-gradient-accent opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden shadow-card border border-border/60 bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="md:[direction:ltr] space-y-5">
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-primary/80">
                  <span>{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/40" />
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-primary border-b border-primary/40 hover:border-primary pb-0.5 mt-4"
                >
                  Voir l'étude de cas <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
