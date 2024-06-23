import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./navbar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div
      className={`${styles.navbar} flex justify-between overflow-x-clip my-3 md:my-6 px-[1rem] sm:px-[2rem] lg:px-[9rem]`}
    >
      <Link href={"/"} className="font-extrabold text-2xl ml-1">
        ar
      </Link>

      <div className="flex gap-2 mr-2 items-center justify-center  relative">
        {/* <DarkModeSwitch /> */}
        {/* <Button
          size={"sm"}
          className="bg-transparent border  text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
        >
          <Link className="opacity-90" href="/resume">
            Resume
          </Link>
        </Button> */}

        <a className="text-sm " href="mailto:ankitrajxd@gmail.com">
          <span className=" opacity-95">contact</span>
        </a>
        <svg
          className="absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1250 500"
          fill="#e9d8a6"
          width={120}
        >
          <path d="M560.2 440.3C450 436 259 425.6 184 337.4 32.8 200.6 351.7 116.6 447 94.1c128.7-28.7 263.4-46.6 394.5-24.8 37.4 6 74.9 14.6 108.8 32 60 19.7 128.2 71.3 98.4 142-10.9 26.7-31.2 48.5-53.7 66-23 29.2-53.7 50.9-86.6 67.6-107.5 52-230 64.7-348.3 63.4Zm-29.3-17.8c112 4.4 226.9-4.7 332.4-44.7-151.4 50-314.8 52.7-471.6 30.8 46.1 7.2 92.6 11.7 139.2 14Zm-9.2-18.7c119.3 4.6 241-7 353.5-48.8a440.7 440.7 0 0 0 79.4-39.3 92.8 92.8 0 0 0 42-46c29.5-59.2 7.9-120-50.2-150.3-1 4.9-7.8 5.8-11.2 2.7-3.5-3.7-6.2-8.3-10.8-11-38.4-11.3-78-17.2-117.8-20.5-174.9-10-386.4 27.7-541 111.5C219.9 226.9 158 270.5 201 327c87.7 60.7 216.6 69.9 320.8 76.7ZM166.3 278c10.4-55 78.8-85.4 124.1-108.6-3.5-3.9-.9-9.6 3.8-11C334 144.8 374 132 414 119.1c-61.7 16.8-266.4 75.2-247.8 159ZM1028 190a115.2 115.2 0 0 1 .6 48.2 70 70 0 0 0-8.1-70.2c3.2 7 5.7 14.5 7.5 22Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
