import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import AnimatedDiv from "./components/AnimatedDiv";
import AOSWrapper from "./components/AOSWrapper";
import Footer from "./footer/Footer";
import "./globals.css";
import NavBar from "./nav/NavBar";

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
  keywords: ["Ankit", "Raj", "Portfolio", "ankitrajxd"],
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
