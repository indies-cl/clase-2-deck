"use client";

import Image from "next/image";
import { speakers } from "@/data/speakers";
import { Separator } from "@/components/ui/separator";

export function SpeakersSection() {
  return (
    <>
      <section id="speakers" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Speakers]
        </h2>
        <p className="text-sm leading-relaxed mb-6">
          Los speakers serán founders activos, que hoy en dia estan trabajando en cosas relacionadas al mundo startup.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="group cursor-pointer transition-all">
              <div className="relative aspect-square border border-primary/30 overflow-hidden bg-card">
                <div className="w-full h-full flex items-center justify-center text-primary/40 text-xs">
                  [FOTO]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-[10px] leading-tight line-clamp-2">
                    {speaker.talk}
                  </p>
                </div>
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-2 right-2 w-6 h-6 bg-primary/90 hover:bg-primary flex items-center justify-center text-primary-foreground rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <div className="py-2">
                <p className="text-sm font-medium truncate">{speaker.name}</p>
                <p className="text-xs text-muted-foreground truncate">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Separator className="mb-16" />
    </>
  );
}
