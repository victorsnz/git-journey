interface TerminalLine {
  input?: string;
  output?: string;
}

interface TerminalProps {
  lines: TerminalLine[];
}

export function Terminal({ lines }: TerminalProps) {
  return (
    <div className="border border-border rounded-md overflow-hidden bg-[#08080a]">
      <div className="flex items-center gap-1.5 px-4 h-9 bg-elevated border-b border-border-soft">
        <span className="size-2 rounded-full bg-[#4a4a4d]" />
        <span className="size-2 rounded-full bg-[#4a4a4d]" />
        <span className="size-2 rounded-full bg-[#4a4a4d]" />
        <span className="ml-2 text-[11px] text-muted font-mono tracking-wide uppercase">
          terminal
        </span>
      </div>
      <div className="p-5 space-y-2.5 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div key={i}>
            {line.input && (
              <div className="flex gap-2.5">
                <span className="text-accent shrink-0 select-none">$</span>
                <span className="text-foreground">{line.input}</span>
                {i === lines.length - 1 && (
                  <span className="inline-block size-[7px] bg-muted animate-[blink_1s_step-end_infinite] mt-[7px]" />
                )}
              </div>
            )}
            {line.output && (
              <div className="text-muted pl-5">{line.output}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
