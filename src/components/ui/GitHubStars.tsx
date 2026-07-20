import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const REPO = "victorsnz/git-journey";
const GITHUB_URL = `https://github.com/${REPO}`;

export function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO}`)
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars(null));
  }, []);

  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-surface border border-border rounded-lg hover:bg-border-soft hover:border-accent/40 hover:text-accent transition-all duration-200"
    >
      <Star className="size-4" />
      <span>dejame una estrellita en GitHub</span>
      {stars !== null && (
        <span className="flex items-center gap-1 ml-1 text-xs text-muted bg-elevated px-2 py-0.5 rounded-full tabular-nums">
          <Star className="size-3 fill-accent text-accent" />
          {stars}
        </span>
      )}
    </a>
  );
}
