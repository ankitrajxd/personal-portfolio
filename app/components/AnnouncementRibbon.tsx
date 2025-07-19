"use client";

import { useState, useEffect } from "react";

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function AnnouncementRibbon() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if ribbon was previously dismissed
    const isDismissed = localStorage.getItem("announcementDismissed");
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcementDismissed", "true");
  };

  if (!isClient || !isVisible) return null;

  return (
    <div className="bg-nav border-b border-zinc-800 text-center py-3 px-4 relative">
      <div className="flex items-center justify-center relative max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[13px] font-medium text-heading">
              Available for new projects
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-700"></div>
          <span className="text-[13px] text-faded hidden sm:inline">
            Get 20% off early 2025 bookings
          </span>
        </div>
        <button
          onClick={handleDismiss}
          className="absolute right-0 p-1.5 hover:bg-zinc-800 rounded-full transition-colors duration-200 text-faded hover:text-text"
          aria-label="Dismiss announcement"
        >
          <CloseIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
