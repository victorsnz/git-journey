export interface NavSection {
  id: string;
  label: string;
}

export const navigation: NavSection[] = [
  { id: "introduccion", label: "Introducción" },
  { id: "que-es-git", label: "¿Qué es Git?" },
  { id: "git-vs-github", label: "Git vs GitHub" },
  { id: "instalacion", label: "Instalación" },
  { id: "flujo-de-trabajo", label: "Flujo de trabajo" },
  { id: "demo-en-vivo", label: "Demo en vivo" },
  { id: "buenas-practicas", label: "Buenas prácticas" },
  { id: "cheat-sheet", label: "Cheat Sheet" },
];
