import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Section } from "../components/layout/Section";
import { cn } from "../lib/utils";

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
}

const demoSteps: ChecklistItem[] = [
  { id: "init", label: "Crear repositorio", description: "mkdir mi-proyecto && git init" },
  { id: "file", label: "Crear archivo", description: "echo '# Mi proyecto' > README.md" },
  { id: "status", label: "Ver estado", description: "git status" },
  { id: "add", label: "Preparar cambios", description: "git add README.md" },
  { id: "commit", label: "Guardar cambios", description: 'git commit -m "Initial commit"' },
  { id: "push", label: "Subir cambios", description: "git push origin main" },
];

const STORAGE_KEY = "git-journey-live-demo";

function loadChecked(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw));
  } catch {
    return new Set();
  }
}

function saveChecked(checked: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
}

export function LiveDemo() {
  const [checked, setChecked] = useState<Set<string>>(loadChecked);

  useEffect(() => {
    saveChecked(checked);
  }, [checked]);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Section id="demo-en-vivo">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>Demo en vivo</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-3">
        Sigue la demostración
      </h2>

      <p className="text-muted leading-relaxed text-justify mb-10 max-w-lg">
        Marca cada paso a medida que lo ejecutás en la terminal.
      </p>

      <div className="border border-border rounded-md divide-y divide-border-soft">
        {demoSteps.map((step) => {
          const isDone = checked.has(step.id);
          return (
            <button
              key={step.id}
              onClick={() => toggle(step.id)}
              className={cn(
                "w-full flex items-center gap-4 px-5 py-4 text-left transition-colors",
                isDone ? "bg-accent-soft" : "hover:bg-surface"
              )}
            >
              <span
                className={cn(
                  "size-5 rounded-[4px] border flex items-center justify-center shrink-0 transition-all",
                  isDone
                    ? "bg-accent border-accent text-background"
                    : "border-border"
                )}
              >
                {isDone && <Check className="size-3.5" strokeWidth={2.5} />}
              </span>
              <div className="flex-1 min-w-0">
                <span
                  className={cn(
                    "text-sm block leading-snug",
                    isDone && "text-muted line-through"
                  )}
                >
                  {step.label}
                </span>
                <code
                  className={cn(
                    "text-xs font-mono mt-0.5 block",
                    isDone ? "text-muted/50" : "text-muted"
                  )}
                >
                  $ {step.description}
                </code>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-muted">
        <span className="font-mono text-accent">{checked.size}</span>
        <span>/</span>
        <span className="font-mono">{demoSteps.length}</span>
        <span className="ml-1">completados</span>
        {checked.size === demoSteps.length && (
          <span className="text-accent font-medium ml-2">— Todo listo</span>
        )}
      </div>
    </Section>
  );
}
