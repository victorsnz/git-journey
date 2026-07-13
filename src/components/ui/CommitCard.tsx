import { GitCommit } from "lucide-react";

interface CommitCardProps {
  hash: string;
  message: string;
  author: string;
  date: string;
}

export function CommitCard({ hash, message, author, date }: CommitCardProps) {
  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center">
        <div className="size-6 rounded-full border border-border bg-surface flex items-center justify-center mt-0.5">
          <GitCommit className="size-3 text-muted" />
        </div>
        <div className="w-px flex-1 bg-border-soft min-h-8" />
      </div>
      <div className="pb-8 flex-1 min-w-0">
        <div className="flex items-baseline gap-3 mb-1.5">
          <span className="text-sm text-foreground font-medium leading-snug">
            {message}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted">
          <code className="font-mono">{hash}</code>
          <span className="text-border-soft">/</span>
          <span>{author}</span>
          <span className="text-border-soft">/</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
