"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MdNewReleases } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";

const navigation = [
  { id: "home", name: "Home", href: "/" },
  {
    id: "about",
    name: "About",
    href: "/about",
  },
  {
    id: "projects",
    name: (
      <span className="has-tooltip">
        <span
          aria-hidden="true"
          className="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 font-bold -mt-8 text-xs"
        >
          New!
        </span>
        Projects{" "}
        <MdNewReleases
          className="has-tooltip inline align-middle text-yellow-500 size-4"
          title="New"
        />
      </span>
    ),
    href: "/projects",
  },
  {
    id: "blog",
    name: (
      <>
        <span className="line-through opacity-50">Blog</span>
        <LuConstruction
          className=" inline text-red-500 size-4"
          title="Under Construction"
        />
      </>
    ),
    href: "#",
  },
];

export const Navigation = ({ className }: { className: string; }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      setMobileMenuOpen(false);
    };
  }, [pathname]);

  return (
    <header className={cn("relative top-0 z-50", className)}>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Brian Noriega Personal Site</span>
            <Image
              width={50}
              height={50}
              alt="Brian Noriega circle logo"
              src="/bnsite/photo-circle.webp"
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex md:hidden  ml-auto">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <CiMenuBurger aria-hidden="true" className="size-6 text-white" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12"></div>
        <div className="hidden md:flex md:flex-1 md:gap-x-12 md:justify-end">
          {navigation.map((item) => (
            <Link
              onClick={() => setMobileMenuOpen(true)}
              key={item.id}
              href={item.href}
              className={cn(
                "text-sm/6 font-semibold text-neutral-300 hover:text-teal-200 active:text-teal-300 focus:outline-none focus:ring focus:ring-teal-300",
                pathname === item.href && "text-teal-300"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <MobileMenu
          pathname={pathname}
          open={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </nav>
    </header>
  );
}

const MobileMenu = ({
  pathname,
  open,
  setMobileMenuOpen,
}: {
  pathname: string;
  open: boolean;
  setMobileMenuOpen: Function;
}) => {
  return (
    <div
      className="lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div
        className={cn(
          "fixed invisible inset-0 z-40 backdrop-filter backdrop-blur-lg",
          open && "visible"
        )}
      ></div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="Navigation"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            )}
          >
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Brian Noriega Personal Site</span>
                  <Image
                    width={50}
                    height={50}
                    alt="Brian Noriega circle logo"
                    src="/bnsite/photo-circle.webp"
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <IoClose className="size-6 text-white" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={cn(
                          "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-700 hover:text-white",
                          pathname === item.href && "bg-gray-900 text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};