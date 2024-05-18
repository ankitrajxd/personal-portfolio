/* eslint-disable @next/next/no-img-element */
import { socials } from "../data/data";
import { GoArrowUpRight } from "react-icons/go";

const Socials = () => {
  return (
    <div className="flex gap-[1.2rem] text-sm font-jetbrains justify-center items-center">
      {socials.map((s) => (
        <a
          key={s.name}
          target="_blank"
          className={`opacity-90 transition-all hover:opacity-100`}
          href={s.url}
        >
          <span className=" flex items-center gap-x-1 px-1 text-xs relative">
            <span className="inline-block hover:underline underline-offset-4">
              {s.name}
            </span>
            <GoArrowUpRight />
            {/* <span className="inline-block bg-zinc-600 h-2 w-[88%] absolute bottom-0 left-[3px] -z-10 "></span> */}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
