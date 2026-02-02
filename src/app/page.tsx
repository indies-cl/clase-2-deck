"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
    name: "[Damian Panes]",
    role: "[founder]",
    image: "/images/damian.jpg",
    linkedin: "https://www.linkedin.com/in/damianpanes/",
    companies: [
      { logo: "/images/company-damian1.png", name: "Company 1", url: "#" },
      { logo: "/images/company-damian2.png", name: "Company 2", url: "#" },
      { logo: "/images/company-damian3.png", name: "Company 3", url: "#" },
      { logo: "/images/company-damian4.png", name: "Company 4", url: "#" },
    ],
  },
  {
    id: "team-2",
    name: "[Nacho Bernardo]",
    role: "[founder]",
    image: "/images/nacho.jpg",
    linkedin: "https://www.linkedin.com/in/natochi/",
    companies: [
      { logo: "/images/company-nacho1.png", name: "Company 1", url: "#" },
      { logo: "/images/company-nacho2.png", name: "Company 2", url: "#" },
      { logo: "/images/company-nacho3.png", name: "Company 3", url: "#" },
      { logo: "/images/company-nacho4.png", name: "Company 4", url: "#" },
    ],
  },
  {
    id: "team-3",
    name: "[Rene Caceres]",
    role: "[founder]",
    image: "/images/reno.png",
    linkedin: "https://www.linkedin.com/in/pup/",
    companies: [
      { logo: "/images/company-reno1.png", name: "Company 1", url: "#" },
      { logo: "/images/company-reno2.png", name: "Company 2", url: "#" },
      { logo: "/images/company-reno3.png", name: "Company 3", url: "#" },
      { logo: "/images/company-reno4.png", name: "Company 4", url: "#" },
    ],
  },
];

// Imágenes de impacto (carpeta public/images/impacto)
const impactoImages = [
  "Screenshot 2026-02-02 at 11-58-36 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 11-58-49 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 11-59-02 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 11-59-06 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 11-59-13 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 11-59-21 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 11-59-37 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 11-59-43 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 11-59-54 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-00-04 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-00-18 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-01-39 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-01-45 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-01-58 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-02-12 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-02-17 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-03-14 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-03-20 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-03-32 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-05-19 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-05-23 Actividad Nacho Bernardo LinkedIn.png",
  "Screenshot 2026-02-02 at 12-05-28 Actividad Nacho Bernardo LinkedIn.png",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [impactoLightbox, setImpactoLightbox] = useState<string | null>(null);
  const impactDesktopRef = useRef<HTMLDivElement>(null);
  const impactMobileRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll carrusel impacto (desktop: grid 3×2 por fila; mobile: horizontal)
  useEffect(() => {
    const stepMobile = 320;
    const stepDesktop = 260; // ~1 fila del grid 3 columnas
    const interval = 2500; // más bajo = scroll más rápido (ej. 2000, 1500)
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
            La Clase nació en 2019 como un espacio único donde fundadores que construyeron startups chilenas de clase mundial compartieron, sin filtros, cómo se crean cosas que importan. Su misión fue acercar el conocimiento real del emprendimiento —el que no está en libros— a quienes querían construir, aprender y atreverse.            </p>
            <p>
            La Clase 2.0 retoma ese espíritu y lo abre a toda la comunidad: cinco días, diez clases elegidas por la gente, dictadas por los founders que están construyendo hoy. Buscamos transmitir conocimiento práctico, inspirar a la próxima generación y volver a juntar a la comunidad tech alrededor de ideas, oficio y criterio.            </p>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Event Section */}
        <section id="event" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [El evento]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
          La Clase 2.0 es un ciclo abierto de charlas en vivo, con foco en experiencia real. Cada día, dos founders lideran una clase práctica: cómo piensa, cómo decide y cómo construye. No es teoría. Es oficio. Al final de cada sesión, hay espacio para preguntas y conversación entre asistentes.          </p>
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Inicio:</span>
                  <p className="text-primary">[FECHA_INICIO: 6 DE MARZO]</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Término:</span>
                  <p className="text-primary">[FECHA_FIN: 9 DE MARZO]</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Inicio:</span>
                  <p className="text-primary">[HORARIO: DE 6PM A 9PM]</p>
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
            <img src="/images/auditorio.jpg" alt="auditorio-la-clase" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {/* Venue Sponsor Card (Horizontal) */}
              <Card className="border-primary border-2 bg-primary/10">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div className="text-center flex-shrink-0 w-full sm:w-auto">
                      <span className="text-2xl block mb-2">⌂</span>
                      <CardTitle className="text-primary uppercase text-xs tracking-wider">
                        Venue
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mt-2">
                        [AUDITORIO D’ETIGNY]
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

              {/* Location text below the card */}
              <div className="flex flex-col justify-center">
                <h3 className="text-primary text-lg">[UNIVERSIDAD DE CHILE]</h3>
                <p className="text-muted-foreground text-sm">[BEAUCHEF 851, SANTIAGO]</p>
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

        {/* Speakers Section */}
        <section id="speakers" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Speakers]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
          Los speakers serán founders activos, elegidos por la comunidad. Los asistentes votan a quién quieren escuchar y, según ese ranking, invitamos a los más votados a dictar cada clase.
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
          <p className="text-sm leading-relaxed mb-6">
            Eventos anteriores, algunas cosas divertidas.
          </p>
          {/* Photos data with descriptions */}
          {(() => {
            const photos = [
              {
                id: 1,
                description: "[gente feliz @ nuestro primer evento]",
                image: "/images/foto1.jpg",
              },
              {
                id: 2,
                description: "[gente atenta @ nuestro segundo evento]",
                image: "/images/foto2.jpg", // extensión real del archivo
              },
              {
                id: 3,
                description: "[penquistas @ primer evento en conce ]",
                image: "/images/foto3.jpeg", // extensión real del archivo
              },
              {
                id: 4,
                description: "[nacho hablando ante 400 personas]",
                image: "/images/foto4.jpg", // extensión real del archivo
              },
              {
                id: 5,
                description: "[gente curada @ evento de chelas tech]",
                image: "/images/foto5.jpg", // extensión real del archivo
              },
              {
                id: 6,
                description: "[puestito regalando 30k]",
                image: "/images/foto6.jpg", // extensión real del archivo
              },
            ];

            return (
              <>
                {/* Mobile carousel */}
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

                {/* Desktop grid */}
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
            Team @ indies.la:
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
                      <div className="w-10 h-10 border-2 border-dashed border-primary/40 overflow-hidden flex items-center justify-center bg-card">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
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
                              className="w-7 h-7 border-2 border-dashed border-primary/40 flex items-center justify-center bg-card/50 overflow-hidden hover:bg-primary/20 transition-colors cursor-pointer"
                              title={company.name}
                            >
                              <Image
                                src={company.logo}
                                alt={company.name}
                                width={28}
                                height={28}
                                className="w-full h-full object-contain"
                              />
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

        {/* Impact Section — estilo tipo “Fotos”: grid 3×2, auto-scroll, click para ver completa */}
        <section id="impact" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Impacto en redes]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            En solo 6 meses, llevamos 1.5M de vistas solo en los post de los founders.
          </p>

          {/* Mobile carousel — auto-scroll; click para ver completa */}
          <div className="lg:hidden">
            <div
              ref={impactMobileRef}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {impactoImages.map((filename, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setImpactoLightbox(filename)}
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

          {/* Desktop: grid 3 columnas × 2 filas visibles, auto-scroll vertical; click para ver completa */}
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
                      onClick={() => setImpactoLightbox(filename)}
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

          {/* Lightbox: ver foto completa al hacer click */}
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
        </section>

        <Separator className="mb-16" />

        {/* Achievements Section */}
        <section id="achievements" className="mb-16">
          <h2 className="text-2xl text-primary mb-6 uppercase tracking-wider">
            [Early achievements de indies.la]
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Llevamos poco tiempo, pero ya tenemos algunos logros que nos hacen muy orgullosos.
          </p>

          {/* Listado de logros en punteos — edita los textos debajo */}
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
              <span>Partners with Platanus % CommunityOS</span>
            </li>
          </ul>

          {/* Spot: imagen + título + link (ej. nota en DF Mas) */}
          <div className="space-y-4">
            {[
              {
                title: "El DF Mas cubrió nuestro evento con una nota.",
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

            {/* Partner */}
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

            {/* Exclusive */}
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
                <Badge className="mb-4">[15 de Febrero]</Badge>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Logo en stickers y merch asegurado</li>
                  <li>• Mención de sponsor en publicaciones tempranas de difusión del evento</li>
                  <li>• Máxima visibilidad</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-primary text-sm uppercase tracking-wider mb-2">
                  Última llamada
                </h3>
                <Badge variant="secondary" className="mb-4">
                  [27 de Febrero]
                </Badge>
                <p className="text-xs text-muted-foreground">
                  Fecha limite para confirmar el sponsor.
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
