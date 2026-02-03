"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function EventSection() {
  return (
    <>
      <section id="event" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [El evento]
        </h2>
        <p className="text-sm leading-relaxed mb-6">
          La Clase 2.0 es un ramo abierto de charlas en vivo, en donde fundadores cuentan sus trayectorias reales, las cuales no aparecen en los periodicos y además te enseñan los aprendizajes y vivencias de su camino, puedes hacer preguntas que en un podcast no.</p>
        <Card className="border-primary/30">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Inicio:</span>
                <p className="text-primary">[FECHA_INICIO: 16 DE MARZO]</p>
              </div>
              <div>
                <span className="text-muted-foreground">Término:</span>
                <p className="text-primary">[FECHA_FIN: 20 DE MARZO]</p>
              </div>
              <div>
                <span className="text-muted-foreground">Inicio:</span>
                <p className="text-primary">[HORARIO: DE 6PM A 9PM]</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
