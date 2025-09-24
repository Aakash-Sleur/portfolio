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
        I have completed my{" "}
        <span className="font-medium text-blue-600">
          Master’s in Computer Science 🎓
        </span>
        , where I strengthened my passion for programming and software
        development. During this journey, I gained hands-on experience through a{" "}
        <span className="font-medium text-blue-600">6-month internship 💼</span>{" "}
        as a Full-Stack Developer and{" "}
        <span className="font-medium text-blue-600">
          2 months of experience as a Lead Developer 🚀
        </span>
        . I worked extensively with{" "}
        <span className="font-medium text-blue-600">
          full-stack web development 🌐
        </span>
        , particularly the{" "}
        <span className="font-medium text-blue-600">MERN and Next.js 💻</span>{" "}
        stacks, while also enhancing my skills in Java ☕, TypeScript, and
        PostgreSQL 🗄️.
        <span className="italic text-gray-600">
          {" "}
          My favorite part of programming
        </span>{" "}
        is learning new paradigms and solving challenging problems 🧩.
        <br /> I <span className="text-red-600 ">love ❤️</span> the feeling of
        finally figuring out a solution. I am always eager to learn new
        technologies and am currently seeking a{" "}
        <span className="font-medium text-blue-600">full-time position 💼</span>{" "}
        as a Software Developer.
      </p>

      <p>
        <span className="italic text-gray-600">When I'm not coding</span>, I
        enjoy playing video games 🎮, reading books 📖, exploring new things 🧭,
        watching anime 🎥, and working out 💪. I also enjoy{" "}
        <span className="font-medium text-blue-600">
          learning new things ✨
        </span>
        . Currently, I am exploring{" "}
        <span className="font-medium text-blue-600">
          human psychology 🧠 and business 📊
        </span>
        .
      </p>
    </motion.section>
  );
}
