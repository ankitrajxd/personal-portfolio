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
    <div className="ribbon-gradient relative text-white text-center py-2 px-4 text-sm">
      <div className="flex items-center justify-center relative">
        <p className="font-medium text-xs">
          🚀 Now accepting new projects for 2024!
          <span className="ml-2 text-white/90">Get 20% off early bookings</span>
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-0 p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
          aria-label="Dismiss announcement"
        >
          <CloseIcon className="w-4 h-4 absolute sm:static" />
        </button>
      </div>
    </div>
  );
}
