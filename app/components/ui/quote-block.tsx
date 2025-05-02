"use client";
import React from "react";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

type QuoteProps = {
  className?: string;
  icon?: string;
  variant?: string;
  title?: string;
  author: string;
  authorTitle?: string;
  quote: string;
}

const QuoteHighlight = ({ icon = "", author, authorTitle, title = "", quote }: QuoteProps) => (
  <div className="flex flex-col justify-center rounded-xl bg-black text-white relative z-10 row-span-2 col-span-4">
    <div className="flex flex-row gap-x-5 items-center space-y-0 p-8 pb-4">
      <Image
        className="w-12 h-12 rounded-full"
        src={icon}
        height={12}
        width={12}
        alt={`${author} picture`}
      />

      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
        <div className="pr-3 font-medium text-gray-900 dark:text-white">{author}</div>
        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400 hidden xl:block">
          {authorTitle}
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-14 sm:right-28 -z-10 hidden lg:block">
      <BiSolidQuoteAltLeft className="h-[7.5rem] w-[7.5rem] opacity-50" width={104} height={102} />
    </div>
    <div className="p-8 pt-0">
      <h1 className="text-white font-medium text-xl mb-4">{title}</h1>
      <p className="opacity-70 text-sm font-medium text-lightGray tracking-wide">
        &quot;{quote}&quot;
      </p>
    </div>
  </div>
);

const QuoteWithRatings = ({ icon = "", author, authorTitle, quote }: QuoteProps) => (
  <div className="flex flex-col justify-center rounded-xl bg-black text-white relative p-8 col-span-2">
    <div className="flex items-center mb-4 text-yellow-300">
      <FaStar className="w-5 h-5 me-1" aria-hidden="true" fill="currentColor" />
      <FaStar className="w-5 h-5 me-1" aria-hidden="true" fill="currentColor" />
      <FaStar className="w-5 h-5 me-1" aria-hidden="true" fill="currentColor" />
      <FaStar className="w-5 h-5 me-1" aria-hidden="true" fill="currentColor" />
      <FaStar className="w-5 h-5 me-1" aria-hidden="true" fill="currentColor" />
    </div>
    <blockquote>
      <p className="text-2xl font-semibold text-gray-900 dark:text-white">&quot;{quote}&quot;</p>
    </blockquote>
    <div className="flex items-center mt-6 space-x-3">
      <Image
        className="w-6 h-6 rounded-full"
        src={icon}
        height={6}
        width={6}
        alt={`${author} picture`}
      />
      <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
        <cite className="pe-3 font-medium text-gray-900 dark:text-white">{author}</cite>
        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{authorTitle}</cite>
      </div>
    </div>
  </div>
);

const QuoteSimple = ({ author, quote, authorTitle = "" }: QuoteProps) => (
  <div className=" flex flex-col justify-center rounded-xl bg-black text-white p-8 flex-20 col-span-2">
    <blockquote>
      <p className="text-2xl font-medium text-gray-900 dark:text-white">&quot;{quote}&quot;</p>
    </blockquote>
    <div className="flex items-center mt-6 space-x-3">
      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
        <div className="pr-3 font-medium text-gray-900 dark:text-white">{author}</div>
        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
          {authorTitle}
        </div>
      </div>
    </div>
  </div>
);

export const QuoteBlock = (props: QuoteProps) => {
  if (props.variant === 'highlight') return <QuoteHighlight {...props} />;
  if(props.variant === 'rating') return <QuoteWithRatings {...props} />;
  return <QuoteSimple {...props}/>;
};
