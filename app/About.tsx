import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className=" flex-col items-center">
        <h2
          className={`text-center font-bold text-sm text-[#F11A7B] uppercase tracking-wider mb-6`}
        >
          About
        </h2>
        <p className="inline-block text-2xl sm:text-3xl mb-6 font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
          About Me
        </p>
        <span className="text-xs ml-2 opacity-40">{`(a bit formal intro)`}</span>
      </div>
      <p className="opacity-85 dark:text-zinc-400">
        As a pre-final year CSE undergrad, I&apos;m adept at building projects
        from scratch. I specialize in implementing{" "}
        <span className="font-bold">DevOps solutions</span> for applications and
        have a passion for creating innovative{" "}
        <span className="font-bold">web apps</span> using cutting-edge
        technology stacks. I&apos;m also open to collaborating on software
        projects.
      </p>

      <Link href={"/timeline"}>
        <Button
          className="mt-3 dark:text-zinc-400"
          size={"sm"}
          variant={"secondary"}
        >
          More info
        </Button>
      </Link>
    </div>
  );
};

export default About;
