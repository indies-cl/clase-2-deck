"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function PackagesSection() {
  return (
    <>
      <section id="packages" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Paquetes para sponsors]
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="border-border">
            <CardHeader className="border-b border-border pb-4">
              <div className="text-center">
                <span className="text-2xl block mb-2">◇</span>
                <CardTitle className="text-primary uppercase text-sm tracking-wider">
                  Lindie
                </CardTitle>
                <p className="text-2xl mt-2">$[500]</p>
                <span className="text-xs text-muted-foreground">USD</span>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="text-xs space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Stickers pequeños con el logo de tu empresa.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Aparacion en la landing page.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  3 Spots reservados para el evento.
                </li>
              </ul>
              <Separator className="my-4" />
              <p className="text-xs text-muted-foreground mb-2">
                Sponsors confirmados:
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="px-3 py-1 border border-dashed border-primary/40 text-xs text-primary/60">
                  [Markip]
                </div>
                <div className="px-3 py-1 border border-dashed border-primary/40 text-xs text-primary/60">
                  [Miguel Paz]
                </div>
                <div className="px-3 py-1 border border-dashed border-primary/40 text-xs text-primary/60">
                  [Reveniu]
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary">
            <CardHeader className="border-b border-primary pb-4 bg-primary/5">
              <div className="text-center">
                <span className="text-2xl block mb-2">◆</span>
                <CardTitle className="text-primary uppercase text-sm tracking-wider">
                  Jeff Bezos
                </CardTitle>
                <p className="text-2xl mt-2">$[1,000]</p>
                <span className="text-xs text-muted-foreground">USD</span>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="text-xs space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Todo lo del plan Basic
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Stickers grandes junto a los de indies.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Marca destacada en la presentación de inicio y cierre del evento.
                </li>
              </ul>
              <Separator className="my-4" />
              <p className="text-xs text-muted-foreground mb-2">
                Sponsors confirmados:
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="px-3 py-1 border border-dashed border-primary/40 text-xs text-primary/60">
                  [CChC]
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary border-2 bg-primary/5">
            <CardHeader className="border-b border-primary pb-4">
              <div className="text-center">
                <span className="text-2xl block mb-2">★</span>
                <CardTitle className="text-primary uppercase text-sm tracking-wider">
                  Mc Pato
                </CardTitle>
                <p className="text-2xl mt-2">$[2,000]</p>
                <span className="text-xs text-muted-foreground">USD</span>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="text-xs space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Todo lo del plan Partner
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Segmento de 20 minutos para hablarle a toda la audiencia.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Protagonismo completo "La clase by Indies x Mc Pato"
                </li>
              </ul>
              <Separator className="my-4" />
              <p className="text-xs text-muted-foreground mb-2">
                Sponsor confirmado:
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="px-4 py-2 border border-dashed border-primary/40 text-xs text-primary/60">
                  [LOGO]
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
