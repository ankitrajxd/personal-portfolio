import Socials from "./Socials";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";

const Clock = dynamic(() => import("../components/Clock"), { ssr: false });

const Footer = () => {
  return (
    <div className="relative">
      <Socials />
      
    </div>
  );
};

export default Footer;
