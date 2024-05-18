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

      <div className="flex gap-2 relative">
        {/* <DarkModeSwitch /> */}
        {/* <Button
          size={"sm"}
          className="bg-transparent border  text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
        >
          <Link className="opacity-90" href="/resume">
            Resume
          </Link>
        </Button> */}

        <a className="text-sm mr-2 relative" href="mailto:ankitrajxd@gmail.com">
          <span className="inline-block  relative">
            <span className="inline-block font-extrabold opacity-95">
              Contact
            </span>
            {/* <span className="inline-block bg-gradient-to-r from-[#FDBA66] to-[#FD6D71] h-1 w-full absolute bottom-[0] left-0 -z-10 "></span> */}

            <div className="w-[6.6rem] left-[-1.4rem] top-[-1.4rem] rotate-[8deg] absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 600 600"
              >
                <path
                  d="M450.94140625,230.96234130859375C418.77613321940106,233.57740783691406,140.2719523111979,272.80335489908856,116.73638916015625,278.0334777832031C93.20082600911458,283.2636006673177,254.02719116210938,270.1882680257161,309.72802734375,262.34307861328125C365.4288635253906,254.49788920084634,483.10667928059894,228.34727478027344,450.94140625,230.96234130859375C418.77613321940106,233.57740783691406,140.2719523111979,272.80335489908856,116.73638916015625,278.0334777832031"
                  fill="hsl(340, 45%, 50%)"
                ></path>
                <path
                  d="M382.6882669518493 191.7364286551852C350.5229939212504 194.3514951835055 72.01881301304718 233.57744224568 48.48324986200555 238.80756512979457C24.947686710963865 244.03768801390913 185.77405186395868 230.96235537230757 241.4748880455993 223.1171659598727C297.1757242272399 215.27197654743782 414.8535399824483 189.12136212686488 382.6882669518493 191.7364286551852C350.5229939212504 194.3514951835055 72.01881301304718 233.57744224568 48.48324986200555 238.80756512979457 "
                  fill-opacity="1"
                  fill='url("#SvgjsLinearGradient1000")'
                  opacity="1"
                  stroke-opacity="1"
                  stroke-width="0"
                  stroke="hsl(340, 45%, 30%)"
                  transform="matrix(1,0,0,1,75,75)"
                ></path>
                <defs>
                  <linearGradient id="SvgjsLinearGradient1000">
                    <stop stop-color="hsl(340, 45%, 50%)" offset="0"></stop>
                    <stop stop-color="hsl(340, 45%, 80%)" offset="1"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
