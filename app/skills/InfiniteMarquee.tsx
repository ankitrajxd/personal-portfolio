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

const skillsText = "WEB DEVELOPMENT ◦ DEVOPS ◦ FRONTEND "; // Store repeated text

const InfiniteMarquee = ({ direction, className }: Props) => {
  const { theme } = useTheme();

  const marqueeStyles =
    theme === "dark"
      ? ` ${styles.strokedTextDark} font-bold dark:opacity-80 text-4xl flex gap-3`
      : ` ${styles.strokedText} font-bold text-5xl md:text-6xl`;

  return (
    <div className={`border-y ${className}`}>
      <Marquee
        direction={direction}
        speed={7}
        gradient
        gradientColor={theme === "dark" ? "#09090b" : ""}
        gradientWidth={100}
      >
        <p className={marqueeStyles}>
          {skillsText}◦ {skillsText}◦ MEOW
          <span className="mx-3 mr-5">◦</span>{" "}
          {/* Moved span outside for consistency */}
        </p>
      </Marquee>
    </div>
  );
};

export default InfiniteMarquee;
