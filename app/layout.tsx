import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

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
        <NextTopLoader color="#e7eaf6" height={1.4} shadow={false} />
        {/* <div className="w-full h-[1.5px] sticky top-0 z-10 bg-gradient-to-r from-[#fecc1b] to-[#f44250]  bg-black"></div> */}
        <div className="max-w-[41rem] px-6 mx-auto">{children}</div>
      </body>
    </html>
  );
}
