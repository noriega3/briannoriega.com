"use client";
import React from "react";
import { ContactIcons } from "./ui/contact-icons";

export function Footer() {
  return (
    <footer className="p-6 lg:px-8 z-40">
      <div className="">
        <p className="py-5 dark:text-neutral-200">Connect with me</p>
        <ContactIcons />
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="my-6 dark:text-neutral-200">
        A website by Brian Noriega. Built in Next.js, Tailwind CSS, and
        Supabase.
      </div>
    </footer>
  );
}
