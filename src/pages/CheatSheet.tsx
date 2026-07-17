import { Section } from "../components/layout/Section";
import { Command } from "../components/ui/Command";
import { commands } from "../data/commands";

export function CheatSheet() {
  return (
    <Section id="cheat-sheet">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>Cheat Sheet</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-3">
        Comandos esenciales
      </h2>

      <p className="text-muted leading-relaxed text-justify mb-10 max-w-lg">
        Los comandos que más vas a usar durante la Hackathon.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {commands.map((cmd) => (
          <Command
            key={cmd.command}
            command={cmd.command}
            description={cmd.description}
            example={cmd.example}
          />
        ))}
      </div>
    </Section>
  );
}
