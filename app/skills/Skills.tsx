/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./skills.module.css";
import { skills } from "../data/data";

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
          <div
            key={s.name}
            className={`relative flex justify-center shadow-lg dark:bg-gray-950 bg-opacity-45 rounded-full border-4 dark:border-zinc-800 w-[4rem] p-2 md:hover:scale-[1.125] transition-transform ease-in-out duration-300
            `}
          >
            <img
              className={`rounded-full ${
                s.name === "React" ? `${styles.rotateInfinite}` : ""
              }`}
              alt={s.name}
              src={s.url}
            />
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 mt-5">{`(that's a lot!)`}</p>
    </div>
  );
};

export default Skills;
