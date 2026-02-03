"use client";

import { Separator } from "@/components/ui/separator";

export function ContactSection() {
  return (
    <>
      <section id="contact" className="mb-16">
        <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
          [Contacto]
        </h2>
        <p className="text-sm mb-4">Si les interesa ser sponsors, contactar a:</p>
        <a
          href="mailto:damian@indies.cl"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          [EMAIL_CONTACTO]
        </a>
      </section>
    </>
  );
}
