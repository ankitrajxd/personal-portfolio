/* eslint-disable @next/next/no-img-element */
import { socials } from "../data/data";

const Socials = () => {
  return (
    <div className="flex gap-[1.2rem] text-sm font-jetbrains justify-center items-center">
      {socials.map((s) => (
        <a
          key={s.name}
          target="_blank"
          className={`opacity-60 transition-all hover:opacity-100`}
          href={s.url}
        >
          <span className="inline-block px-1 text-xs relative">
            <span className="inline-block">{s.name}</span>
            <span className="inline-block bg-zinc-600 h-2 w-[88%] absolute bottom-0 left-[3px] -z-10 "></span>
          </span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
