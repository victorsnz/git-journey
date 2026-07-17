export interface GitCommand {
  command: string;
  description: string;
  example?: string;
}

export const commands: GitCommand[] = [
  {
    command: "git init",
    description: "Inicializa un nuevo repositorio de Git en el directorio actual.",
    example: "git init",
  },
  {
    command: "git clone <url>",
    description: "Clona un repositorio remoto en tu máquina local.",
    example: "git clone https://github.com/usuario/repo.git",
  },
  {
    command: "git status",
    description: "Muestra el estado actual del repositorio: archivos modificados, en staged, etc.",
    example: "git status",
  },
  {
    command: "git add <archivo>",
    description: "Agrega archivos al área de staging (prepara para commit).",
    example: "git add index.html",
  },
  {
    command: "git commit -m \"mensaje\"",
    description: "Crea un commit con los archivos del área de staging.",
    example: 'git commit -m "feat: add login form"',
  },
  {
    command: "git push",
    description: "Sube los commits locales al repositorio remoto.",
    example: "git push origin main",
  },
  {
    command: "git pull",
    description: "Trae los cambios del repositorio remoto y los fusiona con tu rama local.",
    example: "git pull origin main",
  },
  {
    command: "git switch",
    description: "Cambia a una rama diferente.",
    example: "git switch develop",
  },
  {
    command: "git log",
    description: "Muestra el historial de commits del repositorio.",
    example: "git log --oneline",
  },
  {
    command: "git restore <archivo>",
    description: "Descarta cambios locales en un archivo, restaurándolo a su último estado commitado.",
    example: "git restore index.html",
  },
];
