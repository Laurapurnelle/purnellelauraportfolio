import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projets/ptb")({
  component: PtbCaseStudy,
});

const ruptures = [
  { label: "Climat", angle: -90 },
  { label: "Justice fiscale", angle: -18 },
  { label: "Pouvoir d'achat", angle: 54 },
  { label: "Santé", angle: 126 },
  { label: "Démocratie", angle: 198 },
];

function PtbCaseStudy() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <header className="border-b-[3px] border-foreground bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-lg uppercase tracking-tight hover:text-[var(--ptb-red)]">
            ← Laura Purnelle
          </Link>
          <Link
            to="/"
            hash="contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-widest border-brutal-thick hover-pop"
            style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
          >
            Travaillons ensemble
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-24 relative" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div
              className="inline-block border-brutal-thick px-4 py-1.5 -rotate-2 shadow-brutal mb-8"
              style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
            >
              <span className="font-display text-xs uppercase tracking-widest">★ Étude de cas · 2025</span>
            </div>
            <h1
              className="uppercase leading-[0.85] tracking-tight"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 900,
                fontSize: "clamp(3rem, 10vw, 8rem)",
                color: "var(--ptb-red)",
              }}
            >
              Simplifier
              <br />
              la rupture
            </h1>
            <p
              className="mt-6 italic text-foreground/80 max-w-2xl"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(1.25rem, 2.6vw, 2rem)",
                lineHeight: 1.2,
              }}
            >
              Refonte mobile-first du site du PTB — l'activisme passé au crible
              de l'expérience utilisateur.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["UX Mobile-first", "Design System", "Accessibilité", "Engagement civique"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-background text-foreground border-brutal"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* iPhone mockup with prototype video */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              {/* Decorative blob behind */}
              <div
                className="absolute -inset-8 -z-0"
                style={{
                  background: "var(--ptb-red)",
                  borderRadius: "62% 38% 55% 45% / 50% 60% 40% 50%",
                  opacity: 0.18,
                }}
              />
              <div
                className="relative z-10 w-[280px] h-[570px] bg-foreground rounded-[3rem] p-3 shadow-brutal-lg border-brutal-square"
                style={{ boxShadow: "10px 10px 0 0 var(--ptb-red)" }}
              >
                <div className="relative w-full h-full bg-background rounded-[2.3rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-20" />
                  {/* Video / fallback */}
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster=""
                  >
                    <source src="/ptb-prototype.mp4" type="video/mp4" />
                  </video>
                  {/* Overlay placeholder content (visible if no video) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={{ background: "var(--ptb-red)" }}>
                    <div className="text-center px-6">
                      <div className="font-display text-7xl mb-2" style={{ color: "var(--cream)" }}>★</div>
                      <div className="font-display text-2xl uppercase tracking-tight" style={{ color: "var(--cream)" }}>
                        PTB
                      </div>
                      <div className="text-xs uppercase tracking-widest mt-2" style={{ color: "var(--cream)", opacity: 0.85 }}>
                        Prototype Figma
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Pourquoi */}
      <section className="px-6 py-24" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-block w-12 h-12 border-brutal-square flex items-center justify-center font-display text-xl"
              style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
            >
              01
            </span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "var(--ptb-red)" }}>
              Le Pourquoi
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.9] mb-8 max-w-4xl">
            Rendre une structure massive
            <br />
            <span
              className="inline-block px-3 -rotate-1 mt-2"
              style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
            >
              digeste & actionnable.
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-base leading-relaxed text-foreground/85">
            <p>
              Le programme politique du PTB est dense : des dizaines de
              thématiques, des centaines de propositions, une histoire militante
              longue et un public hétérogène. Sur un site desktop classique, ce
              volume écrase l'utilisateur — et coupe l'envie d'agir.
            </p>
            <p>
              Le défi : transformer cette masse en parcours mobile-first où
              chaque scroll rapproche d'une action concrète. Pas un site
              vitrine, mais un <strong>outil d'engagement</strong> où la lecture
              et la participation sont indissociables.
            </p>
          </div>
        </div>
      </section>

      {/* Symbolisme & Design */}
      <section className="px-6 py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span
              className="inline-block w-12 h-12 border-brutal-square flex items-center justify-center font-display text-xl"
              style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
            >
              02
            </span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "var(--ptb-red)" }}>
              Symbolisme & Design
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.9] mb-16 max-w-4xl">
            Un design qui
            <br />
            <span className="italic" style={{ fontFamily: "var(--font-serif)", fontWeight: 900 }}>
              porte le message.
            </span>
          </h2>

          {/* Le Rouge */}
          <div className="grid md:grid-cols-12 gap-10 items-center mb-20">
            <div className="md:col-span-5">
              <div
                className="aspect-square w-full border-brutal-thick shadow-brutal-lg flex items-center justify-center"
                style={{ background: "var(--ptb-red)" }}
              >
                <div className="text-center" style={{ color: "var(--cream)" }}>
                  <div className="font-display text-7xl md:text-9xl">#E60012</div>
                  <div className="text-xs uppercase tracking-[0.3em] mt-3 opacity-90">PTB Red</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-foreground/70">
                ★ Le Rouge
              </span>
              <h3 className="font-display text-3xl md:text-4xl uppercase leading-tight">
                Une couleur-moteur,
                <br />
                pas un simple logo.
              </h3>
              <p className="text-base leading-relaxed text-foreground/85 max-w-lg">
                Le rouge PTB n'est pas qu'une signature visuelle : c'est un
                <strong> déclencheur émotionnel</strong>. Saturé, vibrant, il
                appelle l'action et soutient la passion militante. Utilisé en
                aplats francs sur les CTA, les chiffres-clés et les moments de
                rupture, il rythme la lecture comme un coup de poing graphique
                — sans jamais devenir bruit de fond.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Aplats francs", "CTA prioritaires", "Contraste AAA"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-background text-foreground border-brutal"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* L'Étoile des Valeurs */}
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-4 order-2 md:order-1">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-foreground/70">
                ★ L'Étoile des Valeurs
              </span>
              <h3 className="font-display text-3xl md:text-4xl uppercase leading-tight">
                Le cœur du projet :
                <br />
                un menu en étoile.
              </h3>
              <p className="text-base leading-relaxed text-foreground/85 max-w-lg">
                Chaque branche de l'étoile représente un <strong>Point de
                Rupture</strong> — Climat, Justice fiscale, Pouvoir d'achat,
                Santé, Démocratie. L'étoile n'est pas un ornement : elle est à
                la fois un rappel direct du logo du parti et une <em>boussole
                </em> qui oriente l'utilisateur vers les valeurs fondamentales.
              </p>
              <p className="text-base leading-relaxed text-foreground/85 max-w-lg">
                Cette navigation radiale casse la hiérarchie verticale
                traditionnelle d'un menu. Aucun thème n'est plus haut qu'un
                autre — tous convergent vers le centre, vers l'engagement.
              </p>
            </div>

            {/* Star menu visualization */}
            <div className="md:col-span-5 order-1 md:order-2 flex justify-center">
              <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
                {/* Branches */}
                {ruptures.map((r) => {
                  const rad = (r.angle * Math.PI) / 180;
                  const radius = 42; // % of half container
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <div
                      key={r.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 border-brutal-thick text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-brutal"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        background: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      {r.label}
                    </div>
                  );
                })}
                {/* Lines */}
                <svg className="absolute inset-0 w-full h-full -z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {ruptures.map((r) => {
                    const rad = (r.angle * Math.PI) / 180;
                    const x = 50 + 42 * Math.cos(rad);
                    const y = 50 + 42 * Math.sin(rad);
                    return (
                      <line
                        key={r.label}
                        x1="50"
                        y1="50"
                        x2={x}
                        y2={y}
                        stroke="var(--foreground)"
                        strokeWidth="0.6"
                        strokeDasharray="2 2"
                      />
                    );
                  })}
                </svg>
                {/* Center star */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border-brutal-thick shadow-brutal-lg flex items-center justify-center"
                  style={{ background: "var(--ptb-red)" }}
                >
                  <span className="font-display text-5xl md:text-6xl" style={{ color: "var(--cream)" }}>★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="px-6 py-24" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-block w-12 h-12 border-brutal-square flex items-center justify-center font-display text-xl"
              style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
            >
              03
            </span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "var(--ptb-red)" }}>
              Fonctionnalités
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.9] mb-16 max-w-4xl">
            Trois piliers
            <br />
            <span
              className="inline-block px-3 rotate-1 mt-2"
              style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
            >
              pour passer à l'acte.
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Menu Interactif */}
            <article className="border-brutal-thick bg-background p-6 shadow-brutal hover-pop flex flex-col">
              <div
                className="w-14 h-14 border-brutal-square flex items-center justify-center font-display text-2xl mb-5"
                style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
              >
                ✦
              </div>
              <h3 className="font-display text-2xl uppercase mb-3 leading-tight">
                Menu interactif
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80 flex-1">
                Une navigation <strong>non-linéaire</strong> qui invite à
                explorer le programme par centre d'intérêt plutôt que par
                catégorie imposée. L'utilisateur trace son propre chemin
                politique.
              </p>
              <div className="mt-5 text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                Navigation radiale · Mobile-first
              </div>
            </article>

            {/* Section Fakto */}
            <article
              className="border-brutal-thick p-6 shadow-brutal hover-pop flex flex-col"
              style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
            >
              <div
                className="w-14 h-14 border-brutal-square flex items-center justify-center font-display text-2xl mb-5"
                style={{ background: "var(--cream)", color: "var(--ptb-red)" }}
              >
                ✓
              </div>
              <h3 className="font-display text-2xl uppercase mb-3 leading-tight">
                Fakto
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ opacity: 0.95 }}>
                Une interface de <strong>fact-checking</strong> claire pour
                lutter contre la désinformation : sources visibles, distinction
                entre fait et opinion, format court adapté au partage social.
              </p>
              <div className="mt-5 text-[10px] font-bold uppercase tracking-widest" style={{ opacity: 0.85 }}>
                Vérification · Sources ouvertes
              </div>
            </article>

            {/* UX d'Urgence */}
            <article className="border-brutal-thick bg-foreground text-background p-6 shadow-brutal hover-pop flex flex-col">
              <div
                className="w-14 h-14 border-brutal-square flex items-center justify-center font-display text-2xl mb-5"
                style={{ background: "var(--ptb-red)", color: "var(--cream)" }}
              >
                !
              </div>
              <h3 className="font-display text-2xl uppercase mb-3 leading-tight">
                UX d'urgence
              </h3>
              <p className="text-sm leading-relaxed text-background/85 flex-1">
                Des boutons <strong>« Agir maintenant »</strong> persistants
                pour pétitions et mobilisations de terrain. Friction minimale,
                feedback instantané — la rue à un clic du programme.
              </p>
              <div className="mt-5 text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--ptb-red)" }}>
                CTA persistants · Conversion
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-24 border-t-[3px] border-foreground" style={{ background: "var(--ptb-red)" }}>
        <div className="max-w-5xl mx-auto text-center" style={{ color: "var(--cream)" }}>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.9] mb-6">
            On parle de votre prochain projet ?
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90">
            UX engagée, design system robuste, accessibilité : disponible pour
            stage ou alternance longue durée à partir de juin 2027.
          </p>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop rounded-full"
            style={{ background: "var(--cream)", color: "var(--ptb-red)" }}
          >
            Travaillons ensemble →
          </Link>
        </div>
      </section>
    </main>
  );
}
