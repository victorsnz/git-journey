import { Section } from "../components/layout/Section";

export function Installation() {
  return (
    <Section id="instalacion">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>Instalación</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-6">
        Prepara tu entorno de trabajo
      </h2>

      <div className="h-px bg-border-soft mb-8" />

      <p className="text-muted leading-relaxed">
        Contenido pendiente...
      </p>
    </Section>
  );
}
