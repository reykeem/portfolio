// All site copy and links live here — edit this file to update the site.
import type { IconType } from "react-icons";
import { FiCloud, FiDatabase, FiGithub, FiGlobe, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiApollographql,
  SiAppstore,
  SiDatadog,
  SiExpress,
  SiFastlane,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMedium,
  SiMqtt,
  SiNodedotjs,
  SiNpm,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSnowflake,
  SiSwift,
  SiTailwindcss,
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
  role: "I build mobile apps & IoT systems",
  tagline:
    "Senior software engineer at Sabanto, where I lead mobile for Vehicle Mission Control (vMC) — the app used to monitor and command autonomous tractors — and build the real-time telemetry pipelines behind it.",
  location: "San Diego, CA",
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
  { label: "Talks", href: "#talks" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "Hey, I'm Ray — a full-stack engineer based in San Diego who likes owning products end to end: the API, the data pipeline, and the app in your hand.",
    "Since 2023 I've been at Sabanto, building software for autonomous farm equipment. I took Vehicle Mission Control (vMC) from a web-only tool to a native iOS and Android app, and I'm the engineer who owns its architecture, releases, and App Store deployments. On the backend, I work on the GraphQL APIs and AWS IoT pipelines that stream live telemetry from vehicles in the field.",
    "I'm most interested in distributed systems, event-driven architecture, and real-time data — and, outside of work, Web3, gaming, and men's fashion.",
  ],
  education: "B.A., University of California, Santa Barbara",
};

export type Skill = { name: string; icon?: IconType };

export const skillGroups: { label: string; items: Skill[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Swift", icon: SiSwift },
      { name: "SQL", icon: FiDatabase },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "React Native", icon: SiReact },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Flutter", icon: SiFlutter },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    label: "Data & APIs",
    items: [
      { name: "GraphQL", icon: SiGraphql },
      { name: "Apollo Federation", icon: SiApollographql },
      { name: "DynamoDB", icon: FiDatabase },
      { name: "Snowflake", icon: SiSnowflake },
      { name: "Redis", icon: SiRedis },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    label: "Cloud & tooling",
    items: [
      { name: "AWS IoT Core", icon: FiCloud },
      { name: "MQTT", icon: SiMqtt },
      { name: "Fastlane", icon: SiFastlane },
      { name: "Datadog", icon: SiDatadog },
      { name: "Jest", icon: SiJest },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
];

export type Job = {
  company: string;
  title: string;
  period: string;
  href?: string;
  highlights: string[];
  tech?: string[];
};

// The Experience section and its nav link are hidden while this is empty.
export const experience: Job[] = [
  {
    company: "Sabanto",
    title: "Senior Software Engineer",
    period: "Apr 2023 — Present",
    href: "https://sabantoag.com",
    highlights: [
      "Led Vehicle Mission Control (vMC) mobile from 0 → 1 in React Native, turning an existing web app into native iOS and Android apps.",
      "Sole mobile engineer — own the architecture, release cycle, and App Store / Play Store deployments for a cross-functional IoT team.",
      "Replaced SMS mission alerts with push notifications, cutting infrastructure costs by ~$1,000/month while driving mobile adoption.",
      "Built mobile CI/CD with Fastlane to automate builds, tests, and store releases, shortening the path to production.",
      "Architected an AWS IoT Core (MQTT) pipeline and GraphQL/Node APIs for low-latency vehicle telemetry, backed by DynamoDB, Snowflake, and SQL.",
      "Instrumented app health with Datadog dashboards and alerts to catch issues before users do.",
    ],
    tech: [
      "React Native",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "AWS IoT",
      "DynamoDB",
      "Snowflake",
      "Fastlane",
      "Datadog",
    ],
  },
  {
    company: "LatchQL",
    title: "Software Engineer",
    period: "Aug 2022 — Jan 2023",
    href: "https://www.npmjs.com/package/latchql",
    highlights: [
      "Built and published LatchQL, an open-source npm middleware that secures GraphQL APIs with permission-based depth, cost, and rate limits.",
      "Used Redis to track request frequency per client, powering a cost-analysis rate limiter that blunts query-spam attacks.",
      "Brought TypeScript and test-driven development with Jest to the codebase, and used JWT to map users to permission levels without touching the host app's user database.",
    ],
    tech: ["TypeScript", "GraphQL", "React", "Node.js", "Redis", "Jest", "JWT"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: Link[];
  // "phone" renders a row of mobile screenshots; "desktop" renders a single browser shot.
  media:
    { kind: "desktop"; src: string; alt: string } | { kind: "phone"; shots: { src: string; alt: string }[] };
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

export type Talk = { title: string; kind: string; description: string; href: string };

export const talks: Talk[] = [
  {
    title: "Message Brokers: RabbitMQ & Apache Kafka",
    kind: "Tech talk",
    description:
      "A deep dive into message brokers — core concepts, components, and trade-offs — and where RabbitMQ and Kafka fit in serverless and microservice architectures.",
    href: "https://drive.google.com/file/d/1e1_-N0oY7NeR-Xz7sbDu75fEN1FoYeuB/view",
  },
];

export const contact = {
  heading: "Let's build something",
  blurb:
    "I'm always open to new opportunities, interesting problems, and good conversation. My inbox is open — I'll get back to you.",
};
