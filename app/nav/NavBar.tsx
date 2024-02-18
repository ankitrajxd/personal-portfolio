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
        Δ
      </Link>
      <div className="flex gap-2">
        <DarkModeSwitch />
        <Button className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
          <Link href="/resume">Resume</Link>
        </Button>
        <Button className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
          <a href="mailto:ankitrajxd@gmail.com">Say Hi!</a>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
