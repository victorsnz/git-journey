import type { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
}

export function Callout({ children }: CalloutProps) {
  return (
    <div className="border-l-2 border-accent pl-5 py-1.5">
      <div className="text-sm text-muted leading-relaxed">{children}</div>
    </div>
  );
}
