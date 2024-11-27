import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./navbar.module.css";
import Link from "next/link";
import { CustomButton } from "../components/CustomButton";

const NavBar = () => {
  return (
    <div
      className={`${styles.navbar} flex justify-between my-[1rem] md:my-6 px-[1rem] sm:px-[2rem] lg:px-[9rem]`}
    >
      <Link href={"/"} className="font-extrabold text-2xl ml-1">
      <svg className="size-7" viewBox="0 0 73 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.5659 64.6847L30.3707 50.8799L16.5659 37.0752L30.5679 23.0732L44.3726 36.878L58.1774 23.0732L72.1794 37.0752L58.3746 50.8799L72.1794 64.6847L58.1774 78.6867L44.3726 64.8819L30.5679 78.6867L16.5659 64.6847ZM39.0479 50.8799L25.2432 64.6847L30.5679 70.0094L44.3726 56.2046L58.1774 70.0094L63.5021 64.6847L49.6973 50.8799L63.5021 37.0752L58.1774 31.7505L44.3726 45.5553L30.5679 31.7505L25.2432 37.0752L39.0479 50.8799Z" fill="#9D9D9D"/>
                          <path d="M0 41.6115L13.8048 27.8067L0 14.002L14.002 0L27.8067 13.8048L41.6115 0L55.6134 14.002L41.8087 27.8067L55.6134 41.6115L41.6115 55.6135L27.8067 41.8087L14.002 55.6135L0 41.6115ZM22.482 27.8067L8.67728 41.6115L14.002 46.9361L27.8067 33.1314L41.6115 46.9361L46.9362 41.6115L33.1314 27.8067L46.9362 14.002L41.6115 8.67726L27.8067 22.482L14.002 8.67726L8.67728 14.002L22.482 27.8067Z" fill="currentColor"/>
                          <path d="M0 41.6115L13.8048 27.8067L0 14.002L14.002 0L27.8067 13.8048L41.6115 0L55.6134 14.002L41.8087 27.8067L55.6134 41.6115L41.6115 55.6135L27.8067 41.8087L14.002 55.6135L0 41.6115ZM22.482 27.8067L8.67728 41.6115L14.002 46.9361L27.8067 33.1314L41.6115 46.9361L46.9362 41.6115L33.1314 27.8067L46.9362 14.002L41.6115 8.67726L27.8067 22.482L14.002 8.67726L8.67728 14.002L22.482 27.8067Z" fill="currentColor" fill-opacity="0.2"/>
                        </svg>
      </Link>

      <a href="mailto:ankitrajxd@gmail.com">
        <CustomButton />
      </a>
    </div>
  );
};

export default NavBar;
