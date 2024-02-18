/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Tooltip } from "react-tooltip";

import styles from "./skills.module.css";
import { skills } from "../data/data";
import TooltipComponent from "../components/TooltipComponent";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="relative">
      <h2 className="text-center font-bold text-sm text-violet-600 uppercase tracking-wider mb-6">
        Skills
      </h2>
      <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
        What do i know?{" "}
      </p>
      <div
        className={` bg-white dark:bg-violet-800 dark:opacity-90  w-[100px] h-[100px] blur-3xl  absolute z-[-999]"`}
      ></div>
      <div className="flex gap-5 flex-wrap items-center justify-center">
        {skills.map((s) => (
          <>
            <Skill key={s.url} skill={s} />
          </>
        ))}
      </div>
      <p className="text-center text-gray-400 mt-5">{`(that's a lot!)`}</p>
    </div>
  );
};

export default Skills;
