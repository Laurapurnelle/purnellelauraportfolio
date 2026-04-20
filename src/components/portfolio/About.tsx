export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-soft">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16 items-start">
        <div className="md:col-span-2 space-y-4">
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-medium">
            01 — À propos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Une <span className="italic text-gradient">designer</span> au
            service de l'expérience.
          </h2>
        </div>

        <div className="md:col-span-3 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            Étudiante en alternance en{" "}
            <span className="text-foreground font-medium">
              UI/UX Design à l'IFAPME de Liège (2025 — 2027)
            </span>
            , je conçois des expériences numériques centrées sur l'utilisateur,
            où la stratégie de marque et la logique d'usage se rejoignent.
          </p>
          <p>
            Mon approche s'appuie sur la recherche, le prototypage itératif et
            une attention constante portée à la cohérence visuelle. De la
            refonte d'interface à la direction artistique, je travaille avec
            des entrepreneur·e·s, des associations et des studios pour
            construire des produits clairs, utiles et élégants.
          </p>
          <div className="flex flex-wrap gap-10 pt-6">
            {[
              { num: "2025", label: "Début IFAPME" },
              { num: "10+", label: "Projets réalisés" },
              { num: "Liège", label: "Belgique" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-primary">{s.num}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
