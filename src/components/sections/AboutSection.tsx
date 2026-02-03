"use client";

import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <>
      <section id="about" className="mb-16 pt-8">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Sobre clase 2.0]
        </h2>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            La Clase nació en 2019 como un espacio único donde fundadores que construyeron startups chilenas de clase mundial compartieron, sin filtros, cómo se crean cosas que importan. Su misión fue acercar el conocimiento real del emprendimiento el que no está en libros a quienes querían construir, aprender y atreverse.</p>
          <p>
            La Clase 2.0 retoma ese espíritu y lo abre a toda la comunidad 150 personas en cinco días, con diez clases elegidas por la gente, dictadas por los founders que están construyendo hoy. Buscamos transmitir conocimiento práctico, inspirar a la próxima generación y volver a juntar a la comunidad tech alrededor de ideas, oficio y criterio.</p>
        </div>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
