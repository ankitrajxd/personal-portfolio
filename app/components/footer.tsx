"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto py-8 border-t border-zinc-800/60 text-xs text-faded flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p>© {currentYear} Ankit Raj. All rights reserved.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <Link
          href="/terms-and-conditions"
          className="hover:text-white transition-colors duration-200"
        >
          Terms
        </Link>
        <span className="text-zinc-800">•</span>
        <Link
          href="/privacy-policy"
          className="hover:text-white transition-colors duration-200"
        >
          Privacy
        </Link>
        <span className="text-zinc-800">•</span>
        <Link
          href="/refund-policy"
          className="hover:text-white transition-colors duration-200"
        >
          Refunds
        </Link>
        <span className="text-zinc-800">•</span>
        <Link
          href="/return-policy"
          className="hover:text-white transition-colors duration-200"
        >
          Returns
        </Link>
      </div>
    </footer>
  );
}
