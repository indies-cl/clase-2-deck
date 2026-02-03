"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const photos = [
  { id: 1, description: "[gente feliz @ nuestro primer evento]", image: "/images/foto1.jpg" },
  { id: 2, description: "[gente atenta @ nuestro segundo evento]", image: "/images/foto2.jpg" },
  { id: 3, description: "[penquistas @ primer evento en conce ]", image: "/images/foto3.jpeg" },
  { id: 4, description: "[nacho hablando ante 400 personas]", image: "/images/foto4.jpg" },
  { id: 5, description: "[gente curada @ evento de chelas tech]", image: "/images/foto5.jpg" },
  { id: 6, description: "[puestito regalando 30k]", image: "/images/foto6.jpg" },
];

export function PhotosSection() {
  return (
    <>
      <section id="photos" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Fotos]
        </h2>
        <p className="text-sm leading-relaxed mb-6">
          Eventos anteriores, algunas cosas divertidas.
        </p>
        <>
          <div className="lg:hidden">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="snap-start min-w-[80%] aspect-video border-2 border-dashed border-primary/40 relative group overflow-hidden bg-card"
                  title={photo.description}
                >
                  <Image
                    src={photo.image}
                    alt={photo.description}
                    fill
                    sizes="(max-width: 1024px) 80vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <p className="text-xs text-primary text-center">
                      {photo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-3">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-video border-2 border-dashed border-primary/40 relative group cursor-pointer overflow-hidden bg-card"
                title={photo.description}
              >
                <Image
                  src={photo.image}
                  alt={photo.description}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <p className="text-xs text-primary text-center">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
