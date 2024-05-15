import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import NavBar from "./nav/NavBar";
import AnimatedDiv from "./components/AnimatedDiv";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AOSWrapper from "./components/AOSWrapper";
import Footer from "./footer/Footer";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";

const protest = localFont({
  src: "../public/fonts/ProtestRiot-Regular.ttf",
  variable: "--font-protest",
});
const poppins = localFont({
  src: "../public/fonts/Poppins-Regular.ttf",
});
const jetbrains = localFont({
  src: "../public/fonts/Jetbrains.ttf",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Ankit Raj",
  description: "DevOps && Frontend Developer",
  keywords: ["Ankit", "Raj", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${protest.variable} ${jetbrains.variable}`}
      >
        <AnimatedDiv>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <NextTopLoader
              color={
                // "linear-gradient(26deg,#e60073 0%,#ff1493 16.66%, #ff4500 33.33%,#ff8c00 50%)"
                "orange"
              }
            />

            <Analytics />
            <SpeedInsights />
            <NavBar />
            <AOSWrapper>{children}</AOSWrapper>
            <div className="px-[1rem] bg-zinc-900 md:px-[9rem] py-5 relative flex justify-center items-center">
              <Footer />
              {/* <p className="text-center text-xs opacity-55 absolute bottom-0 left-[50vw]">
                Designed by A Built with NextJS
              </p> */}
            </div>
          </ThemeProvider>
        </AnimatedDiv>
      </body>
    </html>
  );
}
