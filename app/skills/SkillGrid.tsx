/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { skills } from "../data/data";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="relative">
      <div className="text-center mb-6">
        <h2 className="font-bold text-sm font-jetbrains uppercase tracking-wider">
          <span className="inline-block px-1 text-xs relative">
            <span className="inline-block text-violet-600">Skills</span>
          </span>
        </h2>
        <p className="text-xl sm:text-2xl font-extrabold">
          Tools I work with
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[1rem] relative">
        {skills.map((skill) => (
          <Skill key={skill.url} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
