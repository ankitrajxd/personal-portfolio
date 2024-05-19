import Socials from "./Socials";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";

const Clock = dynamic(() => import("../components/Clock"), { ssr: false });

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`${className} text-xs
     bottom-0 left-0 z-20 w-full p-4 bg-white border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-900 border-0`}
    >
      <span className=" text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="https://github.com/ankitrajxd" className="hover:underline">
          Ankit Raj
        </a>
        . All Rights Reserved.
      </span>
      {/* <div className="flex flex-wrap items-center mt-3  font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <Socials />
      </div> */}
    </footer>
  );
};

export default Footer;
