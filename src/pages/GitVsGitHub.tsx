import { Section } from "../components/layout/Section";

export function GitVsGitHub() {
  return (
    <Section id="git-vs-github">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>Git vs GitHub</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-6">
        Dos conceptos distintos que trabajan juntos
      </h2>

      <div className="h-px bg-border-soft mb-8" />

      <p className="text-muted leading-relaxed text-justify">
      Git y GitHub están estrechamente vinculados para que trabajar con ellos sea una experiencia fluida. Mientras que Git se encarga del control de versiones subyacente, GitHub es la plataforma de colaboración construida sobre él. 
      GitHub es el lugar para las solicitudes de incorporación de cambios (pull request), los comentarios (comments), las revisiones (reviews), las pruebas integradas y mucho más. La mayoría de los desarrolladores trabajan localmente para desarrollar y usan GitHub para colaborar. Esto abarca desde usar GitHub para alojar el repositorio remoto compartido hasta trabajar con colegas y aprovechar funciones como las ramas protegidas, la revisión de código, GitHub Actions y más.
      Entonces:
      </p>
      <ul className="space-y-3 mt-4">
        <li className="flex gap-3 text-muted leading-relaxed text-justify">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span>Git: Es la herramienta de software que instalas localmente para gestionar las versiones y el historial de tu código</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed text-justify">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span>GitHub: Es una plataforma en la nube que aloja tus repositorios de Git y facilita la colaboración mediante herramientas adicionales como revisión de código y gestión de proyectos</span>
        </li>
      </ul>
    </Section>
  );
}
