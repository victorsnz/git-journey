import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { GitHubStars } from "../ui/GitHubStars";

interface MainLayoutProps {
  activeSection: string;
  children: ReactNode;
}

export function MainLayout({ activeSection, children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="fixed -top-full left-2 z-[100] rounded-b-md bg-accent px-4 py-2 text-sm font-medium text-background transition-all focus:top-0"
      >
        Saltar al contenido
      </a>
      <Sidebar activeSection={activeSection} />
      <main className="pl-64" id="main-content">
        {children}
      </main>
      <div className="fixed top-4 right-4 z-50">
        <GitHubStars />
      </div>
    </div>
  );
}
