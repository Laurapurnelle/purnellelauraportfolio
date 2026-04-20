import { createFileRoute, Link } from "@tanstack/react-router";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/krousel")({
  head: () => ({
    meta: [
      { title: "The K'Rousel — Étude de cas · Laura Purnelle" },
      {
        name: "description",
        content:
          "Étude de cas UX/UI : The K'Rousel, identité hybride entre friterie itinérante et traiteur haut de gamme à Liège. Split screen diagonal, copywriting sourcé, savoir-faire.",
      },
      { property: "og:title", content: "The K'Rousel — Étude de cas UI/UX" },
      {
        property: "og:description",
        content:
          "Une identité hybride pour Kassandra Lorquet : friterie itinérante & traiteur haut de gamme. Split screen à 15°, copywriting raffiné.",
      },
      { property: "og:image", content: p1 },
      { name: "twitter:image", content: p1 },
    ],
  }),
  component: KrouselCaseStudy,
});

function KrouselCaseStudy() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <header className="border-b-[3px] border-foreground bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-lg uppercase tracking-tight hover:text-violet">
            ← Laura Purnelle
          </Link>
          <Link
            to="/"
            hash="contact"
            className="hidden md:inline-flex items-center px-4 py-2 bg-foreground text-background text-xs font-bold uppercase tracking-widest border-brutal-thick hover-pop"
          >
            Travaillons ensemble
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-yellow border-brutal-thick px-4 py-1.5 -rotate-2 shadow-brutal mb-8">
            <span className="font-display text-xs uppercase tracking-widest">★ Projet phare · 2025</span>
          </div>
          <h1
            className="uppercase leading-[0.85] tracking-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            The K'Rousel
          </h1>
          <p
            className="mt-6 italic text-foreground/80 max-w-3xl"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            L'art de la friterie & l'élégance traiteur.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-4xl">
            <div className="border-brutal-thick p-4 bg-background">
              <div className="text-[10px] font-bold uppercase tracking-widest text-violet">Client</div>
              <div className="font-display text-lg uppercase mt-1">Kassandra Lorquet</div>
            </div>
            <div className="border-brutal-thick p-4 bg-background">
              <div className="text-[10px] font-bold uppercase tracking-widest text-violet">Lieu</div>
              <div className="font-display text-lg uppercase mt-1">Liège, BE</div>
            </div>
            <div className="border-brutal-thick p-4 bg-background">
              <div className="text-[10px] font-bold uppercase tracking-widest text-violet">Rôle</div>
              <div className="font-display text-lg uppercase mt-1">UI · UX · Contenu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-violet border-brutal-thick p-3 shadow-brutal-lg">
            <img
              src={p1}
              alt="Aperçu de l'interface The K'Rousel"
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
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-yellow">01 / Le concept</div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <h2
              className="leading-[0.95]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Une identité hybride, ancrée à Liège.
            </h2>
            <p className="text-lg leading-relaxed text-background/85">
              The K'Rousel est le projet de Kassandra Lorquet : faire dialoguer deux univers
              que tout semble opposer — la <span className="bg-yellow text-foreground px-1.5">friterie itinérante</span> et
              le <span className="bg-violet text-background px-1.5">traiteur haut de gamme</span>.
              L'enjeu : une marque unique, deux expériences distinctes, sans jamais diluer l'une dans l'autre.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation UX */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-violet">02 / Innovation UX</div>
            <h2
              className="leading-[0.95]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
            >
              Split screen,<br />séparation à 15°.
            </h2>
            <p className="text-lg leading-relaxed">
              Dès l'entrée, l'utilisateur choisit son univers. Une diagonale franche à 15°
              divise l'écran en deux mondes : à gauche, l'énergie populaire de la friterie ;
              à droite, le raffinement du traiteur. Pas de menu central, pas de compromis —
              <strong> le choix est une expérience, pas une case à cocher.</strong>
            </p>
            <ul className="space-y-2 text-sm font-medium">
              <li className="flex gap-3"><span className="bg-yellow border-brutal px-2">✦</span> Décision immédiate, sans charge cognitive.</li>
              <li className="flex gap-3"><span className="bg-yellow border-brutal px-2">✦</span> Deux palettes, deux typographies, une marque mère.</li>
              <li className="flex gap-3"><span className="bg-yellow border-brutal px-2">✦</span> Animation diagonale au survol, micro-interaction signature.</li>
            </ul>
          </div>
          <div className="md:col-span-7">
            <div className="bg-yellow border-brutal-thick p-3 shadow-brutal -rotate-1">
              <img
                src={p2}
                alt="Maquette du split screen diagonal à 15°"
                className="w-full h-auto object-cover border-brutal"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Copywriting */}
      <section className="px-6 py-24 bg-violet text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-yellow mb-6">
            03 / Copywriting
          </div>
          <h2
            className="leading-[0.95] mb-10"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            On ne dit pas "fast-food".<br />On dit savoir-faire.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background text-foreground border-brutal-thick p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-destructive">À bannir</div>
              <p className="font-display text-2xl uppercase mt-2 line-through decoration-[3px]">Fast-food</p>
              <p className="text-sm mt-2 text-muted-foreground">Banal. Réducteur. Faux pour ce projet.</p>
            </div>
            <div className="bg-yellow text-foreground border-brutal-thick p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-violet">À privilégier</div>
              <p className="font-display text-2xl uppercase mt-2">Produits sourcés · Savoir-faire</p>
              <p className="text-sm mt-2">Un vocabulaire qui ancre la marque dans l'artisanat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produits signatures */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-violet mb-4">
            04 / Détails techniques
          </div>
          <h2
            className="leading-[0.95] mb-12"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            Produits signatures.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="border-brutal-thick bg-background hover-pop">
              <div className="bg-yellow border-b-[3px] border-foreground p-4">
                <img src={p3} alt="Le K'Lorquet" className="w-full h-56 object-cover border-brutal" loading="lazy" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-violet">Le signature</div>
                <h3
                  className="uppercase"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "2rem", lineHeight: 0.95 }}
                >
                  Le K'Lorquet
                </h3>
                <p className="text-sm leading-relaxed">
                  Burger d'auteur au <strong>Blanc-Bleu Belge</strong>, race emblématique
                  élevée localement. Sourcing court, cuisson maîtrisée.
                </p>
              </div>
            </article>

            <article className="border-brutal-thick bg-background hover-pop">
              <div className="bg-violet border-b-[3px] border-foreground p-4">
                <img src={p2} alt="Le Liégeois Noir" className="w-full h-56 object-cover border-brutal" loading="lazy" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-violet">L'audacieux</div>
                <h3
                  className="uppercase"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "2rem", lineHeight: 0.95 }}
                >
                  Le Liégeois Noir
                </h3>
                <p className="text-sm leading-relaxed">
                  Hommage au terroir : <strong>boudin noir de chez Pirard</strong>,
                  charcutier liégeois reconnu. Une recette qui assume son caractère.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA back */}
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow text-foreground text-sm font-bold uppercase tracking-widest border-brutal-thick hover-pop"
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
