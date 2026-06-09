"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-8 sm:py-12"
    >
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm text-text hover:text-white transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
        <span className="text-xs text-faded">Last Updated: {lastUpdated}</span>
      </div>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-heading tracking-tight mb-2">
          {title}
        </h1>
        <div className="h-1 w-12 bg-zinc-700 rounded-full" />
      </header>

      <article className="prose prose-invert max-w-none text-text leading-relaxed font-light text-[14px] sm:text-[15px] space-y-6">
        {children}
      </article>
    </motion.div>
  );
}
