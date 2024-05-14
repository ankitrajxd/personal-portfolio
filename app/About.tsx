/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socials } from "./data/data";
import Image from "next/image";
import profilepic from "@/public/profilePicture.jpg";

const About = () => {
  return (
    <div>
      <div className=" flex-col items-center">
        <h2
          className={`text-center font-bold text-sm text-gray-500 uppercase tracking-wider mb-6`}
        >
          About
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
            <p className="inline-block text-2xl sm:text-3xl  font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
              About Me
            </p>
          </div>
        </div>
      </div>

      <p className="opacity-85 dark:text-zinc-400 font-jetbrains">
        As a pre-final year CSE undergrad, I&apos;m adept at building projects
        from scratch. I specialize in implementing{" "}
        <span className="font-bold bg-[#FF6723] text-white px-1 underline-offset-[3px]">
          DevOps solutions
        </span>{" "}
        for applications and have a passion for creating innovative{" "}
        <span className="font-bold bg-purple-500 text-white px-1">
          Web apps
        </span>{" "}
        using cutting-edge technology stacks.
        {/* I&apos;m also open to collaborating on software
        projects. */}
      </p>
      <div className="flex items-center mt-5 gap-3">
        <Link
          href={"/timeline"}
          className="relative font-jetbrains underline underline-offset-4"
        >
          More info
          {/* <span className="absolute right-[-2px] top-[-2px] flex h-2 w-2 ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span> */}
        </Link>

        {/* <div className="flex gap-2 justify-center items-center">
          {socials.map((s) => (
            <a
              key={s.name}
              target="_blank"
              className={` opacity-60 transition-all hover:opacity-100 dark:bg-zinc-800 bg-zinc-100  p-2 rounded-md`}
              href={s.url}
            >
              <img
                alt={s.name}
                className="invert-0 w-[20px] dark:invert"
                src={s.icon}
              />
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default About;
