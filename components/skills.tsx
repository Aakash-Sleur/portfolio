"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiGit, SiTailwindcss, SiPrisma, SiMongodb, SiExpress,
  SiPostgresql, SiPython, SiDocker,
  SiRust
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

const iconComponents = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Git: SiGit,
  Tailwind: SiTailwindcss,
  Prisma: SiPrisma,
  MongoDB: SiMongodb,
  "Express.js": SiExpress,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  Python: SiPython,
  Java: FaJava,
  Docker: SiDocker,
  Golang: FaGolang,
  Rust: SiRust
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          const IconComponent = iconComponents[skill as keyof typeof iconComponents];
          return (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {IconComponent && <IconComponent className="text-2xl" />}
              <span>{skill}</span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}