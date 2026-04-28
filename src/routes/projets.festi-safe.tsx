import { createFileRoute, Link } from "@tanstack/react-router";
import festiSafePoster from "@/assets/project-2.jpg";

export const Route = createFileRoute("/projets/festi-safe")({
  component: FestiSafeCaseStudy,
});

function FestiSafeCaseStudy() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <header className="border-b-[3px] border-foreground bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-lg uppercase tracking-tight" style={{ color: "var(--foreground)" }}>
            ← Laura Purnelle
          </Link>
          <Link
            to="/"
            hash="contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-widest border-brutal-thick hover-pop"
            style={{ background: "var(--foreground)", color: "var(--background)" }}
          >
            Travaillons ensemble
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div
              className="inline-block border-brutal-thick px-4 py-1.5 -rotate-2 shadow-brutal"
              style={{ background: "var(--lime)" }}
            >
              <span className="font-display text-xs uppercase tracking-widest">★ Direction artistique · 2025</span>
            </div>
            <div
              className="inline-block border-brutal-thick px-4 py-1.5 rotate-1"
              style={{ background: "var(--magenta)", color: "var(--cream)" }}
            >
              <span className="font-display text-xs uppercase tracking-widest">Projet scolaire · Festival fictif</span>
            </div>
          </div>
          <h1
            className="uppercase leading-[0.85] tracking-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            Festi'Safe
          </h1>
          <p
            className="mt-6 italic text-foreground/80 max-w-3xl"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            Un festival, une promesse : la fête sans compromis sur le respect.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-4xl">
            {[
              { label: "Type", value: "Projet scolaire · fictif" },
              { label: "Contexte", value: "École · IFAPME · 2025" },
              { label: "Disciplines", value: "Typo · Identité · Print" },
            ].map(({ label, value }) => (
              <div key={label} className="border-brutal-thick p-4 bg-background">
                <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--magenta)" }}>{label}</div>
                <div className="font-display text-lg uppercase mt-1">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poster */}
      <section className="px-6 pb-24">
        <div className="max-w-md mx-auto">
          <div className="border-brutal-thick p-4 shadow-brutal-lg" style={{ background: "var(--magenta)" }}>
            <img
              src={festiSafePoster}
              alt="Affiche du festival Festi'Safe à Liège"
              className="w-full h-auto object-cover border-brutal"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="px-6 py-24 bg-foreground text-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--lime)" }}>01 / Le concept</div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <h2
              className="leading-[0.95]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Un safe space qui n'a pas peur de crier.
            </h2>
            <div
              className="border-[2px] border-[var(--lime)] px-4 py-3 rounded-sm mb-2"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--lime)" }}>
                ✦ Note — Festival fictif · Exercice scolaire IFAPME 2025
              </p>
              <p className="text-sm text-background/80 mt-1">
                Festi'Safe est un festival imaginaire créé dans le cadre d'un cours de direction artistique.
                Tous les artistes, lieux et informations sont fictifs.
              </p>
            </div>
            <p className="text-lg leading-relaxed text-background/85">
              Le défi de Festi'Safe : concevoir une communication visuelle à la fois{" "}
              <span className="px-1.5" style={{ background: "var(--lime)", color: "var(--foreground)" }}>festive et engagée</span>
              {" "}— sans tomber dans le militant aseptisé. La fête doit rester la fête.
              Le respect, lui, n'est pas négociable.
            </p>
            <p className="text-lg leading-relaxed text-background/85">
              Le festival réunit onze artistes aux univers radicalement différents —
              du psychédélique organique d'<strong>Aura Botanica</strong> aux drones
              hypnotiques de <strong>Shanti System</strong>, en passant par les rythmes nomades
              d'<strong>Onde Nómada</strong>. L'affiche devait être aussi éclectique que le line-up.
            </p>
          </div>
        </div>
      </section>

      {/* Design decisions */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "var(--magenta)" }}>02 / Parti pris graphique</div>
          <h2
            className="leading-[0.95] mb-12"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            Quand la chaleur devient langage.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-brutal-thick p-6 bg-background">
              <div className="font-display text-3xl mb-4">◈</div>
              <h3 className="font-display text-xl uppercase mb-3">La palette</h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                Ocre chaud, terracotta profond, bleu nuit dense — teintes de festival nocturne
                évoquant le feu, la terre, l'énergie collective. Psychédélique sans être agressif.
              </p>
            </div>
            <div className="border-brutal-thick p-6" style={{ background: "var(--lime)" }}>
              <div className="font-display text-3xl mb-4">Aa</div>
              <h3 className="font-display text-xl uppercase mb-3">La typographie</h3>
              <p className="text-sm leading-relaxed">
                Trois registres typographiques reflètent trois énergies : gothique condensé
                pour l'autorité, groovy arrondi pour la fête, serif italique pour la poésie des artistes.
              </p>
            </div>
            <div className="border-brutal-thick p-6 bg-foreground text-background">
              <div className="font-display text-3xl mb-4">⊘</div>
              <h3 className="font-display text-xl uppercase mb-3">Les pictogrammes</h3>
              <p className="text-sm leading-relaxed text-background/80">
                Trois icônes barrées — violence, alcool, drogues — avec une croix géométrique épaisse.
                Pas un règlement ; une déclaration d'intention. Le safe space s'affirme visuellement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lineup */}
      <section className="px-6 py-24" style={{ background: "var(--magenta)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: "var(--lime)" }}>03 / Le line-up</div>
          <h2
            className="leading-[0.95] mb-10 text-background"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            Onze univers, une nuit.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12">
            {[
              { name: "Aura Botanica", style: "Psychédélique organique" },
              { name: "Nomad", style: "World · Electronic" },
              { name: "Frequencies", style: "Ambient techno" },
              { name: "Cactus", style: "Desert blues" },
              { name: "Mirage", style: "Dreamwave" },
              { name: "Onde Nómada", style: "Rythmes nomades" },
              { name: "Lune d'Ambre", style: "Folk électronique" },
              { name: "Mantra", style: "Méditation sonore" },
              { name: "Groove", style: "Funk · Soul" },
              { name: "Shanti System", style: "Drones hypnotiques" },
              { name: "Echo Racine", style: "Ethno-électronique" },
            ].map((artist) => (
              <div key={artist.name} className="flex items-center justify-between py-3 border-b border-background/30">
                <span className="font-display text-lg uppercase text-background">{artist.name}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-background/70">{artist.style}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--magenta)" }}>04 / Le processus</div>
            <h2
              className="leading-[0.95]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              La texture comme récit.
            </h2>
            <p className="text-lg leading-relaxed">
              L'overlay de bruit photographique et les trames appliquées en calques successifs
              rappellent les photocopies de flyers de rave underground. Une esthétique
              intentionnellement imparfaite — parce qu'un festival vivant est toujours un peu rugueux.
            </p>
            <ul className="space-y-3 text-sm font-medium">
              {[
                "Texture grain photographique (overlay 35 %)",
                "Typographies mélangées volontairement",
                "Pictogrammes dessinés à la main, vectorisés",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="border-brutal px-2 py-0.5 shrink-0" style={{ background: "var(--lime)" }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7 flex items-center justify-center">
            <div
              className="border-brutal-thick shadow-brutal p-8 max-w-xs text-center space-y-4"
              style={{ background: "var(--lime)", transform: "rotate(2deg)" }}
            >
              <div
                className="uppercase leading-none"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: "4rem" }}
              >
                Festi'<br />Safe
              </div>
              <div className="text-sm font-bold uppercase tracking-widest">20 / 02 · Liège</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-60">
                Rue du festival 31, 4000 Liège
              </div>
              <div className="text-xs opacity-70">+32494856271</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-foreground text-background">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2
            className="leading-[0.9]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Un projet à raconter ?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-foreground text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop"
              style={{ background: "var(--lime)" }}
            >
              Travaillons ensemble →
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop"
            >
              ← Retour au portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
