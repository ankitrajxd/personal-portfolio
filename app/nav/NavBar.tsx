import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./navbar.module.css";
import Link from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";

const NavBar = () => {
  return (
    <div
      className={`${styles.navbar} flex justify-between my-3 md:my-6 px-[1rem] sm:px-[2rem] lg:px-[9rem]`}
    >
      <Link href={"/"} className="font-extrabold font-protest text-3xl">
        {/* Δ */}
        <svg
          fill="#000000"
          className="dark:invert w-[28px] h-[28px]"
          width="800px"
          height="800px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" d="M256,48,496,464H16Z" />
        </svg>
      </Link>

      <div className="flex gap-2 relative">
        <DarkModeSwitch />
        <Button
          size={"sm"}
          className="bg-transparent border  text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
        >
          <Link className="opacity-90" href="/resume">
            Resume
          </Link>
        </Button>
        <Button
          size={"sm"}
          className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
        >
          <a className="opacity-90" href="mailto:ankitrajxd@gmail.com">
            Say Hi!
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
