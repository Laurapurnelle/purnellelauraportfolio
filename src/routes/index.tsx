import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laura Purnelle — Designer UI/UX à Liège" },
      {
        name: "description",
        content:
          "Portfolio de Laura Purnelle, designer UI/UX junior basée à Liège. Interfaces sensibles, expériences utilisateurs soignées et identités visuelles raffinées.",
      },
      { property: "og:title", content: "Laura Purnelle — Designer UI/UX" },
      {
        property: "og:description",
        content:
          "Designer UI/UX junior à Liège. Interfaces qui ont du cœur, du sens et un brin de poésie.",
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
      <Contact />
    </main>
  );
}
