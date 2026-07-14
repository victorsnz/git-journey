import { Section } from "../components/layout/Section";

export function Installation() {
  return (
    <Section id="instalacion">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>Instalación</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-6">
        Prepara tu entorno de trabajo
      </h2>

      <div className="h-px bg-border-soft mb-8" />

      <p className="text-muted leading-relaxed">
      Cómo instalar Git en cualquier sistema operativo
      Antes de empezar a utilizar Git, tenes que instalarlo en tu computadora. Incluso si ya está instalado, este es posiblemente un buen momento para actualizarlo a su última versión.
      </p>
      <a href="https://git-scm.com/install/" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://git-scm.com/install/</a>

      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
        Instalación en Linux
      </h3>

      <p className="text-muted leading-relaxed">
        Para instalar Git en Linux, podes usar el gestor de paquetes de tu distribución. Por ejemplo, en Ubuntu, podes usar apt-get:
      </p>

      <pre className="bg-background/50 p-4 rounded-lg overflow-x-auto">
        <code className="text-xs font-mono">
          sudo apt-get install git
        </code>
      </pre>
      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
        Instalación en Windows
      </h3>
      <p className="text-muted leading-relaxed">
        Para instalar Git en Windows, podes usar el instalador de Windows:
      </p>
      <pre className="bg-background/50 p-4 rounded-lg overflow-x-auto">
        <code className="text-xs font-mono">
          https://git-scm.com/download/win
        </code>
      </pre>
      <p className="text-muted leading-relaxed">
      Utilizando la herramienta winget</p>
      <p className="text-muted leading-relaxed">
      Instala la herramienta <a href="https://learn.microsoft.com/en-us/windows/package-manager/" target="_blank" rel="noopener noreferrer" className="text-primary underline">winget</a> si aún no la tenes; luego, escribí este comando en la línea de comandos o en PowerShell:<br />
      </p>
      <pre className="bg-background/50 p-4 rounded-lg overflow-x-auto">
      <code className="text-xs font-mono">
      winget install --id Git.Git -e --source winget
      </code>
      </pre>
      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
      Configurando Git por primera vez
      </h3>
      <p className="text-muted leading-relaxed">
      Ahora que tenés Git en tu sistema, vas a querer hacer algunas cosas para personalizar tu entorno de Git. Es necesario hacer estas cosas solamente una vez en tu computadora, y se mantendrán entre actualizaciones. También podés cambiarlas en cualquier momento volviendo a ejecutar los comandos correspondientes.
      </p>
      <p className="text-muted leading-relaxed mt-4">
        Git trae una herramienta llamada git config, que te permite obtener y establecer variables de configuración que controlan el aspecto y funcionamiento de Git.
      </p>
      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
      Tu Identidad
      </h3>
      <p className="text-muted leading-relaxed">
      Lo primero que deberás hacer cuando instales Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque los "commits" de Git usan esta información, y es introducida de manera inmutable en los commits que envias:
      </p>
      <pre className="bg-background/50 p-4 rounded-lg overflow-x-auto">
        <code className="text-xs font-mono">
          git config --global user.name "Tu Nombre"
        </code>
        <br />
        <code className="text-xs font-mono mt-2">
          git config --global user.email "Tu Correo Electrónico"
        </code>
      </pre>
    </Section>
  );
}
