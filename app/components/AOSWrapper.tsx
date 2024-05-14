"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSWrapperProps {
  children: ReactNode;
}

const AOSWrapper: React.FC<AOSWrapperProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      // Other AOS options can be configured here
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
