import React from "react";
import { FaAngular, FaReact } from "react-icons/fa";
import eat360Img from "@/public/eat360.png";
import prepalyzeImg from "@/public/prepalyze.png";
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
    icon: "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif",
    date: "July 2024 - August 2024",
  },
  {
    title: "Full-Stack Developer (MERN) Intern",
    location: "Settyl Tech India Private Limited, Chennai, Tamil Nadu",
    description:
      "Successfully completed a 6-month internship as a Full-Stack Developer, working extensively with the MERN stack. Contributed to the development and maintenance of scalable web applications while enhancing skills in both front-end and back-end development.",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQF6N4XuWUa4DQ/company-logo_200_200/company-logo_200_200/0/1664347696580/settyl_corporation_logo?e=2147483647&v=beta&t=QRjVHcV6Suco-SQMKWQUM8HGkKK4X-VsHDdKqWeFHeI",
    date: "December 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Prepalyze - Exam taking and question generation platform",
    description:
      "A platform where users can take exams and generate questions for them. Built with React for the front-end, and Express.js and Node.js for the back-end.",
    tags: [
      "React",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Redis",
      "MongoDB",
      "BullMQ",
    ],
    imageUrl: prepalyzeImg,
    link: "https://prepalyze.com/",
  },
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
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Express.js",
  "Node.js",
  "MongoDB",
  "Java",
  "Golang",
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
  "Rust"
] as const;
