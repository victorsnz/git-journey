interface CommandProps {
  command: string;
  description: string;
  example?: string;
}

export function Command({ command, description, example }: CommandProps) {
  return (
    <div className="border border-border rounded-md">
      <div className="px-5 py-3.5 border-b border-border-soft bg-elevated">
        <code className="text-sm font-mono text-accent">{command}</code>
      </div>
      <div className="px-5 py-3.5 space-y-2.5">
        <p className="text-sm text-foreground leading-relaxed">{description}</p>
        {example && (
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-muted font-mono shrink-0">$</span>
            <code className="text-xs font-mono text-muted">{example}</code>
          </div>
        )}
      </div>
    </div>
  );
}
