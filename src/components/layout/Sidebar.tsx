import { navigation } from "../../data/navigation";
import { cn } from "../../lib/utils";

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 border-r border-border bg-background flex flex-col z-50 select-none">
      <div className="flex items-center gap-3 px-6 h-14 border-b border-border shrink-0">
        <span className="size-2 rounded-full bg-accent" />
        <span className="text-sm font-semibold text-foreground tracking-tight">
          Git Journey
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto py-5 px-3" aria-label="Secciones">
        <ul className="space-y-0.5">
          {navigation.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={cn(
                    "relative w-full text-left px-3 py-2 rounded-[5px] text-sm transition-all",
                    "hover:bg-surface",
                    isActive
                      ? "text-foreground bg-surface font-medium"
                      : "text-muted"
                  )}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 size-1 rounded-full bg-accent" />
                  )}
                  <span className={cn("pl-3", isActive && "pl-3")}>
                    {section.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-6 py-4 border-t border-border">
        <div className="flex items-center gap-2.5">
          <span className="text-xs text-muted">Hackathon 2026</span>
          <span className="size-1 rounded-full bg-border" />
          <span className="text-xs text-muted/50">v1.0</span>
        </div>
      </div>
    </aside>
  );
}
