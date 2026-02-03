"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { impactoImages } from "@/data/impacto";
import { Separator } from "@/components/ui/separator";

interface ImpactSectionProps {
  lightboxImage: string | null;
  setLightboxImage: (image: string | null) => void;
}

export function ImpactSection({ lightboxImage, setLightboxImage }: ImpactSectionProps) {
  const impactDesktopRef = useRef<HTMLDivElement>(null);
  const impactMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stepMobile = 320;
    const stepDesktop = 260;
    const interval = 2500;
    const desktop = impactDesktopRef.current;
    const mobile = impactMobileRef.current;

    const scrollDesktop = () => {
      if (!desktop) return;
      const next = desktop.scrollTop + stepDesktop;
      if (next >= desktop.scrollHeight - desktop.clientHeight - 20) {
        desktop.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        desktop.scrollTo({ top: next, behavior: "smooth" });
      }
    };
    const scrollMobile = () => {
      if (!mobile) return;
      const next = mobile.scrollLeft + stepMobile;
      if (next >= mobile.scrollWidth - mobile.clientWidth - 20) {
        mobile.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        mobile.scrollTo({ left: next, behavior: "smooth" });
      }
    };

    const idD = setInterval(scrollDesktop, interval);
    const idM = setInterval(scrollMobile, interval);
    return () => {
      clearInterval(idD);
      clearInterval(idM);
    };
  }, []);

  return (
    <>
      <section id="impact" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Impacto en redes]
        </h2>
        <p className="text-sm leading-relaxed mb-6">
          En solo 6 meses, llevamos 1.5M de vistas solo en los post de los founders.
        </p>
        <div className="lg:hidden">
          <div
            ref={impactMobileRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {impactoImages.map((filename, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setLightboxImage(filename)}
                className="snap-start min-w-[85%] aspect-[4/5] border border-primary/30 relative overflow-hidden bg-card flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <Image
                  src={`/images/impacto/${encodeURIComponent(filename)}`}
                  alt={`Impacto ${idx + 1}`}
                  fill
                  sizes="85vw"
                  className="object-cover grayscale hover:grayscale-0 transition-[filter]"
                />
              </button>
            ))}
          </div>
        </div>
        <div
          ref={impactDesktopRef}
          className="hidden lg:block h-[32rem] overflow-y-auto overflow-x-hidden snap-y snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex flex-col gap-3 pb-2">
            {Array.from({ length: Math.ceil(impactoImages.length / 3) }, (_, rowIndex) => (
              <div
                key={rowIndex}
                className="snap-start snap-always grid grid-cols-3 gap-3 flex-shrink-0"
              >
                {impactoImages.slice(rowIndex * 3, rowIndex * 3 + 3).map((filename, colIndex) => (
                  <button
                    key={`${rowIndex}-${colIndex}`}
                    type="button"
                    onClick={() => setLightboxImage(filename)}
                    className="relative w-full aspect-[4/3] border border-primary/30 overflow-hidden bg-card cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset"
                  >
                    <Image
                      src={`/images/impacto/${encodeURIComponent(filename)}`}
                      alt={`Impacto ${rowIndex * 3 + colIndex + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover grayscale hover:grayscale-0 transition-[filter]"
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">
          Puedes ver el album completo{" "}
          <a
            href="#"
            className="text-primary font-medium underline underline-offset-2 decoration-primary hover:opacity-90"
          >
            aquí
          </a>
          .
        </p>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
