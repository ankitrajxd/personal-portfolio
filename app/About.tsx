/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socials } from "./data/data";
import Image from "next/image";
import profilepic from "@/public/profilePicture.jpg";
import List from "./components/List";

const About = () => {
  return (
    <div className="md:w-[40%]">
      <div className=" flex-col items-center">
        <h2
          className={`text-center font-bold text-sm font-jetbrains  text-white uppercase tracking-wider mb-6`}
        >
          <span className="inline-block px-1 text-xs relative">
            <span className="inline-block">About</span>
            <span className="inline-block bg-gray-600 h-2 w-[87%] absolute bottom-0 left-[2.2px] -z-10 "></span>
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
            <p className="inline-block font-jetbrains text-xl sm:text-2xl  font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
              About Me
            </p>
          </div>
        </div>
      </div>
      <p className="opacity-100 dark:text-zinc-400 text-sm font-jetbrains">
        As a pre-final year CSE undergrad, I&apos;m adept at building projects
        from scratch. I specialize in implementing{" "}
        <span className="font-bold bg-[#FF6723] text-white px-1 underline-offset-[3px]">
          DevOps solutions
        </span>{" "}
        for applications and have a passion for creating innovative{" "}
        <span className="font-bold bg-violet-600 text-white px-1">
          Web apps
        </span>{" "}
        using cutting-edge technology stacks.
      </p>
      <div className="flex items-center mt-5 gap-3">
        <Link href={"/timeline"} className="relative text-xs font-jetbrains ">
          More info
        </Link>
      </div>
    </div>
  );
};

export default About;
