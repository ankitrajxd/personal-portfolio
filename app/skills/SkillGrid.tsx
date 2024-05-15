/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { skills } from "../data/data";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="relative">
      <h2 className="text-center font-bold text-sm font-jetbrains uppercase tracking-wider mb-6">
        <span className="inline-block px-1 text-xs relative">
            <span className="inline-block">Skills</span>
            <span className="inline-block bg-violet-600 h-2 w-[85%] absolute bottom-0 left-1 -z-10 "></span>
          </span>
      </h2>
      <p className="text-center font-jetbrains text-xl sm:text-2xl mb-6 font-extrabold">
        Tools I work with{" "}
      </p>
      <div className="flex gap-[1rem] relative  flex-wrap items-center justify-center">
        {skills.map((s) => (
          <Skill key={s.url} skill={s} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
