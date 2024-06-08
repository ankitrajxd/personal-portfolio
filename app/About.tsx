/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import profilepic from "@/public/profilePicture.jpg";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <div className="md:w-[40%] ">
      <div className=" flex-col items-center">
        <h2
          className={`text-center font-bold text-sm   text-white uppercase tracking-wider mb-6`}
        >
          <span className="inline-block px-1 text-xs relative">
            <span className="inline-block text-red-500">About</span>
            {/* <span className="inline-block bg-gray-600 h-2 w-[87%] absolute bottom-0 left-[2.2px] -z-10 "></span> */}
          </span>
        </h2>
        <div className="flex items-center gap-3 my-4">
          <div>
            <Image
              src={profilepic}
              alt="gojo"
              className="object-cover aspect-square rounded-full border-[5px]"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="inline-block  text-xl sm:text-2xl  font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
              Ankit Raj
            </p>
          </div>
        </div>
      </div>
      <p className="opacity-100 dark:text-zinc-400 text-sm">
        I&apos;m a skilled frontend web developer and DevOps engineer with a
        passion for creating seamless, responsive web applications and{" "}
        <span className="font-bold text-white px-1 underline-offset-[3px]">
          optimizing
        </span>{" "}
        development workflows. I bridge the gap between development and
        operations to deliver high-quality and
        <span className="font-bold text-white px-1">scalable solutions</span>.
      </p>
      <div className="flex items-center mt-5 gap-1">
        <Link
          href={"/timeline"}
          className=" text-xs hover:underline underline-offset-4"
        >
          More info
        </Link>
        <GoArrowUpRight />
      </div>
    </div>
  );
};

export default About;
