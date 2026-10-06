// All site copy and links live here — edit this file to update the site.
import type { IconType } from "react-icons";
import { FiGithub, FiGlobe, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiAppstore,
  SiCss,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMedium,
  SiMongodb,
  SiMui,
  SiNpm,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

import headshot from "../assets/headshot.jpg";
import latchql from "../assets/latchql.jpg";
import jpegMarketplace from "../assets/jpegmarketplace.jpg";
import valex from "../assets/valex.jpg";
import tasksDashboard from "../assets/tasksai-tasksdb.jpg";
import tasksRecs from "../assets/tasksai-recs.jpg";
import tasksPro from "../assets/tasksai-proTask.jpg";
import tasksPro2 from "../assets/tasksai-proTask2.jpg";

export type Link = { label: string; href: string; icon: IconType };

export const profile = {
  name: "Raymond Kim",
  shortName: "Ray",
  role: "Full-stack software engineer",
  tagline:
    "I build fast, thoughtful products across web and mobile — from GraphQL APIs to the pixels people actually touch.",
  email: "rayhkim23@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1YmlItHMBNNlbGPQobkdVo2nmFbrHonX_/view?usp=sharing",
  headshot,
};

export const socials: Link[] = [
  { label: "GitHub", href: "https://github.com/reykeem", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raymondhkim/",
    icon: FiLinkedin,
  },
  { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "Hey, I'm Ray — a software engineer who got into web development out of a genuine fascination with where technology and the internet are heading. I like owning features end to end: designing the API, wiring up the data, and sweating the details of the UI.",
    "My goal is to keep contributing to that growing network while sharpening my craft along the way.",
  ],
  interests: ["Web3", "Gaming", "Men's fashion", "Men's hair"],
};

export const skills: { name: string; icon: IconType }[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Python", icon: SiPython },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Material UI", icon: SiMui },
];

export type Job = {
  company: string;
  title: string;
  period: string;
  href?: string;
  highlights: string[];
  tech?: string[];
};

// TODO(Ray): add roles here — the Experience section stays hidden while this is empty.
export const experience: Job[] = [];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: Link[];
  // "phone" renders a row of mobile screenshots; "desktop" renders a single browser shot.
  media:
    | { kind: "desktop"; src: string; alt: string }
    | { kind: "phone"; shots: { src: string; alt: string }[] };
};

export const projects: Project[] = [
  {
    title: "tasksAI",
    description:
      "A mobile task-organization app that uses machine learning to give personalized task recommendations and productivity metrics based on how you actually spend your day. Shipped to the App Store.",
    tech: ["React Native", "GraphQL", "Python", "Flask", "Redux Toolkit", "Expo", "Jest"],
    links: [
      { label: "GitHub", href: "https://github.com/ASAPDevs/tasksAI", icon: FiGithub },
      { label: "App Store", href: "https://apps.apple.com/app/id1663560874", icon: SiAppstore },
      { label: "Website", href: "https://taskai.io/", icon: FiGlobe },
    ],
    media: {
      kind: "phone",
      shots: [
        { src: tasksDashboard, alt: "tasksAI dashboard showing today's progress" },
        { src: tasksRecs, alt: "tasksAI task recommendations" },
        { src: tasksPro, alt: "tasksAI productivity metrics" },
        { src: tasksPro2, alt: "tasksAI productivity breakdown" },
      ],
    },
  },
  {
    title: "LatchQL",
    description:
      "An open-source middleware package that adds layers of security to GraphQL APIs — depth limiting, cost analysis, and rate limiting per user role — plus a playground app to test it live.",
    tech: ["GraphQL", "TypeScript", "React", "Node", "Express", "Redis", "JWT"],
    links: [
      { label: "GitHub", href: "https://github.com/oslabs-beta/LatchQL", icon: FiGithub },
      { label: "npm", href: "https://www.npmjs.com/package/latchql", icon: SiNpm },
      { label: "Article", href: "https://medium.com/@mcphail.alex/latchql-c88ce527ec50", icon: SiMedium },
    ],
    media: { kind: "desktop", src: latchql, alt: "LatchQL playground running a GraphQL query" },
  },
  {
    title: "JPEG Marketplace",
    description:
      "A marketplace simulation where users buy, sell, and trade pseudo-NFT digital assets using 'fake' ether.",
    tech: ["React Router", "Context API", "Node", "Express", "PostgreSQL", "JWT"],
    links: [{ label: "GitHub", href: "https://github.com/Non-Fungibles/JPEG-Marketplace", icon: FiGithub }],
    media: { kind: "desktop", src: jpegMarketplace, alt: "JPEG Marketplace listing page" },
  },
  {
    title: "Val Exchange",
    description: "An e-commerce site simulating the buying and selling of Valorant weapon skins.",
    tech: ["React", "Redux", "Node", "Express", "MongoDB", "Webpack"],
    links: [{ label: "GitHub", href: "https://github.com/reykeem/Valo-Exchange", icon: FiGithub }],
    media: { kind: "desktop", src: valex, alt: "Val Exchange storefront" },
  },
];

export const contact = {
  heading: "Let's build something",
  blurb:
    "I'm always open to new opportunities, interesting problems, and good conversation. My inbox is open — I'll get back to you.",
};
