import { Section } from "../components/layout/Section";

export function WhatIsGit() {
  return (
    <Section id="que-es-git">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>¿Qué es Git?</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-6">
        Sistema de control de versiones distribuido
      </h2>

      <div className="h-px bg-border-soft mb-8" />

      <p className="text-muted leading-relaxed">
        Contenido pendiente...
      </p>
    </Section>
  );
}
