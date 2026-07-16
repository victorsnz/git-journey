import { Section } from "../components/layout/Section";

export function Sources() {
  return (
    <Section id="fuentes">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>Fuentes</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-6">
        Links de referencia para profundizar en el tema
      </h2>

      <div className="h-px bg-border-soft mb-8" />

      <ul className="space-y-3 mt-4">
        <li className="flex gap-3 text-muted leading-relaxed ">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <a href="https://github.com/git-guides" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://github.com/git-guides</a>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed ">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <a href="https://rogerdudler.github.io/git-guide/index.es.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://rogerdudler.github.io/git-guide/index.es.html</a>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed ">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <a href="https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/</a>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed ">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <a href="https://git-scm.com/book/es/v2" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://git-scm.com/book/es/v2</a>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed ">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <a href="https://docs.github.com/es/get-started/start-your-journey/what-is-github" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://docs.github.com/es/get-started/start-your-journey/what-is-github</a>
        </li>
      </ul>
    </Section>
  );
}
