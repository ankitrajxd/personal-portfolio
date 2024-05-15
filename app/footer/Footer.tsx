import Socials from "./Socials";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";

const Clock = dynamic(() => import("../components/Clock"), { ssr: false });

const Footer = () => {
  return (
    <div className="relative">
      <Socials />
      <Link
        href={"#top"}
        className="absolute bottom-[-10px] bg-zinc-800 p-2 rounded-full opacity-90"
      >
        <GoArrowDown className="inline-block -rotate-180" size={30} />
      </Link>
    </div>
  );
};

export default Footer;
