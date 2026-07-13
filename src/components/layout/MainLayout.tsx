import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface MainLayoutProps {
  activeSection: string;
  children: ReactNode;
}

export function MainLayout({ activeSection, children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar activeSection={activeSection} />
      <main className="pl-64" id="main-content">
        {children}
      </main>
    </div>
  );
}
