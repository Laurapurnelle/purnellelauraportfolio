import heroPortrait from "@/assets/hero-portrait.jpg";
import { FlowerFrame, FlowerSticker, Star } from "./FlowerFrame";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-32 overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Sprinkled stars & blobs */}
      <Star color="var(--magenta)" size={28} className="absolute top-32 left-[8%] -rotate-12" />
      <Star color="var(--orange)" size={20} className="absolute top-44 left-[14%] rotate-6" />
      <Star color="var(--magenta)" size={18} className="absolute top-[20%] right-[12%]" />
      <Star color="var(--orange)" size={32} className="absolute bottom-32 left-[6%]" />
      <Star color="var(--magenta)" size={22} className="absolute bottom-44 right-[8%] rotate-12" />

      <div
        className="absolute -top-10 -right-10 w-56 h-56 hidden md:block opacity-90"
        style={{ background: "var(--pink)", borderRadius: "var(--blob-1)" }}
      />
      <div
        className="absolute bottom-10 -left-12 w-48 h-48 hidden md:block opacity-80"
        style={{ background: "var(--orange)", borderRadius: "var(--blob-2)" }}
      />

      {/* Spinning sticker */}
      <div className="absolute top-28 right-[6%] hidden md:block spin-slow">
        <div
          className="w-24 h-24 rounded-full border-brutal-thick flex items-center justify-center text-center"
          style={{ background: "var(--lime)" }}
        >
          <span className="font-display text-[10px] uppercase tracking-widest leading-tight">
            ★ LIÈGE ★<br />2025—27
          </span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-10 items-center">
        {/* Left — text */}
        <div className="md:col-span-7 space-y-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 border-brutal-thick text-xs font-bold uppercase tracking-widest rounded-full"
            style={{ background: "var(--lime)" }}
          >
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            Disponible · Liège → Canada
          </div>

          <h1 className="font-display text-foreground uppercase">
            <span className="block text-[clamp(4rem,8vw,7rem)] leading-[0.85]">
              Laura
            </span>
            <span className="block text-[clamp(4rem,8vw,7rem)] leading-[0.85] -mt-1">
              Purnelle<span style={{ color: "var(--magenta)" }}>.</span>
            </span>
            <span className="block mt-4 text-[clamp(1rem,2.2vw,1.75rem)] font-sans font-bold tracking-tight normal-case">
              Designer{" "}
              <span
                className="text-[var(--cream)] px-3 py-0.5 inline-block rounded-full -rotate-2"
                style={{ background: "var(--magenta)" }}
              >
                UX/UI
              </span>{" "}
              à Liège
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-sans font-medium text-foreground max-w-xl leading-snug">
            Transformer des problématiques complexes en
            <span
              className="px-2 mx-1 rounded-md inline-block -rotate-1"
              style={{ background: "var(--orange)", color: "var(--cream)" }}
            >
              expériences fluides
            </span>
            , esthétiques et accessibles.
          </p>

          {/* Skill badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {[
              { label: "UI/UX Design", bg: "var(--foreground)", color: "var(--background)" },
              { label: "Branding", bg: "var(--magenta)", color: "var(--cream)" },
              { label: "Lovable · Figma", bg: "var(--lime)", color: "var(--ink)" },
              { label: "Storytelling", bg: "transparent", color: "var(--foreground)" },
              { label: "FR · EN", bg: "transparent", color: "var(--foreground)" },
            ].map((b) => (
              <span
                key={b.label}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider border-brutal-thick rounded-full"
                style={{ background: b.bg, color: b.color }}
              >
                {b.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop rounded-full"
              style={{ background: "var(--magenta)", color: "var(--cream)" }}
            >
              Voir les projets →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-4 bg-background text-foreground text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop rounded-full"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Right — portrait inside flower frame */}
        <div className="md:col-span-5 relative md:mt-8">
          <FlowerFrame color="var(--magenta)" className="aspect-[4/5] w-full max-w-md mx-auto">
            <img
              src={heroPortrait}
              alt="Portrait de Laura Purnelle, designer UI/UX"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </FlowerFrame>

          {/* Floating sticker badges */}
          <FlowerSticker
            color="var(--orange)"
            size={70}
            className="absolute -top-6 -left-4 -rotate-12"
          />
          <div
            className="absolute -bottom-4 -right-2 border-brutal-thick px-4 py-3 rotate-3 shadow-brutal rounded-2xl"
            style={{ background: "var(--lavender)" }}
          >
            <p className="text-xs uppercase tracking-widest font-bold text-foreground/70">
              IFAPME Liège
            </p>
            <p className="font-display text-base text-foreground">
              2025 — 2027
            </p>
          </div>
          <Star color="var(--magenta)" size={26} className="absolute top-1/2 -right-4 rotate-12" />
        </div>
      </div>

      {/* Bottom marquee strip — pink */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 border-t-[3px] border-foreground overflow-hidden"
        style={{ background: "var(--magenta)" }}
      >
        <div className="marquee-track flex whitespace-nowrap py-3 text-[var(--cream)] font-display uppercase tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 px-4 text-sm md:text-base">
              {Array.from({ length: 8 }).map((__, j) => (
                <span key={j} className="flex items-center gap-6">
                  Travaillons ensemble
                  <Star color="var(--cream)" size={16} />
                  Disponible · Liège → Canada
                  <Star color="var(--lime)" size={16} />
                  Alternance 2025–2027
                  <Star color="var(--cream)" size={16} />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
