"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function DeadlinesSection() {
  return (
    <>
      <section id="deadlines" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Fechas límite]
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-primary text-sm uppercase tracking-wider mb-2">
                Primera fecha límite
              </h3>
              <Badge className="mb-4">[15 de Febrero]</Badge>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Logo en stickers y merch asegurado</li>
                <li>• Mención de sponsor en publicaciones tempranas de difusión del evento</li>
                <li>• Máxima visibilidad</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-primary text-sm uppercase tracking-wider mb-2">
                Última llamada
              </h3>
              <Badge variant="secondary" className="mb-4">
                [27 de Febrero]
              </Badge>
              <p className="text-xs text-muted-foreground">
                Fecha limite para confirmar el sponsor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
