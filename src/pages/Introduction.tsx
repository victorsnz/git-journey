import { GitBranch } from "lucide-react";
import { Section } from "../components/layout/Section";

export function Introduction() {
  return (
    <div className="relative">
      <img
        src={`${import.meta.env.BASE_URL}images/git.png`}
        alt=""
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 h-3/5 opacity-5 pointer-events-none select-none"
      />
      <Section id="introduccion" variant="hero">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-12 uppercase tracking-widest">
        <GitBranch className="size-3.5" />
        <span>/</span>
        <span>Introducción</span>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight text-foreground leading-[1.08] mb-5">
        Git es la historia
        <br />
        de tu proyecto
      </h1>

      <p className="text-lg text-muted leading-relaxed text-justify max-w-xl mb-12">
        Una guía para entender Git y GitHub durante la Hackathon.
      </p>

      <div className="flex items-center gap-4 text-sm">
        <span className="text-muted">Comienza a explorar</span>
        <span className="text-border-soft">—</span>
        <button
          onClick={() => {
            document.getElementById("que-es-git")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-accent hover:text-foreground transition-colors"
        >
          ¿Qué es Git? ↓
        </button>
      </div>
    </Section>
    </div>
  );
}
