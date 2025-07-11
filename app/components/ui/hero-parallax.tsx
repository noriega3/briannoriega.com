"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { TypewriterEffect } from "./typewriter-effect";
import { ContactIcons } from "./contact-icons";
import { TbAlertTriangleFilled } from "react-icons/tb";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.1], [0.1, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 0]), springConfig);
  return (
    <>
      <div
        ref={ref}
        className="h-auto sm:-mt-24 pt-0 md:pt-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] z-10"
      >
        <Header />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="hidden sm:block"
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product) => (
              <ProductCard product={product} translate={translateX} key={product.title} />
            ))}
          </motion.div>
          <motion.div className="flex flex-row  mb-20 space-x-20 ">
            {secondRow.map((product) => (
              <ProductCard product={product} translate={translateXReverse} key={product.title} />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="hidden sm:flex justify-center">
        <Link href="/projects">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All Projects
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export const Header = () => {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "I'm",
    },
    {
      text: "Brian.",
    },
  ];
  return (
    <div className="max-w-7xl relative mx-auto py-20 sm:py-32 px-4 w-full z-10">
      <h1>
        <TypewriterEffect words={words} className="text-3xl md:text-7xl font-bold text-white" />
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        I&apos;m a Software Engineer specializing in building fast, accessible, and user-friendly
        web applications. With expertise in tech such as React, Next.js, and Node.js, I create
        scalable solutions that drive results. Connect with me and lets build something great.
        <br />
        <br />
        <TbAlertTriangleFilled className="inline size-6 text-yellow-400" /> Notice: This page is in
        alpha.
      </p>
      <ContactIcons className="hidden py-5 sm:visible" />
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Image
        aria-hidden="true"
        src={product.thumbnail}
        height="500"
        width="500"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
    </motion.div>
  );
};
