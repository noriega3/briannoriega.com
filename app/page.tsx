import type { Metadata } from "next";
import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "Brian Noriega",
  description: "Personal website for brian noriega.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
};

export default function Page() {
  return <HomePage />;
}
