"use client";
import React from "react";
import { TypewriterEffect } from "./typewriter-effect";
import { Badge } from "./badge";

const words = [
  {
    text: "Hi",
  },
  {
    text: "I'm",
  },
  {
    text: "Brian",
  },
];
const skills = ["TypeScript", "JavaScript", "React", "Next.js", "Node", "MySQL", "PostgreSQL", "PHP", "Lua"];

export const HeroDefault = () => {
  return (
    <section>
      <div className="relative px-4 mx-auto max-w-screen-xl text-center lg:py-56">
        <h1 className="mb-4">
          <TypewriterEffect
            words={words}
            className="font-extrabold tracking-tight leading-none text-4xl lg:text-6xl text-white"
          />{" "}
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Also known as Lawrence, I&apos;m a Software Engineer specializing in building fast,
          accessible, and user-friendly applications. With expertise in tech such as JavaScript, TypeScript,
          React, Next.js, and Node.js, I create scalable solutions that drive results.
        </p>
        <ul className="mb-8 flex flex-wrap justify-center">
          {skills.map((skill) => (
            <li key={skill} className="my-1 mr-1.5">
              <Badge>{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
