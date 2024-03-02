import curvedtext from "@/public/curved-text.png";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";
import styles from "../skills/skills.module.css";

const CurvedText = () => {
  return (
    <div className="flex justify-center flex-col items-center relative">
      <Image
        className={`${styles.rotateInfinite} dark:invert invert-0 pointer-events-none`}
        width={90}
        height={100}
        src={curvedtext}
        alt="about"
      />
      <div className="w-12 h-12 absolute rounded-full dark:bg-white bg-zinc-950 flex items-center justify-center">
        <GoArrowDown className="invert" size={30} />
      </div>
    </div>
  );
};

export default CurvedText;
