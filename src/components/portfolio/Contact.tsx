export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/40 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blush/50 blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <span className="text-sm tracking-widest uppercase text-primary/80">
          04 — Contact
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
          Et si on créait <br />
          <span className="italic text-gradient">quelque chose de joli</span> ensemble ?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          J'adorerais entendre parler de votre projet. Écrivez-moi un mot, je
          vous réponds en moins de 48h, café à la main.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="mailto:hello@laurapurnelle.be"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            hello@laurapurnelle.be
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/30 text-primary font-medium hover:bg-primary/5 transition-all"
          >
            Télécharger mon CV
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 pt-12 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <a href="#" className="hover:text-primary transition-colors">
            Behance
          </a>
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <a href="#" className="hover:text-primary transition-colors">
            Dribbble
          </a>
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <a href="#" className="hover:text-primary transition-colors">
            Instagram
          </a>
        </div>

        <footer className="pt-16 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Laura Purnelle — Designed with ♡ in Liège
        </footer>
      </div>
    </section>
  );
}
