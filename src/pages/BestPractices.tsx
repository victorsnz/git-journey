import { Section } from "../components/layout/Section";

export function BestPractices() {
  return (
    <Section id="buenas-practicas">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>Buenas prácticas</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-6">
        Consejos para trabajar en equipo con Git
      </h2>

      <div className="h-px bg-border-soft mb-8" />

      <p className="text-muted leading-relaxed">
        Contenido pendiente...
      </p>
    </Section>
  );
}
