import { Section } from "../components/layout/Section";

export function BestPractices() {
  return (
    <Section id="buenas-practicas">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>Buenas prácticas</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-6">
        Consejos para trabajar en equipo con Git
      </h2>

      <div className="h-px bg-border-soft mb-8" />

      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
        Estrategia de Ramas (Branching)
      </h3>
      <ul className="space-y-3">
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Nunca trabajes directamente en la rama principal:</strong> Es un error común intentar modificar <code className="text-xs font-mono">main</code> o <code className="text-xs font-mono">master</code> directamente. En su lugar, creá una rama independiente para cada nueva funcionalidad o corrección de errores para trabajar de forma aislada y segura.</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Ramas por propósito, no por persona:</strong> Las ramas deben crearse basándose en la función o característica en la que se está trabajando.</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Convenciones de nombres:</strong> Nombra tus ramas de forma descriptiva según su objetivo, por ejemplo: <code className="text-xs font-mono">feature/nueva-interfaz</code> o <code className="text-xs font-mono">bugfix/correccion-error</code>.</span>
        </li>
      </ul>

      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
        Gestión de Commits
      </h3>
      <ul className="space-y-3">
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Hacé commits pronto y seguido:</strong> Realizar confirmaciones frecuentes evita el riesgo de perder trabajo y permite volver a estados anteriores con mayor facilidad si algo sale mal.</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Commits atómicos:</strong> Cada commit debe registrar un cambio específico para que el historial sea legible y fácil de revisar.</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Mensajes claros y descriptivos:</strong> Cada commit debe ir acompañado de un mensaje que explique con precisión qué cambios se realizaron. Un historial de commits confuso dificulta la trazabilidad de errores.</span>
        </li>
      </ul>

      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
        Sincronización y Colaboración
      </h3>
      <ul className="space-y-3">
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Sincronizá tu trabajo continuamente:</strong> Para evitar conflictos mayores, descargá e incorporá los cambios de tus compañeros frecuentemente usando <code className="text-xs font-mono">git pull</code>.</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Pull antes de Push:</strong> Si el repositorio remoto tiene commits nuevos que vos no tenés localmente, Git va a bloquear tu subida. Primero ejecutá un <code className="text-xs font-mono">git pull</code>, resolve los conflictos y luego intentá el <code className="text-xs font-mono">git push</code> nuevamente.</span>
        </li>
      </ul>

      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
        Limpieza del Proyecto
      </h3>
      <ul className="space-y-3">
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Usá el archivo <code className="text-xs font-mono">.gitignore</code>:</strong> Configuralo para evitar que archivos temporales, dependencias pesadas o datos sensibles se suban accidentalmente al repositorio.</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span><strong>Borrá ramas fusionadas:</strong> Una vez que una rama fue integrada en la rama principal, borrala para mantener el repositorio limpio y organizado.</span>
        </li>
      </ul>
    </Section>
  );
}
