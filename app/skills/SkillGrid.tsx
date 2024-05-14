/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { skills } from "../data/data";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="relative">
      <h2 className="text-center font-bold text-sm text-purple-500 font-jetbrains uppercase tracking-wider mb-6">
        Skills
      </h2>
      <p className="text-center font-jetbrains text-xl sm:text-2xl mb-6 font-extrabold">
        Tools I work with{" "}
      </p>
      <div
        className={` dark:opacity-80  w-[100px] h-[100px] blur-3xl  absolute z-[-999]"`}
      ></div>
      <div className="flex gap-[1rem] flex-wrap items-center justify-center">
        {skills.map((s) => (
          <Skill key={s.url} skill={s} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
