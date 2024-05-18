import curvedtext from "@/public/curved-text.png";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";
import styles from "../skills/skills.module.css";
import Link from "next/link";

const CurvedText = () => {
  return (
    <div className="flex hover:scale-105 transition-all justify-center flex-col items-center relative">
      <Image
        className={`${styles.rotateInfinite} dark:invert invert-0 pointer-events-none`}
        width={90}
        height={100}
        src={curvedtext}
        alt="about"
      />
      <Link
        href="#skills"
        className="w-12 h-12 absolute rounded-full dark:bg-white bg-zinc-950 flex items-center justify-center"
      >
        <GoArrowDown className="invert" size={30} />
      </Link>
    </div>
  );
};

export default CurvedText;
