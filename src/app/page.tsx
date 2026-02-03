"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { sections } from "@/data/sections";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventSection } from "@/components/sections/EventSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { AttendeesSection } from "@/components/sections/AttendeesSection";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import { PhotosSection } from "@/components/sections/PhotosSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { DeadlinesSection } from "@/components/sections/DeadlinesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [impactoLightbox, setImpactoLightbox] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollTo}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <header className="fixed top-0 left-0 right-0 h-14 bg-sidebar border-b border-sidebar-border z-30 flex items-center px-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <h1 className="text-xl text-primary tracking-tight ml-3">clase 2.0</h1>
      </header>

      <main className="flex-1 lg:ml-[280px] p-4 lg:p-8 max-w-4xl pt-20 lg:pt-8">
        <AboutSection />
        <EventSection />
        <LocationSection />
        <AttendeesSection />
        <SpeakersSection />
        <PhotosSection />
        <TeamSection />
        <ImpactSection
          lightboxImage={impactoLightbox}
          setLightboxImage={setImpactoLightbox}
        />
        <AchievementsSection />
        <PackagesSection />
        <DeadlinesSection />
        <ContactSection />

        <footer className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>clase 2.0 Sponsor Deck</p>
        </footer>
      </main>

      {impactoLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setImpactoLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Cerrar imagen"
        >
          <button
            type="button"
            onClick={() => setImpactoLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white text-2xl leading-none"
            aria-label="Cerrar"
          >
            ×
          </button>
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/impacto/${encodeURIComponent(impactoLightbox)}`}
              alt="Impacto ampliada"
              fill
              className="object-contain"
              sizes="100vw"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
