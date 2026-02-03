"use client";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function LocationSection() {
  return (
    <>
      <section id="location" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Ubicación]
        </h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-72 h-56 border-2 border-dashed border-primary/40 flex items-center justify-center text-primary/60 text-sm overflow-hidden flex-shrink-0">
            <img src="/images/auditorio.jpg" alt="auditorio-la-clase" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <Card className="border-primary border-2 bg-primary/10">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="text-center flex-shrink-0 w-full sm:w-auto">
                    <span className="text-2xl block mb-2">⌂</span>
                    <CardTitle className="text-primary uppercase text-xs tracking-wider">
                      Venue
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-2">
                      [AUDITORIO D'ETIGNY]
                    </p>
                  </div>
                  <Separator orientation="vertical" className="hidden sm:block h-16" />
                  <div className="flex-shrink-0 text-center w-full sm:w-auto">
                    <p className="text-xs text-muted-foreground mb-2">
                    </p>
                    <div className="px-3 py-2 border-2 border-dashed border-primary/40 text-xs text-primary/60 bg-card/50 inline-block">
                      [UNIVERSIDAD DE CHILE]
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col justify-center">
              <h3 className="text-primary text-lg">[UNIVERSIDAD DE CHILE]</h3>
              <p className="text-muted-foreground text-sm">[BEAUCHEF 851, SANTIAGO] (EL MISMO DONDE SE HIZO LA CLASE ORIGINAL).</p>
            </div>
          </div>
        </div>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
