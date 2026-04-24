import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background"
    >
      {/* Decorative organic shapes */}
      <div className="absolute top-32 right-8 w-32 h-32 bg-[var(--lime)] border-brutal-thick blob-1 hidden md:block" />
      <div className="absolute bottom-20 left-8 w-20 h-20 bg-[var(--magenta)] border-brutal-thick blob-2 hidden md:block" />
      <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-[var(--orange)] border-brutal blob-flower hidden lg:block" />
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-foreground rounded-full hidden lg:block" />
      {/* Spinning sticker */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 md:left-auto md:right-1/3 hidden md:block spin-slow">
        <div className="w-24 h-24 rounded-full bg-[var(--lavender)] border-brutal-thick flex items-center justify-center">
          <span className="font-display text-[10px] uppercase tracking-widest">★ 2025 ★</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-8 items-center">
        {/* Left — text, asymmetric span */}
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow border-brutal text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            Disponible · Liège · 2025
          </div>

          <h1 className="font-display text-foreground uppercase">
            <span className="block text-[clamp(2.5rem,8vw,7rem)] leading-[0.85]">
              Laura
            </span>
            <span className="block text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] -mt-1">
              Purnelle<span className="text-violet">.</span>
            </span>
            <span className="block mt-4 text-[clamp(1rem,2.2vw,1.75rem)] font-sans font-bold tracking-tight normal-case">
              Designer <span className="bg-violet text-primary-foreground px-2 inline-block">UI/UX</span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-sans font-medium text-foreground max-w-xl leading-snug">
            Je crée des interfaces qui marquent
            <span className="bg-yellow px-1 mx-1">les esprits</span>,
            pas juste les écrans.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-4 bg-foreground text-background text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop"
            >
              Voir les projets →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-4 bg-background text-foreground text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Right — portrait card, organic blob frame */}
        <div className="md:col-span-5 relative md:mt-12">
          <div className="relative bg-[var(--magenta)] border-brutal-thick blob-1 overflow-hidden">
            <img
              src={heroPortrait}
              alt="Portrait de Laura Purnelle, designer UI/UX"
              width={1024}
              height={1280}
              className="w-full h-auto object-cover -translate-x-2 -translate-y-2 blob-1"
            />
          </div>

          {/* Floating sticker badges */}
          <div className="absolute -top-6 -left-6 bg-[var(--lime)] border-brutal-thick px-4 py-2 -rotate-6 shadow-brutal blob-3">
            <p className="font-display text-sm uppercase">UI · UX</p>
          </div>
          <div className="absolute -bottom-6 -right-4 bg-[var(--lavender)] border-brutal-thick px-4 py-3 rotate-3 shadow-brutal">
            <p className="text-xs uppercase tracking-widest font-bold text-foreground/70">
              IFAPME Liège
            </p>
            <p className="font-display text-base text-foreground">
              2025 — 2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
