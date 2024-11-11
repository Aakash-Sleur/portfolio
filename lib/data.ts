import React from "react";
import { FaAngular } from "react-icons/fa";
import eat360Img from "@/public/eat360.png";
import socialImg from "@/public/social-media.png";
import adminImg from "@/public/admin-dashboard.png";

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
    title: "Angular Jr. Developer Intern",
    location: "IconX Technologies, Tirunelveli, Tamil Nadu",
    description:
      "I did a 1-month internship where I worked on a project using Angular. I learned a lot about Angular and how to build web applications. I also gained experience working in a team environment.",
    icon: React.createElement(FaAngular),
    date: "June 2024 - July 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Eat360",
    description:
      "Is a food recipe website where people can create, view and share their own recipes.",
    tags: [
      "React",
      "Typescript",
      "MongoDB",
      "Tailwind",
      "Express.js",
      "Node.js",
    ],
    imageUrl: eat360Img,
    link: "https://eat360-client.vercel.app/",
  },
  {
    title: "Admin Dashboard",
    description: "Admin Dashboard for adding and managing store items.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "ShadCN UI"],
    imageUrl: adminImg,
    link: "https://admin-dashboard-phi-one.vercel.app/",
  },
  {
    title: "Social Media Application",
    description:
      "A social media application where users can share posts, like and comment on posts, and follow other users.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
    imageUrl: socialImg,
    link: "https://threads-cyan.vercel.app/",
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
  "Express.js",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "Docker",
] as const;
