import { FlowerSticker, Star, WavyDivider } from "./FlowerFrame";

export function Contact() {
  return (
    <>
      <WavyDivider color="var(--magenta)" />

      <section
        id="contact"
        className="relative py-24 md:py-32 px-6 overflow-hidden"
        style={{ background: "var(--magenta)", color: "var(--cream)" }}
      >
        {/* Decorative blobs, flowers, stars */}
        <div
          className="absolute top-10 right-10 w-36 h-36 border-brutal-thick blob-1"
          style={{ background: "var(--lime)" }}
        />
        <div
          className="absolute bottom-1/3 left-8 w-24 h-24 border-brutal-thick blob-flower hidden md:block"
          style={{ background: "var(--orange)" }}
        />
        <FlowerSticker color="var(--lime)" size={68} className="absolute top-20 left-[5%] -rotate-12" />
        <FlowerSticker color="var(--orange)" size={52} className="absolute bottom-32 right-[6%] rotate-6 hidden md:block" />
        <Star color="var(--cream)" size={28} className="absolute top-32 left-[40%] -rotate-12 hidden md:block" />
        <Star color="var(--lime)" size={22} className="absolute bottom-20 left-[30%]" />
        <Star color="var(--cream)" size={20} className="absolute top-1/2 right-1/3 hidden lg:block" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <span
              className="inline-block text-xs font-bold tracking-[0.3em] uppercase border-brutal px-4 py-2 rounded-full"
              style={{ background: "var(--lime)", color: "var(--ink)" }}
            >
              ★ 04 / Contact ★
            </span>
            <p className="text-lg md:text-xl font-medium max-w-xl mx-auto pt-4">
              Un projet d'interface, une refonte ou une identité ?
              <br />
              Réponse sous 48h, promis.
            </p>
          </div>

          {/* Giant typography button */}
          <a
            href="mailto:laurapurnelle@outlook.com"
            aria-label="Envoyer un email à Laura Purnelle"
            className="group block text-center my-8"
          >
            <span
              className="font-display uppercase leading-[0.85] tracking-tighter block text-[clamp(3rem,15vw,12rem)] transition-colors"
              style={{ color: "var(--cream)" }}
            >
              Travaillons
            </span>
            <span className="font-display uppercase leading-[0.85] tracking-tighter block text-[clamp(3rem,15vw,12rem)] -mt-2 md:-mt-4">
              <span
                className="px-3 md:px-6 inline-block border-brutal-thick shadow-brutal group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform rounded-3xl"
                style={{ background: "var(--lime)", color: "var(--ink)" }}
              >
                ensemble
              </span>
              <span style={{ color: "var(--lime)" }}>.</span>
            </span>
          </a>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="mailto:laurapurnelle@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-4 bg-background text-foreground text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop rounded-full"
            >
              laurapurnelle@outlook.com →
            </a>
            <a
              href="tel:+32493875201"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop rounded-full"
              style={{ background: "var(--lime)", color: "var(--ink)" }}
            >
              +32 493 87 52 01
            </a>
            <a
              href="https://www.linkedin.com/in/laura-purnelle-9a1608213/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-foreground text-background text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop rounded-full"
            >
              LinkedIn ↗
            </a>
          </div>

          <div
            className="mt-20 pt-8 border-t-[3px] border-foreground flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest"
          >
            <p>© {new Date().getFullYear()} Laura Purnelle · Liège</p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/laura-purnelle-9a1608213/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--lime)] transition-colors">
                LinkedIn
              </a>
              <span className="w-1 h-1 bg-[var(--cream)] rounded-full" />
              <a href="mailto:laurapurnelle@outlook.com" className="hover:text-[var(--lime)] transition-colors">Email</a>
              <span className="w-1 h-1 bg-[var(--cream)] rounded-full" />
              <a href="tel:+32493875201" className="hover:text-[var(--lime)] transition-colors">Téléphone</a>
            </div>
            <p>IFAPME Château Massart · 2025—2027</p>
          </div>
        </div>

        {/* Checkered band at the very bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-6 border-t-[3px] border-foreground"
          style={{
            backgroundImage:
              "linear-gradient(45deg, var(--lime) 25%, transparent 25%), linear-gradient(-45deg, var(--lime) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--lime) 75%), linear-gradient(-45deg, transparent 75%, var(--lime) 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0",
            backgroundColor: "var(--cream)",
          }}
        />
      </section>
    </>
  );
}
