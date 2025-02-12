"use client";
import React from "react";
import { Timeline } from "../components/ui/timeline";
import { ContactIcons } from "../components/ui/contact-icons";
import { Certifications } from "../components/ui/certifications";

export default function About() {
  const data = [
    {
      title: "2020 - 2025",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-1">
            Aetna / HealthSpire, a CVS Health Company
          </p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">
            Lead Engineer
            <br />
            Senior Engineer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Aetna is part of the Fortune 500 and a major insurance carrier.
            Focused on digital Medicare marketing to drive increased enrollments
            through phone and web channels.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lead a successful mobile application pilot in retail CVS utilizing
            React, JavaScript, PHP and headless WordPress. Implemented and
            managed an AI chatbot which captured member traffic on web pages,
            driving enhanced prospect engagement and sales. Created and managed
            a Next.js web platform with Azure App Service tailored for creating
            marketing pages for prospects looking for Medicare insurance.
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JavaScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                TypeScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Microsoft Azure
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                OpenShift
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PHP
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Headless WordPress
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Material UI
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Storybook
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Vue
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Docker
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Jenkins
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Octopus
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                UDeploy
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Adobe Experience Manager
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Salesforce
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                MySQL / MariaDB
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2019 - 2020",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-1">
            WillowTree Apps
          </p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">
            Platform Software Engineer (Web)
            <br />
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            WillowTree is a digital design and development agency partnering
            with companies like Synchrony, Zappos, PepsiCo, HBO, and GE to solve
            real-world product strategy, design, and technical problems.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Built React web pages for a Fortune 500 financial partner, utilizing
            Redux, Express, Material UI, and SCSS. Consistently met sprint
            deadlines in a Scrum/Agile environment through effective
            communication across quality assurance (QA), UI/UX teams, project
            managers, and technical project managers (TPMs).
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JavaScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                TypeScript / Flow
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                UDeploy
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Material UI
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Storybook
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Docker
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Jira
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Google Tag Manager
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Late 2018",
      content: (
        <div>
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-bold mb-1">
              Conversion Fanatics
            </p>
            <p className="text-neutral-400 text-xs md:text-sm mb-2">
              Engineer (Contract)
              <br />
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Conversion Fanatics is a digital marketing agency, focused on
              optimizing sales and other key metrics for clients such as Burts
              Bees, RenewLife, ButcherBox, and many more.
            </p>
            <ul
              className="mt-2 flex flex-wrap mb-8"
              aria-label="Technologies used"
            >
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  JavaScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  JQuery
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  HTML
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  CSS / SCSS
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Optimizely
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Convert
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  PHP
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  Google Tag Manager
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-bold mb-1">
              Case Western University
            </p>
            <p className="text-neutral-400 text-xs md:text-sm mb-2">
              Instructional Staff
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Case Western Reserve University is a private accredited
              doctorate-granting university. The department was responsible for
              teaching web development and running through these terms to
              students in a 12 or 24 week course.
            </p>
            <ul
              className="mt-2 flex flex-wrap mb-8"
              aria-label="Technologies used"
            >
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  JavaScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  JQuery
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  HTML
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  CSS / SCSS
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  MySQL
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  REST APIs
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2015 - 2018",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-1">
            Bomzy Apps
          </p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">
            Senior Engineer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Bomzy Apps is a mobile application company specializing in
            casino-themed mobile applications that replicated the casino
            experience without required monetary transactions.
          </p>
          <ul
            className="mt-2 flex flex-wrap mb-8"
            aria-label="Technologies used"
          >
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Node.js
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Lua
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JavaScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PHP
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Express.js
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                MySQL
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Redis
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Jira
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Socket.io
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2012 - 2015",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-1">
            MECLABS Institute
          </p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">Engineer</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            MECLABS is a digital marketing agency. The company used behavioral
            testing to help businesses understand why people say yes (or no) to
            their offers. Overall, they help discover their value propositions
            and create effective messaging to connect with ideal customers.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed over 50 landing pages, e-commerce experiences, and
            content-hub websites for partners such as Boston Globe, Bridgestone,
            Verizon, and McGraw-Hill to improve their overall sales goals.
          </p>
          <ul
            className="mt-2 flex flex-wrap mb-8"
            aria-label="Technologies used"
          >
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PHP
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                HTML5
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                CSS
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JavaScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JQuery / JQuery UI
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Google Analytics
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Adobe Test & Target
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Optimizely
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2011 - 2019",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-1">
            Code S LLC
          </p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">
            Senior Engineer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Code S was an incorporated company that released various mobile apps
            and other open sourced projects.
          </p>
          <ul
            className="mt-2 flex flex-wrap mb-8"
            aria-label="Technologies used"
          >
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PHP
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Lua
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                HTML5
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                CSS
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JavaScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JQuery / JQuery UI
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Android (Java)
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Unity (C#)
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Google Tag Manager
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2011",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-1">
            University of Florida
          </p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">
            Bachelors of Science in Business Administration, Information Systems
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Timeline data={data}>
        <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
          <h1 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            My career journey (so far)
          </h1>
          <ContactIcons />
        </div>
      </Timeline>
      <Certifications />
    </>
  );
}
