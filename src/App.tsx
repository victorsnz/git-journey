import { useActiveSection } from "./hooks/useActiveSection";
import { navigation } from "./data/navigation";
import { MainLayout } from "./components/layout/MainLayout";
import { Introduction } from "./pages/Introduction";
import { WhatIsGit } from "./pages/WhatIsGit";
import { GitVsGitHub } from "./pages/GitVsGitHub";
import { Installation } from "./pages/Installation";
import { Workflow } from "./pages/Workflow";
import { LiveDemo } from "./pages/LiveDemo";
import { BestPractices } from "./pages/BestPractices";
import { CheatSheet } from "./pages/CheatSheet";

const sectionIds = navigation.map((s) => s.id);

export default function App() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <MainLayout activeSection={activeSection}>
      <Introduction />
      <WhatIsGit />
      <GitVsGitHub />
      <Installation />
      <Workflow />
      <LiveDemo />
      <BestPractices />
      <CheatSheet />
    </MainLayout>
  );
}
