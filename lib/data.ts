import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Support and Developer",
    location: "Astek Sistemas",
    description:
      "I began my career in the IT field, initially working as a technical support specialist for one year. After that, I transitioned to a software developer role for six months, where I worked with Delphi and Firebird as the database.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Bachelor Degree (Information Systems)",
    location: "Libertas Faculdades Integradas",
    description:
      "I graduated with a bachelor's degree in Information Systems after four years of study.",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2019",
  },
  {
    title: "Software Developer",
    location: "4T Sistemas",
    description:
      "Here I work exclusively in software development, using technologies such as VB6, .NET MVC, and Oracle as the database.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Fullstack Developer (.NET and Angular)",
    location: "Grupo Telluria",
    description:
      "Here I was a full-stack developer working with .NET and Angular. In this role, I have gained experience with technologies like Docker/LXC, CI/CD, and Azure. I have developed numerous APIs using .NET Core, integrated with Salesforce and Zendesk, and worked with databases such as Postgres and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2022",
  },
  {
    title: "Fullstack Developer (.Net and Angular)",
    location: "Meta",
    description:
      "I continue to work as a full-stack developer, utilizing the same stack (.NET/Angular). In an agile environment, we have successfully developed numerous applications using .NET Core and Angular, tested with xUnit and MSTest. We used SQL Server as the database and deployed the applications on Azure DevOps with CI/CD.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Fullstack Developer (.NET and Angular)",
    location: "NTT Data Business Solutions",
    description:
      "I started a migration project from .NET Framework and AngularJS to .NET Core and Angular. We worked in an agile environment using relational databases like Oracle and managed the project with Jira. We also used TFS and GitHub for source control management.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Pos-Graduated Degree",
    location: "UNOPAR - Universidade do Norte do Paraná",
    description:
      "I have started my pos-graduated degree in Software Architecture, which I will complete by the end of the year.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;