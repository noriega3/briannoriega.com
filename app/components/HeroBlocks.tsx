"use client";
import React from "react";
import Link from "next/link";

export const HeroBlocks = () => {
  return (
    <div className="flex justify-center relative p-6 gap-4 lg:px-6 ">
      <Link href="/about">
        <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white text-neutral-200 transition duration-200">
          About
        </button>
      </Link>
      <Link href="/projects">
        <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white text-neutral-200 transition duration-200">
          Projects
        </button>
      </Link>
    </div>
  );
};
