"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const skills = [
  {
    title: "Full Stack Web Development",
    description:
      "I have built a diverse stack of web applications from scratch using technologies such as React, Next.js, PHP, CodeIgniter, MySQL, Node, Redis, and many more.",
  },
  {
    title: "AI & Automation",
    description:
      "As of late, I've been venturing more into the world of AI. It started with home automation but has evolved into experimenting with the latest tools and models to help with intelligent decision making in everyday life.",
  },
  {
    title: "Mobile Application Development",
    description:
      "Along with fullstack, I have experience building successful mobile applications leveraging CoronaSDK (Lua), Node, and Java into the Android and Apple play stores.",
  },
];

export const Skills = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("max-w-5xl mx-auto px-8", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-zinc-100  font-semibold tracking-tight mt-4">
                    {skill.title}
                  </h4>
                  <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
