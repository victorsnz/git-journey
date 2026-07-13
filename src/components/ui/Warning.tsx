import { TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

interface WarningProps {
  title?: string;
  children: ReactNode;
}

export function Warning({ title, children }: WarningProps) {
  return (
    <div className="border border-border rounded-md p-5">
      {title && (
        <div className="flex items-center gap-2 mb-2.5">
          <TriangleAlert className="size-4 text-muted" />
          <span className="text-sm font-medium text-foreground">{title}</span>
        </div>
      )}
      <div className="text-sm text-muted leading-relaxed">{children}</div>
    </div>
  );
}
