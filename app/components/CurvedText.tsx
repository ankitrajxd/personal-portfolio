import curvedtext from "@/public/curved-text.png";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";
import styles from "../skills/skills.module.css";

const CurvedText = () => {
  return (
    <div className="flex justify-center flex-col items-center relative">
      <Image
        className={`${styles.rotateInfinite} dark:invert invert-0`}
        width={90}
        height={100}
        src={curvedtext}
        alt="about"
      />
      <GoArrowDown className="absolute stroke-[0] opacity-70" size={40} />
    </div>
  );
};

export default CurvedText;
