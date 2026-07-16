import { Section } from "../components/layout/Section";

export function WhatIsGit() {
  return (
    <Section id="que-es-git">
      <div className="flex items-center gap-2 text-xs font-mono text-muted mb-10 uppercase tracking-widest">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>¿Qué es Git?</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-6">
        Sistema de control de versiones distribuido
      </h2>

      <div className="h-px bg-border-soft mb-8" />

      <p className="text-muted leading-relaxed ">
        Git es un software de control de versiones distribuido. El control de versiones es una forma de guardar los cambios a lo largo del tiempo sin sobrescribir las versiones anteriores. Que sea distribuido significa que cada desarrollador que trabaja con un repositorio de Git tiene una copia completa de ese repositorio: cada confirmación, cada rama, cada archivo.
      </p>

      <p className="text-muted leading-relaxed mt-4 ">
        Independientemente de si trabajaste antes con control de versiones o no, hay algunas cosas que tenés que saber antes de empezar con Git:
      </p>

      <ul className="space-y-3 mt-4">
        <li className="flex gap-3 text-muted leading-relaxed ">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span>Las ramas son ligeras y de bajo costo, así que está bien tener muchas de ellas</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed ">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span>Git almacena los cambios en hash SHA, que funcionan comprimiendo archivos de texto. Eso hace que Git sea un muy buen sistema de control de versiones (VCS) para la programación de software, pero no tan bueno para archivos binarios como imágenes o videos.</span>
        </li>
        <li className="flex gap-3 text-muted leading-relaxed ">
          <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
          <span>Los repositorios de Git se pueden conectar, así que podés trabajar en uno localmente en tu propia computadora y conectarlo a un repositorio compartido. De esta manera, podés enviar y recibir cambios a un repositorio y colaborar fácilmente con otras personas.</span>
        </li>
      </ul>

      <h3 className="text-xl font-normal tracking-tight text-foreground leading-tight my-6">
        ¿Por qué usar Git?
      </h3>

      <p className="text-muted leading-relaxed ">
        El control de versiones es muy importante: sin él, corres el riesgo de perder tu trabajo. Con Git, podés hacer un «commit», o un punto de guardado, tantas veces como quieras. También podés volver a commits anteriores. Esto te quita presión mientras trabajas. Hacé commits con frecuencia y desde el principio, y nunca tendrás esa sensación de pánico al sobrescribir o perder cambios.
      </p>
    </Section>
  );
}
