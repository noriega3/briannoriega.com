"use client";
import React from "react";
import { ContactIcons } from "./ui/contact-icons";

export const Footer = () => {
  return (
    <footer className="p-6 lg:px-8 z-40">
      <div className="">
        <p className="py-5 text-neutral-200">Connect with me</p>
        <ContactIcons />
      </div>
      <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />

      <div className="my-6 text-neutral-200">
        A website by Brian Noriega. Built in Next.js, Tailwind CSS, and Supabase.
      </div>
    </footer>
  );
};
