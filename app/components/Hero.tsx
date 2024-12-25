"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  /*{
    title: "MTA ETA (nextstop) App",
    link: "/about",
    thumbnail: "/bnsite/img-app-mta.webp",
  },*/
  {
    title: "WillowTree Apps",
    link: "/about",
    thumbnail: "/bnsite/img-web-wtree.webp",
  },
  {
    title: "CVS / Aetna",
    link: "/about",
    thumbnail: "/bnsite/img-web-alp.webp",
  },
  {
    title: "Meclabs",
    link: "/about",
    thumbnail: "/bnsite/img-web-mlab.webp",
  },
  {
    title: "Lametric Time Gas Prices App",
    link: "/about",
    thumbnail: "/bnsite/img-app-gas.webp",
  },

  {
    title: "Conversion Fanatics",
    link: "/about",
    thumbnail: "/bnsite/img-web-cflp.webp",
  },

  {
    title: "Bomzy Apps (Enchanted Forest)",
    link: "/about",
    thumbnail: "/bnsite/img-app-enchanted-forest.webp",
  },

  {
    title: "Bomzy Apps (Casino)",
    link: "/about",
    thumbnail: "/bnsite/img-app-casino.webp",
  },
];
