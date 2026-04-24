import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laura Purnelle — Designer UX/UI à Liège" },
      {
        name: "description",
        content:
          "Portfolio de Laura Purnelle, designer UX/UI en alternance à l'IFAPME Château Massart (Liège). Disponible jusqu'en juin 2027 pour un stage ou une alternance longue durée.",
      },
      { property: "og:title", content: "Laura Purnelle — Designer UX/UI" },
      {
        property: "og:description",
        content:
          "Designer UX/UI à Liège — transformer des problématiques complexes en expériences fluides, esthétiques et accessibles.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
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
