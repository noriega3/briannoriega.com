import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { BackgroundBeams } from "./components/ui/background-beams";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brian Noriega",
  description: "Brian Noriega is a software engineer and engineering manager who specializes in building fast, accessible, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTAG_ID || ""} />
      <body className="relative w-full h-svh flex flex-row sm:flex-col flex-wrap sm:flex-nowrap bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <Navigation className="w-fixed w-full flex-shrink flex-grow-0" />
        <main role="main" className="w-full flex-grow">
          {children}
        </main>
        <Footer />
        <BackgroundBeams />
        <Script
          id="bnack"
          src="https://srv.briannoriega.com/bnack.js"
          data-ackee-server="https://srv.briannoriega.com"
          data-ackee-domain-id={process.env.NEXT_PUBLIC_SRV_ID}
          data-ackee-opts='{"detailed": true}'
        />
        <Script
          async
          src="https://srv2.briannoriega.com/script.js"
          data-website-id={process.env.NEXT_PUBLIC_SRV2_ID}
          strategy="afterInteractive"
        ></Script>
        <SpeedInsights/>
      </body>
    </html>
  );
}
