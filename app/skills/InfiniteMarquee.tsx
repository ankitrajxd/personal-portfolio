/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";

import styles from "./skills.module.css";

const InfiniteMarquee = () => {
  const { theme } = useTheme();

  return (
    <Marquee>
      {theme === "dark" ? (
        <p
          className={` ${styles.strokedTextDark} font-bold dark:opacity-80 text-5xl md:text-6xl`}
        >
          {`◦ WEB DEVELOPMENT ◦ DEVOPS ◦ FRONTEND ◦ WEB DEVELOPMENT ◦ DEVOPS ◦ FRONTEND ◦`}

        </p>
      ) : (
        <p className={` ${styles.strokedText} font-bold text-5xl md:text-6xl`}>
          {`◦ WEB DEVELOPMENT ◦ DEVOPS ◦ FRONTEND ◦ WEB DEVELOPMENT ◦ DEVOPS ◦ FRONTEND ◦`}
        </p>
      )}
    </Marquee>
  );
};

export default InfiniteMarquee;
