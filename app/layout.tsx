import type { Metadata } from "next";

// Safeguard against broken experimental global.localStorage on Node.js server side
if (typeof window === "undefined" && typeof global !== "undefined") {
  try {
    delete (global as any).localStorage;
  } catch (e) {
    try {
      (global as any).localStorage = undefined;
    } catch (err) {}
  }
}

import { Lexend, Style_Script } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import AnnouncementRibbon from "./components/AnnouncementRibbon";

import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-style-script",
});

export const metadata: Metadata = {
  title: "Ankit Raj",
  description: "Full-stack web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative bg-gray text-white">
      <body
        className={`${lexend.className} ${styleScript.variable}  antialiased `}
      >
        <NextTopLoader color="#e7eaf6" height={1.4} shadow={false} />
        <AnnouncementRibbon />
        {/* <div className="w-full h-[1.5px] sticky top-0 z-10 bg-gradient-to-r from-[#fecc1b] to-[#f44250]  bg-black"></div> */}
        <div className="max-w-[41rem] px-6 mx-auto">{children}</div>
      </body>
    </html>
  );
}
