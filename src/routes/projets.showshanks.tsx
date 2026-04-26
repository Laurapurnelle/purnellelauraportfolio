import { createFileRoute, Link } from "@tanstack/react-router";
import showshanksPoster from "@/assets/project-1.jpg";

export const Route = createFileRoute("/projets/showshanks")({
  component: ShowshanksCaseStudy,
});

function ShowshanksCaseStudy() {
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
          <div
            className="inline-block border-brutal-thick px-4 py-1.5 rotate-1 shadow-brutal mb-8"
            style={{ background: "var(--foreground)", color: "var(--background)" }}
          >
            <span className="font-display text-xs uppercase tracking-widest">★ Cours de création visuelle · 2025</span>
          </div>
          <h1
            className="uppercase leading-[0.85] tracking-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            Show<br />Shanks
          </h1>
          <p
            className="mt-6 italic text-foreground/80 max-w-3xl"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            Réinterpréter un classique du cinéma par le storytelling typographique.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-4xl">
            {[
              { label: "Type", value: "Affiche de cinéma" },
              { label: "Contexte", value: "Cours · École" },
              { label: "Disciplines", value: "Typo · DA · Print" },
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
        <div className="max-w-sm mx-auto">
          <div className="border-brutal-thick p-3 shadow-brutal-lg bg-foreground">
            <img
              src={showshanksPoster}
              alt="Affiche ShowShanks — réinterprétation de The Shawshank Redemption"
              className="w-full h-auto object-cover border-brutal"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Brief */}
      <section className="px-6 py-24 bg-foreground text-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--lime)" }}>01 / Le brief</div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <h2
              className="leading-[0.95]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Raconter la liberté sans montrer les barreaux.
            </h2>
            <p className="text-lg leading-relaxed text-background/85">
              Le cours de création visuelle imposait une contrainte claire : prendre une affiche de cinéma
              existante et la réinventer avec un angle de storytelling personnel.{" "}
              <span className="px-1.5" style={{ background: "var(--lime)", color: "var(--foreground)" }}>
                The Shawshank Redemption
              </span>{" "}
              s'est imposé — non pour son esthétique originale, mais pour ce qu'il dit : la liberté
              comme acte physique, obstiné, quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "var(--magenta)" }}>02 / Le concept</div>
          <h2
            className="leading-[0.95] mb-12"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            La pioche comme lettre.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Dans le film, Andy Dufresne creuse son chemin vers la liberté pendant dix-neuf ans,
                nuit après nuit, avec un <strong>marteau de roche grand comme une main</strong>.
                Un objet minuscule, un résultat colossal.
              </p>
              <p className="text-lg leading-relaxed">
                L'idée centrale : remplacer le <strong>T de "THE"</strong> par une pioche.
                L'outil d'évasion devient la lettre de l'histoire. La typographie ne décrit plus
                le film — elle <em>est</em> le film.
              </p>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  "La pioche remplace le «T» — l'outil devient lettre",
                  "Photographie N&B — prison, intemporalité, film noir",
                  "Grain et texture — le temps qui passe, la roche usée",
                  "Silhouette bras ouverts — l'instant de la libération",
                  "Serif classique — gravité littéraire (novella Stephen King)",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span
                      className="border-brutal px-2 py-0.5 shrink-0 text-xs"
                      style={{ background: "var(--magenta)", color: "var(--cream)" }}
                    >✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="border-brutal-thick p-6 bg-background">
                <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--magenta)" }}>Le film original</div>
                <p className="text-sm leading-relaxed text-foreground/70">
                  The Shawshank Redemption (1994) de Frank Darabont — adapté de la novella
                  "Rita Hayworth and Shawshank Redemption" de Stephen King. Andy Dufresne,
                  condamné à tort, passe 19 ans en prison avant de s'évader par un tunnel
                  creusé dans le mur de sa cellule.
                </p>
              </div>
              <div className="border-brutal-thick p-6" style={{ background: "var(--lime)" }}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-3">Ma réinterprétation</div>
                <p className="text-sm leading-relaxed">
                  Supprimer tout ce qui n'est pas l'essentiel : l'outil, le corps, le mot.
                  Pas de grilles, pas de couloir sombre, pas de garde. Juste la liberté —
                  abstraite, typographique, totale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="px-6 py-24 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: "var(--lime)" }}>03 / La typographie</div>
          <h2
            className="leading-[0.95] mb-10"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            REDEMPTION en toutes lettres.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background text-foreground border-brutal-thick p-6 space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--magenta)" }}>Le mot clé</div>
              <p
                className="uppercase"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: "2.5rem", lineHeight: 1 }}
              >
                REDEMPTION
              </p>
              <p className="text-sm text-foreground/70">
                Serif lourd, condensé, en bas de l'affiche. Le mot le plus important, le plus bas —
                parce qu'on ne part que du fond.
              </p>
            </div>
            <div className="border-brutal-thick p-6 space-y-3" style={{ background: "var(--lime)" }}>
              <div className="text-[10px] font-bold uppercase tracking-widest">L'arc narratif</div>
              <p className="text-sm leading-relaxed">
                L'affiche se lit de haut en bas comme un récit : l'outil (pioche) → le chemin (THE) →
                le nom (SHAWSHANKS) → la liberté (REDEMPTION). Une seule image, une histoire entière.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--magenta)" }}>04 / Réflexion</div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <h2
              className="leading-[0.95]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Ce que j'ai appris.
            </h2>
            <p className="text-lg leading-relaxed">
              Ce projet m'a confirmé une intuition : le plus puissant en design n'est pas
              ce qu'on <em>montre</em>, c'est ce qu'on <strong>suggère</strong>. Supprimer une lettre et la
              remplacer par un objet, c'est inviter le regard à faire le travail. C'est ça, le storytelling visuel.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              La contrainte (reproduire une affiche existante) est devenue libératrice :
              en connaissant l'original, on sait ce qu'on peut briser. Et on brise mieux.
            </p>
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
