import React from "react";
import { FaAngular, FaReact } from "react-icons/fa";
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
      "Completed a 1-month internship where I contributed to a project using Angular. Gained hands-on experience in building web applications and collaborating in a team environment.",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQERK6yYFs1teg/company-logo_200_200/company-logo_200_200/0/1640842663757?e=1751500800&v=beta&t=I2uHGnZkQJ_9zCIEWzrx9Gu9-t2RegMnVLzg8xr1EIE",
    date: "July 2024 - August 2024",
  },
  {
    title: "Full-Stack Developer (MERN) Intern",
    location: "Settyl Tech India Private Limited, Chennai, Tamil Nadu",
    description:
      "Currently undertaking a 6-month internship as a Full-Stack Developer, working extensively with the MERN stack. Contributed to developing and maintaining scalable web applications while enhancing skills in both front-end and back-end development.",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQF6N4XuWUa4DQ/company-logo_100_100/company-logo_100_100/0/1664347696580/settyl_corporation_logo?e=1751500800&v=beta&t=oJR4LXUGCQRv2DXvhgSAyrnjVjw-w87uyN37m0XiDiI",
    date: "December 2024 - Present",
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
  "React",
  "Next.js",
  "Express.js",
  "Node.js",
  "MongoDB",
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML",
  "CSS",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Docker",
] as const;
