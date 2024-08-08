/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";

import styles from "./skills.module.css";

interface Props {
  direction: "left" | "right" | "down" | "up";
  className?: string;
}

const InfiniteMarquee = ({ direction, className }: Props) => {
  const { theme } = useTheme();

  return (
    <div className={`border-y  ${className}`}>
      <Marquee
        direction={direction}
        gradient
        gradientColor={theme === "dark" ? "#09090b" : ""}
        gradientWidth={100}
      >
        {theme === "dark" ? (
          <p
            className={` ${styles.strokedTextDark} font-bold  dark:opacity-80 text-5xl flex gap-3`}
          >
            WEB DEVELOPMENT ◦ DEVOPS ◦ FRONTEND ◦ WEB DEVELOPMENT ◦ DEVOPS ◦
            FRONTEND ◦ MEOW
            <span className="mx-3 mr-5 ">◦</span>
          </p>
        ) : (
          <p
            className={` ${styles.strokedText} font-bold text-5xl md:text-6xl`}
          >
            {` WEB DEVELOPMENT ◦ DEVOPS ◦ FRONTEND ◦ WEB DEVELOPMENT ◦ DEVOPS ◦ FRONTEND `}
            <span className="mx-3 mr-5 ">◦</span>
          </p>
        )}
      </Marquee>
    </div>
  );
};

export default InfiniteMarquee;
