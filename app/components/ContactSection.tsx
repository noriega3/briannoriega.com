"use client";
import React from "react";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { TfiNewWindow } from "react-icons/tfi";
import Link from "next/link";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 ">At your service!</h2>
              <p className="text-lg text-gray-300 mb-8">
                Have a project in mind? Let us discuss how we can make it a reality. I am available
                for freelance work and look to tackle new challenges.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <Link
                        href="mailto:hello@briannoriega.com"
                        className={`w-full flex justify-center items-center underline rounded-lg px-3 py-2 font-medium transition-all duration-300 text-white bg-teal-700 hover:bg-teal-300 hover:text-black dark:bg-teal-700 dark:hover:bg-teal-300`}
                      >
                        hello@briannoriega.com
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3">
                    <FaLocationDot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      New York, NY
                      <br />
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 animate-slide-up transition-all duration-300">
                <Link
                  href="https://calendly.com/brian-noriega"
                  className={`w-full flex justify-center items-center underline rounded-lg px-3 py-2 font-medium transition-all duration-300 text-white bg-teal-700 hover:bg-teal-300 hover:text-black dark:bg-teal-700 dark:hover:bg-teal-300`}
                >
                  Book a free consultation <TfiNewWindow className=" ml-1" />
                </Link>
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary-200 dark:bg-secondary-800 rounded-full transform -rotate-45"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary-200 dark:bg-primary-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
