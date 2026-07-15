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

      <p className="text-muted leading-relaxed">
      Estrategia de Ramas (Branching)
      </p>
      <p className="text-muted leading-relaxed">
      <strong>Nunca trabajes directamente en la rama principal:</strong> Es un error común intentar modificar main o master directamente. En su lugar, crea una rama independiente para cada nueva funcionalidad o corrección de error para trabajar de forma aislada y segura
      </p>
      <p className="text-muted leading-relaxed">
        <strong>Ramas por propósito, no por persona:</strong> Las ramas deben crearse basándose en la función o característica en la que se está trabajando.</p>
        <p className="text-muted leading-relaxed">
        <strong>Convenciones de nombres:</strong> Nombra tus ramas de forma descriptiva según su objetivo, por ejemplo: feature/nueva-interfaz o bugfix/correccion-error
        </p>
        <p className="text-muted leading-relaxed">
          Gestión de Commits
        </p>
        <p className="text-muted leading-relaxed">Haz commits pronto y seguido: Realizar confirmaciones frecuentes evita el riesgo de perder trabajo y permite volver a estados anteriores con mayor facilidad si algo sale mal</p>
        <p className="text-muted leading-relaxed">Mensajes claros y descriptivos: Cada commit debe ir acompañado de un mensaje que explique con precisión qué cambios se realizaron. Un historial de commits confuso dificulta la trazabilidad de errores</p>
<p className="text-muted leading-relaxed">
<strong>Mensajes claros y descriptivos:</strong> Cada commit debe ir acompañado de un mensaje que explique con precisión qué cambios se realizaron. Un historial de commits confuso dificulta la trazabilidad de errores
</p>
<p className="text-muted leading-relaxed">
  <strong>Commits atómicos:</strong> Intenta que cada commit registre un cambio específico para que el historial sea legible y fácil de revisa</p>
  <p className="text-muted leading-relaxed">Sincronización y Colaboración</p>
  <p className="text-muted leading-relaxed">
    <strong>Sincroniza tu trabajo continuamente:</strong> Para evitar conflictos mayores, descarga e incorpora los cambios de tus compañeros frecuentemente usando git pull</p>
    <p className="text-muted leading-relaxed">
    <strong>Pull antes de Push:</strong> Si el repositorio remoto tiene commits nuevos que tú no tienes localmente, Git bloqueará tu subida. Primero debes ejecutar un pull, resolver posibles conflictos y luego intentar el push nuevamente
    </p>
    <p className="text-muted leading-relaxed">Limpieza del Proyecto</p>
    <p className="text-muted leading-relaxed">
      <strong> Usa el archivo .gitignore:</strong> Configura este archivo para evitar que archivos temporales, dependencias pesadas o datos sensibles se suban accidentalmente al repositorio</p>
      <p className="text-muted leading-relaxed">
        <strong>Borra ramas fusionadas:</strong> Una vez que una rama ha sido integrada en la rama principal, bórrala para mantener el repositorio limpio y organizado</p>
    </Section>
  );
}
