export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-soft">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16 items-start">
        <div className="md:col-span-2 space-y-4">
          <span className="text-sm tracking-widest uppercase text-primary/80">
            01 — À propos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Une <span className="italic text-gradient">designer</span> au
            service de l'expérience.
          </h2>
        </div>

        <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Diplômée en design numérique à Liège, je conçois des interfaces qui
            allient esthétique délicate et logique d'usage. Mon approche
            s'appuie sur l'écoute, la recherche et beaucoup de tests
            utilisateurs.
          </p>
          <p>
            J'aime les projets qui ont du sens, où chaque pixel sert une
            intention. De l'application mobile au site vitrine, je travaille
            main dans la main avec des entrepreneur·e·s, des associations et
            des studios créatifs.
          </p>
          <div className="flex flex-wrap gap-8 pt-6">
            {[
              { num: "20+", label: "Projets livrés" },
              { num: "2 ans", label: "d'expérience" },
              { num: "100%", label: "Passionnée" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-primary">{s.num}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
