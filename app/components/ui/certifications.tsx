"use client";
import React from "react";
import { cn } from "../../../lib/utils";

export const certifications = [
  {
    title: "Advanced React Certification",
    by: "Meta via Coursera",
    link: "https://coursera.org/share/8438de7b9ff139a277bf13d14b6c84cb",
  },
  {
    title: "Front-End Certification",
    by: "Meta via Coursera",
    link: "https://coursera.org/share/348b525b8ade7d2ffb7f0c538bd1b118",
  },
  {
    title: "Back-End Certification",
    by: "Meta via Coursera",
    link: "https://coursera.org/share/469132290f6b5d5a647f57181a277e50",
  },
  {
    title: "Google Analytics Certification",
    by: "Google",
    link: "",
  },
];

export const Certifications = ({ className }: { className?: string }) => {
  return (
    <div className={cn("max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10", className)}>
      <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
        Certifications
      </h2>
      <div className="relative max-w-7xl mx-auto pb-20 px-8">
        <ul role="list" className="">
          {certifications.map((cert) => (
            <li key={cert.title} className="flex justify-between gap-x-6 py-5">
              <div className="hidden md:flex h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="md:px-10">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-neutral-200 text-xs md:text-sm font-bold mb-1">
                      {cert.title}
                    </p>
                    <p className="mt-1 truncate text-neutral-400 text-xs md:text-sm mb-2">
                      {cert.by}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};