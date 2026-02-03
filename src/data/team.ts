export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  companies: {
    logo: string;
    name: string;
    url: string;
  }[];
}

export const teamMembers: TeamMember[] = [
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
