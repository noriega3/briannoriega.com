import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { BackgroundBeams } from "./components/ui/background-beams";

export const metadata: Metadata = {
  title: "Brian Noriega",
  description: "Personal website for brian noriega.",
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
      </body>
    </html>
  );
}
