import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page introuvable
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function FlowerIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26" aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="16"
          cy="7"
          rx="4"
          ry="6.5"
          fill="var(--lime)"
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
      <circle cx="16" cy="16" r="6" fill="var(--magenta)" />
      <path
        d="M16 19 L16 13 M13 16 L16 13 L19 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 border-brutal-thick shadow-brutal hover-pop flex items-center justify-center cursor-pointer"
      style={{ background: "var(--background)" }}
      aria-label="Retour en haut de la page"
    >
      <FlowerIcon />
    </button>
  );
}

function Root() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-full focus:font-bold focus:text-sm focus:uppercase focus:border-brutal-thick"
        style={{ background: "var(--lime)", color: "var(--ink)" }}
      >
        Aller au contenu principal
      </a>
      <Outlet />
      <ScrollToTopButton />
    </>
  );
}

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFoundComponent,
});
