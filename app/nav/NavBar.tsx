import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./navbar.module.css";
import Link from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";

const NavBar = () => {
  return (
    <div
      className={`${styles.navbar} flex   justify-between my-3 md:my-6 px-[1rem] sm:px-[2rem] lg:px-[9rem]`}
    >
      <Link href={"/"} className="font-extrabold text-2xl ml-1">
        ar
        {/* <svg
          fill="#000000"
          className="dark:invert w-[27px] h-[27px] opacity-95"
          width="800px"
          height="800px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" d="M256,48,496,464H16Z" />
        </svg> */}
      </Link>

      <div className="flex gap-2  relative">
        {/* <DarkModeSwitch /> */}
        {/* <Button
          size={"sm"}
          className="bg-transparent border  text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
        >
          <Link className="opacity-90" href="/resume">
            Resume
          </Link>
        </Button> */}

        <a className="text-sm mr-1 relative" href="mailto:ankitrajxd@gmail.com">
          <span className="inline-block  relative">
            <span className="inline-block font-extrabold opacity-95">
              Contact
            </span>
            <span className="inline-block bg-gradient-to-r from-[#FDBA66] to-[#FD6D71]  h-1 w-full absolute bottom-[-2px] left-[1px] -z-10 "></span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
