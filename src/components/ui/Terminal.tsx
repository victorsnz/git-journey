import { useState, useEffect, useCallback } from "react";

interface AnimatedLine {
  command: string;
  output: string;
}

interface TerminalProps {
  lines: AnimatedLine[];
}

export function Terminal({ lines }: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typedChars, setTypedChars] = useState<number[]>(() => lines.map(() => 0));
  const [showingOutput, setShowingOutput] = useState<boolean[]>(() => lines.map(() => false));

  const advanceLine = useCallback((index: number) => {
    if (index >= lines.length) return;

    const line = lines[index];
    const maxChars = line.command.length;

    if (typedChars[index] < maxChars) {
      setTypedChars((prev) => {
        const next = [...prev];
        next[index] = Math.min(next[index] + 1, maxChars);
        return next;
      });
    } else if (!showingOutput[index]) {
      setShowingOutput((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
    } else if (visibleLines <= index) {
      setVisibleLines((prev) => prev + 1);
    }
  }, [lines, typedChars, showingOutput, visibleLines]);

  useEffect(() => {
    if (visibleLines >= lines.length) return;

    const activeIndex = visibleLines;
    const line = lines[activeIndex];
    const isFullyTyped = typedChars[activeIndex] >= line.command.length;
    const isOutputShown = showingOutput[activeIndex];

    let delay = 40;
    if (!isFullyTyped) {
      delay = 40;
    } else if (!isOutputShown) {
      delay = 300;
    } else {
      delay = 600;
    }

    const timer = setTimeout(() => advanceLine(activeIndex), delay);
    return () => clearTimeout(timer);
  }, [visibleLines, typedChars, showingOutput, lines, advanceLine]);

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
      <div className="p-5 space-y-2.5 font-mono text-sm leading-relaxed min-h-[180px]">
        {lines.slice(0, visibleLines + 1).map((line, i) => {
          const isActive = i === visibleLines;
          const typedCount = typedChars[i];
          const commandText = line.command.slice(0, typedCount);
          const isTyping = isActive && typedCount < line.command.length;

          return (
            <div key={i}>
              <div className="flex gap-2.5">
                <span className="text-accent shrink-0 select-none">$</span>
                <span className="text-foreground">{commandText}</span>
                {isTyping && (
                  <span className="inline-block size-[7px] bg-muted animate-[blink_1s_step-end_infinite] mt-[7px]" />
                )}
                {isActive && !isTyping && showingOutput[i] && visibleLines === lines.length - 1 && (
                  <span className="inline-block size-[7px] bg-muted animate-[blink_1s_step-end_infinite] mt-[7px]" />
                )}
              </div>
              {showingOutput[i] && (
                <div className="text-muted pl-5 mt-1.5">{line.output}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
