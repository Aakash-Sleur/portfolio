"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium text-blue-600">Computer Science 🎓</span>, I decided to further my passion for programming by pursuing a <span className="font-medium text-blue-600">Master’s in Computer Science 📚</span>.
        I learned <span className="font-medium text-blue-600">full-stack web development 🌐</span> and Java ☕. <span className="italic text-gray-600">
          My favorite part of programming</span> is learning new programming paradigms and problem-solving 🧩.
        <br /> I <span className="text-red-600 ">love ❤️</span> the feeling of finally figuring out a solution to a problem. My core stack includes <span className="font-medium text-blue-600">MERN and Next.js 💻</span>.
        Additionally, I am familiar with TypeScript, PostgreSQL 🗄️, and Java.
        I am always looking to learn new technologies and am currently seeking a <span className="font-medium text-blue-600">full-time position 💼</span> as a software developer.
      </p>

      <p>
        <span className="italic text-gray-600">When I'm not coding</span>, I enjoy playing video games 🎮, reading books 📖, exploring new things 🧭, watching anime 🎥, and working out 💪.
        I also enjoy <span className="font-medium text-blue-600">learning new things ✨</span>.
        Currently, I am exploring <span className="font-medium text-blue-600">human psychology 🧠 and business 📊</span>
      </p>


    </motion.section>
  );
}
