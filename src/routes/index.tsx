import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function WipBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div
      role="status"
      className="relative z-[100] flex items-center justify-between gap-3 px-4 py-2.5 border-b-[3px] border-foreground text-xs font-bold uppercase tracking-widest"
      style={{ background: "var(--orange)", color: "var(--cream)" }}
    >
      <div className="flex-1 text-center leading-snug">
        ✦ Portfolio en cours de création — ce n'est pas le résultat final ✦
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Fermer la bannière"
        className="shrink-0 w-7 h-7 flex items-center justify-center border-[2px] border-[var(--cream)] rounded-full hover:bg-[var(--cream)] hover:text-[var(--orange)] transition-colors"
      >
        ✕
      </button>
    </div>
  );
}

function Index() {
  return (
    <main id="main-content" className="bg-background text-foreground overflow-x-hidden">
      <WipBanner />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
    </main>
  );
}
