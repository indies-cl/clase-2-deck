"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const sections = [
  { id: "about", label: "Sobre clase 2.0", icon: "→" },
  { id: "event", label: "El evento", icon: "→" },
  { id: "location", label: "Ubicación", icon: "→" },
  { id: "attendees", label: "Asistentes", icon: "→" },
  { id: "speakers", label: "Speakers", icon: "→" },
  { id: "photos", label: "Fotos", icon: "→" },
  { id: "team", label: "Team", icon: "→" },
  { id: "impact", label: "Impacto", icon: "→" },
  { id: "achievements", label: "Achievements", icon: "→" },
  { id: "packages", label: "Paquetes", icon: "→" },
  { id: "deadlines", label: "Fechas límite", icon: "→" },
  { id: "contact", label: "Contacto", icon: "→" },
];

// Speakers data
const speakers = [
  {
    id: "speaker-1",
    name: "[Speaker 1]",
    role: "[Role/Company]",
    image: "/images/speaker1.jpg",
    linkedin: "#",
    talk: "[Tema de la charla]",
  },
  {
    id: "speaker-2",
    name: "[Speaker 2]",
    role: "[Role/Company]",
    image: "/images/speaker2.jpg",
    linkedin: "#",
    talk: "[Tema de la charla]",
  },
  {
    id: "speaker-3",
    name: "[Speaker 3]",
    role: "[Role/Company]",
    image: "/images/speaker3.jpg",
    linkedin: "#",
    talk: "[Tema de la charla]",
  },
  {
    id: "speaker-4",
    name: "[Speaker 4]",
    role: "[Role/Company]",
    image: "/images/speaker4.jpg",
    linkedin: "#",
    talk: "[Tema de la charla]",
  },
  {
    id: "speaker-5",
    name: "[Speaker 5]",
    role: "[Role/Company]",
    image: "/images/speaker5.jpg",
    linkedin: "#",
    talk: "[Tema de la charla]",
  },
  {
    id: "speaker-6",
    name: "[Speaker 6]",
    role: "[Role/Company]",
    image: "/images/speaker6.jpg",
    linkedin: "#",
    talk: "[Tema de la charla]",
  },
];

// Team members data
const teamMembers = [
  {
    id: "team-1",
    name: "[Nombre 1]",
    role: "[Rol]",
    image: "/images/team1.jpg",
    linkedin: "#",
    companies: [
      { logo: "/images/company1.png", name: "Company 1", url: "#" },
      { logo: "/images/company2.png", name: "Company 2", url: "#" },
      { logo: "/images/company3.png", name: "Company 3", url: "#" },
      { logo: "/images/company4.png", name: "Company 4", url: "#" },
    ],
  },
  {
    id: "team-2",
    name: "[Nombre 2]",
    role: "[Rol]",
    image: "/images/team2.jpg",
    linkedin: "#",
    companies: [
      { logo: "/images/company1.png", name: "Company 1", url: "#" },
      { logo: "/images/company2.png", name: "Company 2", url: "#" },
      { logo: "/images/company3.png", name: "Company 3", url: "#" },
      { logo: "/images/company4.png", name: "Company 4", url: "#" },
    ],
  },
  {
    id: "team-3",
    name: "[Nombre 3]",
    role: "[Rol]",
    image: "/images/team3.jpg",
    linkedin: "#",
    companies: [
      { logo: "/images/company1.png", name: "Company 1", url: "#" },
      { logo: "/images/company2.png", name: "Company 2", url: "#" },
      { logo: "/images/company3.png", name: "Company 3", url: "#" },
      { logo: "/images/company4.png", name: "Company 4", url: "#" },
    ],
  },
  {
    id: "team-4",
    name: "[Nombre 4]",
    role: "[Rol]",
    image: "/images/team4.jpg",
    linkedin: "#",
    companies: [
      { logo: "/images/company1.png", name: "Company 1", url: "#" },
      { logo: "/images/company2.png", name: "Company 2", url: "#" },
      { logo: "/images/company3.png", name: "Company 3", url: "#" },
      { logo: "/images/company4.png", name: "Company 4", url: "#" },
    ],
  },
  {
    id: "team-5",
    name: "[Nombre 5]",
    role: "[Rol]",
    image: "/images/team5.jpg",
    linkedin: "#",
    companies: [
      { logo: "/images/company1.png", name: "Company 1", url: "#" },
      { logo: "/images/company2.png", name: "Company 2", url: "#" },
      { logo: "/images/company3.png", name: "Company 3", url: "#" },
      { logo: "/images/company4.png", name: "Company 4", url: "#" },
    ],
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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

      {/* Mobile header with hamburger */}
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
        {/* About Section */}
        <section id="about" className="mb-16 pt-8">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Sobre clase 2.0]
          </h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              [Descripción del evento tech. Qué es clase 2.0, cuál es su misión y visión.]
            </p>
            <p>
              [Segunda línea de descripción sobre el propósito del evento y lo que busca lograr en la comunidad tech.]
            </p>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Event Section */}
        <section id="event" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [El evento]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            [Descripción del formato del evento: conferencias, workshops, networking, etc.]
          </p>
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Inicio:</span>
                  <p className="text-primary">[FECHA_INICIO]</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Término:</span>
                  <p className="text-primary">[FECHA_FIN]</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="mb-16" />

        {/* Location Section */}
        <section id="location" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Ubicación]
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-72 h-56 border-2 border-dashed border-primary/40 flex items-center justify-center text-primary/60 text-sm overflow-hidden flex-shrink-0">
              [IMAGEN_LUGAR]
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {/* Venue Sponsor Card (Horizontal) */}
              <Card className="border-primary border-2 bg-primary/10">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div className="text-center flex-shrink-0 w-full sm:w-auto">
                      <span className="text-2xl block mb-2">⌂</span>
                      <CardTitle className="text-primary uppercase text-xs tracking-wider">
                        Venue Sponsor
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mt-2">
                        [STATUS]
                      </p>
                    </div>
                    <Separator orientation="vertical" className="hidden sm:block h-16" />
                    <div className="flex-shrink-0 text-center w-full sm:w-auto">
                      <p className="text-xs text-muted-foreground mb-2">
                        Sponsor confirmado:
                      </p>
                      <div className="px-3 py-2 border-2 border-dashed border-primary/40 text-xs text-primary/60 bg-card/50 inline-block">
                        [VENUE_SPONSOR]
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location text below the card */}
              <div className="flex flex-col justify-center">
                <h3 className="text-primary text-lg">[NOMBRE_LUGAR]</h3>
                <p className="text-muted-foreground text-sm">[DIRECCION]</p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Attendees Section */}
        <section id="attendees" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Estadísticas]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            [Descripción del perfil de asistentes y qué esperar del evento.]
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <span className="text-4xl text-primary block">[XXX]</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Asistentes
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <span className="text-4xl text-primary block">[XX]</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Speakers
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <span className="text-4xl text-primary block">[Xh]</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Contenido
                </span>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Speakers Section */}
        <section id="speakers" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Speakers]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            [Descripción de los speakers y el tipo de contenido que compartirán.]
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="group cursor-pointer transition-all">
                <div className="relative aspect-square border-2 border-dashed border-primary/40 overflow-hidden">
                  <div className="w-full h-full bg-card flex items-center justify-center text-primary/40 text-xs">
                    [FOTO]
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider">
                      {speaker.talk}
                    </span>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 border border-primary bg-primary/20 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="py-3">
                  <p className="text-sm font-medium">{speaker.name}</p>
                  <p className="text-xs text-muted-foreground">{speaker.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Photos Section */}
        <section id="photos" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Fotos]
          </h2>

          {/* Photos data with descriptions */}
          {(() => {
            const photos = [
              { id: 1, description: "[Descripción de la foto 1]" },
              { id: 2, description: "[Descripción de la foto 2]" },
              { id: 3, description: "[Descripción de la foto 3]" },
              { id: 4, description: "[Descripción de la foto 4]" },
              { id: 5, description: "[Descripción de la foto 5]" },
              { id: 6, description: "[Descripción de la foto 6]" },
            ];

            return (
              <>
                {/* Mobile carousel */}
                <div className="lg:hidden">
                  <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="snap-start min-w-[80%] aspect-video border-2 border-dashed border-primary/40 flex items-center justify-center text-primary/60 text-sm relative group"
                        title={photo.description}
                      >
                        <span>[FOTO_{photo.id}]</span>
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                          <p className="text-xs text-primary text-center">
                            {photo.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop grid */}
                <div className="hidden lg:grid grid-cols-3 gap-3">
                  {photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="aspect-video border-2 border-dashed border-primary/40 flex items-center justify-center text-primary/60 text-sm relative group cursor-pointer"
                      title={photo.description}
                    >
                      <span>[FOTO_{photo.id}]</span>
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-xs text-primary text-center">
                          {photo.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </section>

        <Separator className="mb-16" />

        {/* Team Section */}
        <section id="team" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Team]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            [Descripción del equipo organizador del evento.]
          </p>
          <div className="border-2 border-dashed border-primary/40 overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-card/30 border-b-2 border-dashed border-primary/40">
                  <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">
                    Photo
                  </th>
                  <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">
                    Role
                  </th>
                  <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">
                    Companies
                  </th>
                  <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">
                    Connect
                  </th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, idx) => (
                  <tr
                    key={member.id}
                    className={`border-b-2 border-dashed border-primary/40 bg-card/50 hover:bg-card/70 transition-colors ${
                      idx === teamMembers.length - 1 ? "" : ""
                    }`}
                  >
                    {/* Photo */}
                    <td className="p-2">
                      <div className="w-10 h-10 border-2 border-dashed border-primary/40 overflow-hidden flex items-center justify-center text-primary/40 text-[8px]">
                        [IMG]
                      </div>
                    </td>

                    {/* Name */}
                    <td className="p-2">
                      <p className="text-xs font-medium text-primary">
                        {member.name}
                      </p>
                    </td>

                    {/* Role */}
                    <td className="p-2">
                      <p className="text-[10px] text-muted-foreground">
                        {member.role}
                      </p>
                    </td>

                    {/* Companies as clickable logos */}
                    <td className="p-2">
                      <div className="flex gap-1.5 flex-wrap lg:flex-nowrap">
                        <div className="grid grid-cols-2 gap-1.5 lg:flex lg:gap-1.5">
                          {member.companies.map((company, idx) => (
                            <a
                              key={idx}
                              href={company.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-7 h-7 border-2 border-dashed border-primary/40 flex items-center justify-center bg-card/50 overflow-hidden hover:bg-primary/20 transition-colors cursor-pointer text-primary/40 text-[6px]"
                              title={company.name}
                            >
                              [L]
                            </a>
                          ))}
                        </div>
                      </div>
                    </td>

                    {/* LinkedIn Connect */}
                    <td className="p-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-7 h-7 border-2 border-dashed border-primary/40 bg-card/50 hover:bg-primary/20 transition-colors cursor-pointer"
                        title="Connect on LinkedIn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-primary"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Impact Section */}
        <section id="impact" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Impacto]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            [Descripción del impacto esperado o logrado en ediciones anteriores.]
          </p>

          {/* Mobile carousel */}
          <div className="lg:hidden">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {["[LINKEDIN_POST]", "[INSTAGRAM_POST]"].map((label, idx) => (
                <div
                  key={idx}
                  className="snap-start min-w-[90%] aspect-video border-2 border-dashed border-primary/40 flex items-center justify-center text-primary/60 text-sm"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="aspect-video border-2 border-dashed border-primary/40 flex items-center justify-center text-primary/60 text-sm">
              [LINKEDIN_POST]
            </div>
            <div className="aspect-video border-2 border-dashed border-primary/40 flex items-center justify-center text-primary/60 text-sm">
              [INSTAGRAM_POST]
            </div>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Achievements Section */}
        <section id="achievements" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Achievements]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            [Descripción de logros o hitos del evento en ediciones anteriores.]
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>[Logro o proyecto 1]</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>[Logro o proyecto 2]</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>[Logro o proyecto 3]</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>[Logro o proyecto 4]</span>
            </li>
          </ul>
        </section>

        <Separator className="mb-16" />

        {/* Packages Section */}
        <section id="packages" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Paquetes para sponsors]
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Basic */}
            <Card className="border-border">
              <CardHeader className="border-b border-border pb-4">
                <div className="text-center">
                  <span className="text-2xl block mb-2">◇</span>
                  <CardTitle className="text-primary uppercase text-sm tracking-wider">
                    Basic
                  </CardTitle>
                  <p className="text-2xl mt-2">$[X,XXX]</p>
                  <span className="text-xs text-muted-foreground">USD</span>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="text-xs space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    [Beneficio 1]
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    [Beneficio 2]
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    [Beneficio 3]
                  </li>
                </ul>
                <Separator className="my-4" />
                <p className="text-xs text-muted-foreground mb-2">
                  Sponsors confirmados:
                </p>
                <div className="flex gap-2 flex-wrap">
                  <div className="px-3 py-1 border border-dashed border-primary/40 text-xs text-primary/60">
                    [LOGO]
                  </div>
                  <div className="px-3 py-1 border border-dashed border-primary/40 text-xs text-primary/60">
                    [LOGO]
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partner */}
            <Card className="border-primary">
              <CardHeader className="border-b border-primary pb-4 bg-primary/5">
                <div className="text-center">
                  <span className="text-2xl block mb-2">◆</span>
                  <CardTitle className="text-primary uppercase text-sm tracking-wider">
                    Partner
                  </CardTitle>
                  <p className="text-2xl mt-2">$[X,XXX]</p>
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
                    [Beneficio adicional 1]
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    [Beneficio adicional 2]
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    [Beneficio adicional 3]
                  </li>
                </ul>
                <Separator className="my-4" />
                <p className="text-xs text-muted-foreground mb-2">
                  Sponsors confirmados:
                </p>
                <div className="flex gap-2 flex-wrap">
                  <div className="px-3 py-1 border border-dashed border-primary/40 text-xs text-primary/60">
                    [LOGO]
                  </div>
                  <div className="px-3 py-1 border border-dashed border-primary/40 text-xs text-primary/60">
                    [LOGO]
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exclusive */}
            <Card className="border-primary border-2 bg-primary/5">
              <CardHeader className="border-b border-primary pb-4">
                <div className="text-center">
                  <span className="text-2xl block mb-2">★</span>
                  <CardTitle className="text-primary uppercase text-sm tracking-wider">
                    Exclusive
                  </CardTitle>
                  <p className="text-2xl mt-2">$[XX,XXX]</p>
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
                    [Beneficio exclusivo 1]
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    [Beneficio exclusivo 2]
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

        {/* Deadlines Section */}
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
                <Badge className="mb-4">[FECHA]</Badge>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• [Beneficio 1]</li>
                  <li>• [Beneficio 2]</li>
                  <li>• [Beneficio 3]</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-primary text-sm uppercase tracking-wider mb-2">
                  Última llamada
                </h3>
                <Badge variant="secondary" className="mb-4">
                  [FECHA]
                </Badge>
                <p className="text-xs text-muted-foreground">
                  [Descripción de la fecha límite final y sus condiciones.]
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Contacto]
          </h2>
          <p className="text-sm mb-4">Si les interesa ser sponsors, contactar a:</p>
          <a
            href="mailto:contacto@clase2.com"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            [EMAIL_CONTACTO]
          </a>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>clase 2.0 Sponsor Deck</p>
        </footer>
      </main>
    </div>
  );
}
