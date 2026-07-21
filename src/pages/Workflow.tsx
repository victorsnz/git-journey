import { Section } from "../components/layout/Section";
import { Terminal } from "../components/ui/Terminal";

export function Workflow() {
  return (
    <Section id="flujo-de-trabajo">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>Flujo de trabajo</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-6">
        El ciclo de vida de los cambios en Git
      </h2>

      <div className="h-px bg-border-soft mb-8" />

      <p className="text-muted leading-relaxed text-justify">
        Es el proceso por el cual tus archivos pasan desde que son modificados localmente hasta que se registran permanentemente en el historial de versiones de Git.
      </p>
      <p className="text-muted leading-relaxed text-justify mt-4">
        Se divide principalmente en tres estados locales y uno remoto:
      </p>
      <ul className="space-y-3 mt-4">
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span>
            <strong>Directorio de Trabajo (Working Directory):</strong> Es el estado inicial donde te encontrás realizando modificaciones en tus archivos utilizando tu editor de texto o IDE preferido. En esta etapa, los cambios existen solo en tu computadora y Git aún no los está rastreando formalmente para una nueva versión.
          </span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span>
            <strong>Área de Preparación (Staging Area o Index):</strong> Cuando decidís que un cambio está listo para ser guardado, utilizás el comando <code className="text-xs font-mono text-accent">git add [archivo]</code>. Este comando toma una instantánea (snapshot) de los archivos y los coloca en el Index. Es una zona intermedia donde agrupás todos los cambios que deseás incluir en tu próxima confirmación formal.
          </span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span>
            <strong>Repositorio Local (HEAD):</strong> Una vez que preparaste tus cambios en el área de preparación, ejecutás <code className="text-xs font-mono text-accent">git commit -m "mensaje descriptivo"</code>. En este punto, los cambios se registran permanentemente en el historial de versiones local. El HEAD es el puntero que indica en qué confirmación (commit) te encontrás trabajando actualmente dentro de tu rama.
          </span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span>
            <strong>Repositorio Remoto (Remote):</strong> Para que otros colaboradores puedan ver tu trabajo en plataformas como GitHub, el ciclo se completa con la sincronización remota: <code className="text-xs font-mono text-accent">git push</code> sube tus commits locales al servidor remoto, y <code className="text-xs font-mono text-accent">git pull</code> descarga e incorpora los cambios realizados por otros colaboradores en tu rama local actual.
          </span>
        </li>
      </ul>

      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
        Comandos para monitorear el ciclo
      </h3>
      <ul className="space-y-3">
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><code className="text-xs font-mono text-accent">git status</code>: Es fundamental en cualquier etapa, ya que te muestra en qué parte del ciclo se encuentran tus archivos: si están modificados (Working Directory), preparados (Staging) o si no hay cambios pendientes.</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><code className="text-xs font-mono text-accent">git diff</code>: Permite ver las diferencias exactas de los archivos que aún no han sido enviados al área de preparación.</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><code className="text-xs font-mono text-accent">git log</code>: Te permite inspeccionar la evolución de los commits ya realizados en el historial.</span>
        </li>
      </ul>

      <div className="mt-12">
        <p className="text-muted text-sm mb-4">Observá el ciclo completo en acción:</p>
        <Terminal
          lines={[
            { command: "git init", output: "Initialized empty Git repository in ~/mi-proyecto/.git/" },
            { command: "echo '# Mi Proyecto' > README.md", output: "" },
            { command: "git add README.md", output: "" },
            { command: 'git commit -m "Initial commit"', output: "[main (root-commit) a1b2c3d] Initial commit\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md" },
            { command: "git remote add origin https://github.com/usuario/mi-proyecto.git", output: "" },
            { command: "git push -u origin main", output: "Enumerating objects: 3, done.\nCounting objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 232 bytes | 232.00 KiB/s, done.\nTotal 3 (delta 0), reused 0 (delta 0)\nTo https://github.com/usuario/mi-proyecto.git\n * [new branch]      main -> main\nBranch 'main' set up to track remote branch 'main' from 'origin'." },
          ]}
        />
      </div>
    </Section>
  );
}
