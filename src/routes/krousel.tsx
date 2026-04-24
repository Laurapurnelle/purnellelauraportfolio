import { createFileRoute, Link } from "@tanstack/react-router";
import p1 from "@/assets/project-1.jpg";

import krouselSplit from "@/assets/krousel-split.png";
import friterieFull from "@/assets/krousel-friterie-full.jpg";
import traiteurFull from "@/assets/krousel-traiteur-full.jpg";
import burgerKlorquet from "@/assets/burger-klorquet.jpg";
import burgerLiegeois from "@/assets/burger-liegeois.jpg";

const SITE_URL = "#"; // TODO: remplacer par l'URL réelle du site The K'Rousel

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
          <div className="flex items-center gap-3">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-violet text-primary-foreground text-xs font-bold uppercase tracking-widest border-brutal-thick hover-pop"
            >
              Voir le site ↗
            </a>
            <Link
              to="/"
              hash="contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-foreground text-background text-xs font-bold uppercase tracking-widest border-brutal-thick hover-pop"
            >
              Travaillons ensemble
            </Link>
          </div>
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
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet text-primary-foreground text-xs font-bold uppercase tracking-widest border-brutal-thick shadow-brutal hover-pop mt-4"
            >
              Voir le site live ↗
            </a>
          </div>
          <div className="md:col-span-7">
            {/* Mockup iMac */}
            <div className="relative">
              {/* Écran */}
              <div className="bg-foreground rounded-[18px] p-3 md:p-4 shadow-brutal-lg border-brutal-thick">
                {/* Barre titre macOS */}
                <div className="flex items-center gap-1.5 pb-2.5">
                  <span className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="w-3 h-3 rounded-full bg-yellow" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 flex-1 h-6 bg-background/10 rounded-md text-[10px] text-background/70 px-3 flex items-center font-mono">
                    🔒 thekrousel.be
                  </span>
                </div>
                <div className="bg-background rounded-md overflow-hidden border border-foreground/20">
                  <img
                    src={krouselSplit}
                    alt="Page d'accueil The K'Rousel : split screen Friterie / Traiteur"
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Pied iMac */}
              <div className="mx-auto mt-1 w-1/4 h-4 bg-foreground rounded-b-md" />
              <div className="mx-auto w-1/2 h-2.5 bg-foreground/80 rounded-full" />
              <div className="mx-auto mt-1 w-3/5 h-3 bg-foreground rounded-full shadow-brutal" />
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu des deux univers — long screenshots scrollables */}
      <section className="px-6 py-24 bg-[var(--cream,theme(colors.background))] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-violet mb-4">
              03 / Showcase
            </div>
            <h2
              className="leading-[0.95]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
            >
              Deux univers,<br />une exécution sur mesure.
            </h2>
            <p className="mt-5 text-foreground/70 max-w-2xl mx-auto italic" style={{ fontFamily: "var(--font-serif)" }}>
              Faites défiler chaque écran à votre rythme — chaque page a été pensée pour son public.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Friterie */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display uppercase tracking-widest text-sm bg-yellow border-brutal px-3 py-1 -rotate-1 inline-block">
                  ▸ Friterie & Food Truck
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                  Scroll ↓
                </span>
              </div>
              <div className="bg-foreground rounded-[14px] p-2 shadow-brutal-lg border-brutal-thick">
                <div className="flex items-center gap-1 pb-1.5 px-1">
                  <span className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="w-2 h-2 rounded-full bg-yellow" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="bg-background rounded-md overflow-y-auto overflow-x-hidden h-[520px] border border-foreground/10 scroll-smooth">
                  <img
                    src={friterieFull}
                    alt="Maquette complète de la page Friterie : carte, menu et localisation"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Carte complète, classiques du fritkot belge, sauces & localisation du food truck en direct.
              </p>
            </div>

            {/* Traiteur */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display uppercase tracking-widest text-sm bg-violet text-primary-foreground border-brutal px-3 py-1 rotate-1 inline-block">
                  ▸ Traiteur & Privatisation
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                  Scroll ↓
                </span>
              </div>
              <div className="bg-foreground rounded-[14px] p-2 shadow-brutal-lg border-brutal-thick">
                <div className="flex items-center gap-1 pb-1.5 px-1">
                  <span className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="w-2 h-2 rounded-full bg-yellow" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="bg-background rounded-md overflow-y-auto overflow-x-hidden h-[520px] border border-foreground/10 scroll-smooth">
                  <img
                    src={traiteurFull}
                    alt="Maquette complète de la page Traiteur : philosophie, menus, témoignages"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Menus sur mesure, témoignages clients & formulaire de devis pour événements privés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copywriting */}
      <section className="px-6 py-24 bg-violet text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-yellow mb-6">
            04 / Copywriting
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
            05 / Détails techniques
          </div>
          <h2
            className="leading-[0.95] mb-12"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            Produits signatures.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="border-brutal-thick bg-background hover-pop overflow-hidden">
              <div className="bg-yellow border-b-[3px] border-foreground p-4">
                <div className="overflow-hidden border-brutal-square blob-1 shadow-brutal">
                  <img src={burgerKlorquet} alt="Le K'Lorquet — burger au Blanc-Bleu Belge" className="w-full h-56 object-cover block" loading="lazy" />
                </div>
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

            <article className="border-brutal-thick bg-background hover-pop overflow-hidden">
              <div className="bg-violet border-b-[3px] border-foreground p-4">
                <div className="overflow-hidden border-brutal-square blob-2 shadow-brutal">
                  <img src={burgerLiegeois} alt="Le Liégeois Noir — burger au boudin noir" className="w-full h-56 object-cover block" loading="lazy" />
                </div>
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
