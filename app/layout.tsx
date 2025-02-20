import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
      <body className={`${lexend.className}  antialiased `}>
        <div className="w-full h-[2px] sticky top-0 z-10 bg-gradient-to-r from-pink-500 via-orange-400 to-violet-600  bg-black"></div>

        <div className="max-w-[41rem] px-6 mx-auto">
          <Header className={"my-12 sm:my-16"} />
          {children}
        </div>
      </body>
    </html>
  );
}
