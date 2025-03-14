"use client";
import React from "react";
import { FocusCards } from "./ui/focus-cards";


export const products = [
  {
    title: "CVS / Aetna",
    link: "/about",
    src: "/bnsite/img-web-alp.webp",
    description: "TBD",
  },
  {
    title: "WillowTree Apps",
    link: "/about",
    src: "/bnsite/img-web-wtree.webp",
    description: "TBD",
  },
  {
    title: "Conversion Fanatics",
    link: "/about",
    src: "/bnsite/img-web-cflp.webp",
    description: "TBD",
  },
  {
    title: "Bomzy Apps (Enchanted Forest)",
    link: "/about",
    src: "/bnsite/img-app-enchanted-forest.webp",
    description: "TBD",
  },

  {
    title: "Bomzy Apps (Casino)",
    link: "/about",
    src: "/bnsite/img-app-casino.webp",
    description: "TBD",
  },
  {
    title: "Meclabs",
    link: "/about",
    src: "/bnsite/img-web-mlab.webp",
    description: "TBD",
  },
  {
    title: "MTA ETA (nextstop) App",
    link: "/about",
    src: "/bnsite/img-app-mta.webp",
    description: "TBD",
  },
  {
    title: "Lametric Time Gas Prices App",
    link: "/about",
    src: "/bnsite/img-app-gas.webp",
    description: "TBD",
  },
];

export const FeaturedProjects = () => {
  return (
    <div className="hidden md:block">
      <h1 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
        Highlighted Projects
      </h1>
      <div className="md:px-10 mb-20">
        <FocusCards cards={products} />
      </div>
    </div>
  );
}
