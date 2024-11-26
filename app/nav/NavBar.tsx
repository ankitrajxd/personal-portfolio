import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./navbar.module.css";
import Link from "next/link";
import { CustomButton } from "../components/CustomButton";

const NavBar = () => {
  return (
    <div
      className={`${styles.navbar} flex justify-between my-3 md:my-6 px-[1rem] sm:px-[2rem] lg:px-[9rem]`}
    >
      <Link href={"/"} className="font-extrabold text-2xl ml-1">
        ar
      </Link>

      <a href="mailto:ankitrajxd@gmail.com">
        <CustomButton/>
      </a>
    </div>
  );
};

export default NavBar;
