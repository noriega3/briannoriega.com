import React from "react";
import { Person, WithContext } from "schema-dts";
import { Metadata } from "next";
import Script from "next/script";
import { Timeline } from "../components/ui/timeline";
import { ContactIcons } from "../components/ui/contact-icons";
import { Certifications } from "../components/Certifications";
import { Badge } from "../components/ui/badge";

export const metadata: Metadata = {
  title: "About",
};

const jsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian Noriega",
  givenName: "Lawrence",
  nationality: "United States",
  jobTitle: "Software Engineer",
  url: "https://www.briannoriega.com",
  sameAs: "https://www.nori.nyc",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York, NY",
  },
  disambiguatingDescription:
    "A Software Engineer specializing in building fast, accessible, and user-friendly applications. With expertise in tech such as TypeScript, React, Next.js, and Node.js, I create scalable solutions that drive results.",
  skills:
    "TypeScript, React, Next.js, Node.js, PHP, Lua, JavaScript, JQuery, WordPress, SPA, Vue, C#, Unity, Visual Basic, MYSQL, MariaDB, REST APIs, SEO, Software Development, Mobile App Development, Agile, Automation, AI",
};

export default function About() {
  const data = [
    {
      title: "2025 - ",
      content: (
        <div>
          <p className="text-xs md:text-sm font-bold mb-1">WisdomSeek (TBD)</p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">
            Senior Software Engineer
            <br />
            Chief Technology Officer
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            A spiritual wellness platform leveraging advanced AI to deliver
            personalized and spiritual guidance. Proprietary conversational AI system using
            prompt engineering and natural language processing to create intuitive
            experiences that balance spirtual insight with grounded psychological support.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Developed Next.js application with third party authentication system and Stripe API
            integration for subscription management, building comprehensive user onboarding and
            billing webhooks with automated payment processing.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Integrated Vercel AI SDK useChat hook to establish seamless communication between Next.js and
            Python FastAPI, enabling real-time streamable AI responses for dynamic, conversational
            user experiences.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Built comprehensive token-based usage tracking system monitoring API consumption, user
            engagement metrics, and subscription utilization to optimize both user experience and
            operational costs.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Created scalable backend infrastructure supporting real-time personalization and
            symbolic interpretation.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Implemented modern user experience flows that make traditional practices
            accessible to modern digital audiences.
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <Badge>TypeScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>JavaScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>React</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Next.js</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Python</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>FastAPI</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Tanstack Query</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Mantine</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>TailwindCSS</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Github Actions</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Stripe API</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>OpenAI API</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Amazon Web Services</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>MongoDB</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>PostgreSQL</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Better Auth</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Docker</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Resend</Badge>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2025 -",
      content: (
        <div>
          <p className="text-xs md:text-sm font-bold mb-1">Code S LLC (2nd stint) - TBD name</p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">Freelance</p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Worked on a large talent agency that raked in $1+ million in revenue, modernizing and
            updating legacy code, making it easier for people to book their favorite artists for
            public and private events.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Contracted to a VBRO compeditor, providing a full consultation of their existing
            website, highlighting optimizations to UI/UX, providing a spreadsheet of accessiblity
            tasks to achieve WCAG 2.0, and details on how to improve page speed load times and
            readability specific to their platform.
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <Badge>JavaScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>TypeScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>React</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>PHP</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Composer</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Google Lighthouse</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Google Tag Manager</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Web Accessiblity</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Web Optimizations</Badge>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2020 - 2025",
      content: (
        <div>
          <p className="text-xs md:text-sm font-bold mb-1">Aetna, a CVS Health Company</p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">
            Lead/Manager Software Engineer (2022-2025)
            <br />
            Senior Software Engineer (2020-2025)
            <br />
            Contract Software Engineer (2018)
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Aetna is part of the Fortune 500 and a major us insurance carrier. Focused on digital
            Medicare marketing department to drive increased enrollments through phone and web
            channels.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Lead a successful mobile application pilot in retail CVS utilizing React, TypeScript,
            Redux, JavaScript, PHP and headless WordPress.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Implemented and managed an AI chatbot which captured member traffic on web pages,
            driving enhanced prospect engagement and sales.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Hosted monthly deep dives to upper management, detailing technical timelines related to
            company goals to a non-technical audience on an organizational level.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Assisted offshore and translated technical jargon to cross-organization teams on
            upgrading cloud infrastructure properties.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Lead technical security package migrations on a legacy application with Vue on
            enterprise infrastructure.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Integrated tools such as Google Analytics with specific metrics tracking, Microsoft
            Clarity for heatmaps, Quantum Metrics, and Adobe products that contributed to success of
            team goals.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Architected and managed a Next.js web application within Azure App Service to create a
            new sales channel that tailored for creating marketing pages for prospects looking for
            Medicare insurance.
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <Badge>JavaScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>TypeScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Next.js</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>React</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Microsoft Azure</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>OpenShift</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>PHP</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Headless WordPress</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Material UI</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Storybook</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Vue</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Docker</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Jenkins</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Octopus</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>UDeploy</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Adobe Experience Manager</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Salesforce</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>MySQL / MariaDB</Badge>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2019 - 2020",
      content: (
        <div>
          <p className="text-xs md:text-sm font-bold mb-1">WillowTree Apps</p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">
            Platform Software Engineer
            <br />
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            WillowTree is a digital design and development agency partnering with companies like
            Synchrony, Zappos, PepsiCo, HBO, and GE to solve real-world product strategy, design,
            and technical problems.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Built React web pages for a Fortune 500 financial partner, utilizing Redux,
            Flow/TypeScript, Express, Material UI, and SCSS. Consistently met sprint deadlines in a
            Scrum/Agile environment through effective communication across quality assurance (QA),
            UI/UX teams, project managers, and technical project managers (TPMs).
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <Badge>JavaScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>TypeScript / Flow</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>React</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>UDeploy</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Material UI</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Storybook</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Docker</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Jira</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Google Tag Manager</Badge>
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
            <p className="text-xs md:text-sm font-bold mb-1">Conversion Fanatics</p>
            <p className="text-neutral-400 text-xs md:text-sm mb-2">
              Engineer (Contract)
              <br />
            </p>
            <p className="text-xs md:text-sm font-normal mb-4">
              Conversion Fanatics is a digital marketing agency, focused on optimizing sales and
              other key metrics for clients such as Burts Bees, RenewLife, ButcherBox, and many
              more.
            </p>
            <ul className="mt-2 flex flex-wrap mb-8" aria-label="Technologies used">
              <li className="mr-1.5 mt-2">
                <Badge>JavaScript</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>JQuery</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>HTML</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>CSS / SCSS</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>Optimizely</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>Convert</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>PHP</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>Google Tag Manager</Badge>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs md:text-sm font-bold mb-1">Case Western University</p>
            <p className="text-neutral-400 text-xs md:text-sm mb-2">Instructional Staff</p>
            <p className="text-xs md:text-sm font-normal mb-4">
              Case Western Reserve University is a private accredited doctorate-granting university.
              The department was responsible for teaching web development and running through these
              terms to students in a 12 or 24 week course.
            </p>
            <ul className="mt-2 flex flex-wrap mb-8" aria-label="Technologies used">
              <li className="mr-1.5 mt-2">
                <Badge>JavaScript</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>JQuery</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>HTML</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>CSS / SCSS</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>MySQL</Badge>
              </li>
              <li className="mr-1.5 mt-2">
                <Badge>REST APIs</Badge>
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
          <p className="text-xs md:text-sm font-bold mb-1">Bomzy Apps</p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">Senior Engineer</p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Bomzy Apps is a mobile application company specializing in casino-themed mobile
            applications that replicated the casino experience without required monetary
            transactions.
          </p>
          <ul className="mt-2 flex flex-wrap mb-8" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <Badge>Node.js</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Lua</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>React</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>JavaScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>PHP</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Express.js</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>MySQL</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Redis</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Jira</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Socket.io</Badge>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2012 - 2015",
      content: (
        <div>
          <p className="text-xs md:text-sm font-bold mb-1">MECLABS Institute</p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">Engineer</p>
          <p className="text-xs md:text-sm font-normal mb-4">
            MECLABS is a digital marketing agency. The company used behavioral testing to help
            businesses understand why people say yes (or no) to their offers. Overall, they help
            discover their value propositions and create effective messaging to connect with ideal
            customers.
          </p>
          <p className="text-xs md:text-sm font-normal mb-4">
            Deployed over 50 landing pages, e-commerce experiences, and content-hub websites for
            partners such as Boston Globe, Bridgestone, Verizon, and McGraw-Hill to improve their
            overall sales goals.
          </p>
          <ul className="mt-2 flex flex-wrap mb-8" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <Badge>PHP</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>HTML5</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>CSS</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>JavaScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>JQuery / JQuery UI</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Google Analytics</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Adobe Test & Target</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Optimizely</Badge>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2011 - 2019",
      content: (
        <div>
          <p className="text-xs md:text-sm font-bold mb-1">Code S LLC</p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">Senior Engineer</p>
          <p className="text-xs md:text-sm font-normal mb-8">
            Code S was an incorporated company that released various mobile apps and other open
            sourced projects.
          </p>
          <ul className="mt-2 flex flex-wrap mb-8" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <Badge>PHP</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Lua</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>HTML5</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>CSS</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>JavaScript</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>JQuery / JQuery UI</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Android (Java)</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Unity (C#)</Badge>
            </li>
            <li className="mr-1.5 mt-2">
              <Badge>Google Tag Manager</Badge>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2011",
      content: (
        <div>
          <p className="text-xs md:text-sm font-bold mb-1">University of Florida</p>
          <p className="text-neutral-400 text-xs md:text-sm mb-2">
            Bachelors of Science in Business Administration, Information Systems
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div>
        <Timeline className={"relative"} data={data}>
          <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
            <h1 className="text-lg md:text-4xl mb-4  max-w-4xl">My career journey (so far)</h1>
            <ContactIcons />
          </div>
        </Timeline>
        <Certifications />
      </div>
    </>
  );
}
