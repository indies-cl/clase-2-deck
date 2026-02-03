"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AttendeesSection() {
  return (
    <>
      <section id="attendees" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Estadísticas]
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <span className="text-4xl text-primary block">[+150]</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Asistentes
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <span className="text-4xl text-primary block">[10]</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Speakers
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <span className="text-4xl text-primary block">[15hrs]</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Contenido
              </span>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
