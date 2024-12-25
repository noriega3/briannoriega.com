"use client";
import React from "react";
import { cn } from "../../../lib/utils";
import { FaNewspaper, FaLinkedin, FaGithub } from "react-icons/fa";
import { HoverTitleLink } from "./hover-title-link";
const links = [
  {
    label: "GitHub",
    href: "https://github.com/noriega3",
    icon: <FaGithub className="h-8 w-8" title="GitHub"/>,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mr-brian-noriega",
    icon: <FaLinkedin className="h-8 w-8" title="LinkedIn" />,
  },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/e/2PACX-1vRhOEmNZ5utzqu6c8M-HBB0HQ-DFB7v9ssWEHskqnIRwmNLergbEHfN4pAagaRpwe-KwoRXe2Ccf7Wp/pub",
    icon: <FaNewspaper className=" h-8 w-8" title="Resume" />,
  },
];
export const ContactIcons = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("sm:flex sm:items-center sm:justify-between ", className)}
    >
      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 ">
        {links.map((link, i) => (
          <HoverTitleLink key={i} label={link.label}>
            {(
              handleMouseMove:
                | React.MouseEventHandler<HTMLAnchorElement>
                | undefined
            ) => (
              <a
                onMouseMove={handleMouseMove}
                className="text-white hover:text-teal-200"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Go to Brian Noriega ${link.label} page`}
                title={link.label}
              >
                <span className="sr-only">{link.label}</span>
                {link.icon}
              </a>
            )}
          </HoverTitleLink>
        ))}
      </div>
    </div>
  );
};
