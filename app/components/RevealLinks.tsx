"use client";
import React from "react";
import { motion } from "framer-motion";
import { socials } from "../data/data";

export const RevealLinks = () => {
  return (
    <section className="flex flex-wrap md:justify-center gap-x-20 gap-y-2 px-8 text-white">
      {socials.map((s, index) => (
        <FlipLink key={index} href={s.url}>
          {s.name}
        </FlipLink>
      ))}
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface Props {
  children: string;
  href: string;
}

const FlipLink = ({ children, href }: Props) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-4xl md:text-8xl lg:text-5xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
