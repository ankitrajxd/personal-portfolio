import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import NavBar from "./nav/NavBar";

const protest = localFont({
  src: "../public/fonts/ProtestRiot-Regular.ttf",
  variable: "--font-protest",
});
const poppins = localFont({
  src: "../public/fonts/Poppins-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Ankit Raj",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${protest.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextTopLoader
            color={
              "linear-gradient(26deg,#e60073 0%,#ff1493 16.66%, #ff4500 33.33%,#ff8c00 50%)"
            }
          />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
