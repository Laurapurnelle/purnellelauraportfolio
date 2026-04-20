import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-hero"
    >
      {/* subtle decorative accents */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-primary font-medium">
            <span className="w-8 h-px bg-primary/60" />
            Designer UI/UX · Liège
          </span>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-foreground">
            Laura
            <br />
            <span className="italic text-gradient">Purnelle</span>
          </h1>

          <p className="text-lg md:text-xl font-serif italic text-muted-foreground max-w-md leading-relaxed">
            « Concevoir des interfaces qui allient stratégie de marque et
            logique d'usage. »
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Découvrir mes projets
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition-all"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-accent opacity-20 blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-glow border border-border/60 bg-card">
            <img
              src={heroPortrait}
              alt="Portrait de Laura Purnelle, designer UI/UX"
              width={1024}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* floating tag */}
          <div className="absolute -bottom-6 -left-6 bg-card rounded-lg shadow-card px-5 py-3 border border-border/60">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Disponible
            </p>
            <p className="font-serif text-base text-foreground flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              pour de nouveaux projets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
