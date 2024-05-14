'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      // Other AOS options can be configured here
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
