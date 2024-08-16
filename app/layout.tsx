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
const canela = localFont({
  src: "../public/fonts/canela.otf",
  variable: "--font-canela",
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
        className={`${poppins.className} ${protest.variable} ${canela.variable}`}
      >
        <AnimatedDiv ClassName="relative">
          <ThemeProvider attribute="class" defaultTheme="dark">
            <NextTopLoader
              color={
                "linear-gradient(26deg,#c5f9d7 0%,#f7d486 16.66%, #f27a7d 33.33%,#f9b16e 50%)"
              }
            />

            <Analytics />
            <SpeedInsights />
            <NavBar />

            <AOSWrapper>{children}</AOSWrapper>
            <div className=" md:px-[9rem] relative flex justify-center items-center">
              <Footer className="abolute bottom-0" />
            </div>
          </ThemeProvider>
        </AnimatedDiv>
      </body>
    </html>
  );
}
