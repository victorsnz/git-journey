import { Section } from "../components/layout/Section";

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

      <p className="text-muted leading-relaxed">
      Es el proceso por el cual tus archivos pasan desde que son modificados localmente hasta que se registran permanentemente en el historial de versiones de Git.
      </p>
      <p className="text-muted leading-relaxed mt-4">
      Se divide principalmente en tres estados locales y uno remoto:
      </p>
      <ul className="list-disc list-inside text-muted leading-relaxed mt-4">
        <li>Directorio de Trabajo (Working Directory)</li>
        <ul className="list-disc list-inside text-muted leading-relaxed mt-4">
        Es el estado inicial donde te encontrás realizando modificaciones en tus archivos utilizando tu editor de texto o IDE preferido. En esta etapa, los cambios existen solo en tu computadora y Git aún no los está rastreando formalmente para una nueva versión
        </ul>
        <li>Área de Preparación (Staging Area o Index)</li>
        Cuando decidis que un cambio está listo para ser guardado, utilizas el comando git add [archivo]
        <ul className="list-disc list-inside text-muted leading-relaxed mt-4">
          <li>Este comando toma una "instantánea" (snapshot) de los archivos y los coloca en el Index</li>
          <li>Es una zona intermedia donde agrupas todos los cambios que deseas incluir en tu próxima confirmación formal</li>
        </ul>
        <li> Repositorio Local (Head)</li>
        <ul className="list-disc list-inside text-muted leading-relaxed mt-4">
        Una vez que has preparado tus cambios en el área de preparación, ejecutas git commit -m "mensaje descriptivo"
        <ul className="list-disc list-inside text-muted leading-relaxed mt-4">
          <li>En este punto, los cambios se registran permanentemente en el historial de versiones local</li>
          <li>El HEAD es el puntero que indica en qué confirmación (commit) te encontrás trabajando actualmente dentro de tu rama</li>
        </ul>
        </ul>
        <li>Repositorio Remoto (Remote Repository)</li>
        <ul className="list-disc list-inside text-muted leading-relaxed mt-4">
        Para que otros colaboradores puedan ver tu trabajo en plataformas como GitHub, el ciclo se completa con la sincronización remota:
        <ul className="list-disc list-inside text-muted leading-relaxed mt-4">
          <li>git push: Sube tus commits locales al servidor remoto</li>
          <li>git pull: Descarga e incorpora los cambios realizados por otros colaboradores en el repositorio remoto a tu rama local actual</li>
        </ul>
        </ul>
      </ul>

      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
      Comandos para monitorear el ciclo
      </h3>
      <ul className="list-disc list-inside text-muted leading-relaxed mt-4">
        <li>git status: Es fundamental en cualquier etapa, ya que te muestra en qué parte del ciclo se encuentran tus archivos: si están modificados (Working Directory), preparados (Staging) o si no hay cambios pendientes</li>
        <li>git diff: Permite ver las diferencias exactas de los archivos que aún no han sido enviados al área de preparación</li>
        <li>git log: Te permite inspeccionar la evolución de los commits ya realizados en el historial</li>
        </ul>
    </Section>
  );
}
