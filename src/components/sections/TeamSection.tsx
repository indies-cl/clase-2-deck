"use client";

import Image from "next/image";
import { teamMembers } from "@/data/team";
import { Separator } from "@/components/ui/separator";

export function TeamSection() {
  return (
    <>
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
                <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">Photo</th>
                <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">Name</th>
                <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">Role</th>
                <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">Companies</th>
                <th className="text-left p-2 text-xs font-medium text-primary uppercase tracking-wider">Connect</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, idx) => (
                <tr
                  key={member.id}
                  className="border-b-2 border-dashed border-primary/40 bg-card/50 hover:bg-card/70 transition-colors"
                >
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
                  <td className="p-2">
                    <p className="text-xs font-medium text-primary">{member.name}</p>
                  </td>
                  <td className="p-2">
                    <p className="text-[10px] text-muted-foreground">{member.role}</p>
                  </td>
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
    </>
  );
}
