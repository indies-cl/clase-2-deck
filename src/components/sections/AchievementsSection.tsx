"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function AchievementsSection() {
  return (
    <>
      <section id="achievements" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Early achievements de indies.la]
        </h2>
        <p className="text-sm leading-relaxed mb-6">
          Llevamos poco tiempo, pero ya tenemos algunos logros que nos hacen muy orgullosos.
        </p>
        <ul className="space-y-3 text-sm mb-8">
          <li className="flex gap-3">
            <span className="text-primary">•</span>
            <span>+1400 miembros en la comunidad.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">•</span>
            <span>Cientos de asistentes en nuestros eventos.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">•</span>
            <span>Dimos $1000 en premio de hackathon.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">•</span>
            <span>Partners with Platanus & CommunityOS</span>
          </li>
        </ul>
        <div className="space-y-4">
          {[
            {
              title: "El DF Mas cubrió uno de nuestros programas con una nota.",
              image: "/images/achievement-df-mas.png",
              linkText: "aquí",
              linkUrl: "https://www.df.cl/df-mas/punto-de-partida/indies-los-veinteaneros-que-quieren-financiar-ideas-locas",
            },
          ].map((spot, idx) => (
            <div
              key={idx}
              className="rounded-lg border-2 border-dashed border-primary/40 bg-card overflow-hidden max-w-2xl mr-auto"
            >
              <div className="px-4 py-3 sm:px-5 sm:py-4 flex flex-col items-center text-center">
                <p className="text-primary text-sm sm:text-base font-medium mb-2">
                  {spot.title}
                </p>
                <div className="relative w-full max-w-2xl h-60 sm:h-100 rounded border border-primary/20 overflow-hidden bg-muted/30 flex items-center justify-center">
                  <Image
                    src={spot.image}
                    alt={spot.title}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 512px"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Puedes ver la versión digital{" "}
                  <a
                    href={spot.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium underline underline-offset-2 hover:opacity-90"
                  >
                    {spot.linkText}
                  </a>
                  .
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
