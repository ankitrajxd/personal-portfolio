"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import LordKrishna from "@/public/lordKrishna.png";
import Image from "next/image";

const Quote = () => {
  return (
    <>
      <Tilt
        tiltEnable={false}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="white"
        glarePosition="all"
        glareBorderRadius="1px"
      >
        <div className="dark:bg-zinc-900 bg-zinc-100 w-full items-center p-8 rounded-md shadow-white relative overflow-hidden">
          <svg
            className="absolute top-[-1rem] opacity-65"
            width="150"
            height="102"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD700 " />
                <stop offset="100%" stopColor="#FF6347" />
              </linearGradient>
            </defs>
            <path
              d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
              fill="url(#gradient)"
              fillRule="nonzero"
            />
          </svg>
          <p className="text-[2rem] text-zinc-600 dark:text-zinc-400 font-protest relative z-20   mt-[5rem] mb-3  ">
            Throughout Heaven and Earth, I Alone Am The Honored One
          </p>
          <p className="italic opacity-50 text-end">- Satoru Gojo</p>
        </div>
      </Tilt>
    </>
  );
};

export default Quote;
