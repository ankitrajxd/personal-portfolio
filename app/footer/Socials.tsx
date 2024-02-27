/* eslint-disable @next/next/no-img-element */
import { socials } from "../data/data";

const Socials = () => {
  return (
      <div className="flex gap-[2rem] justify-center items-center">
        {socials.map((s) => (
          <a
            key={s.name}
            target="_blank"
            className={`${
              s.name === "Twitter" ? "w-[16px]" : "w-[20px]"
            } opacity-60 transition-all hover:opacity-100`}
            href={s.url}
          >
            <img alt={s.name} className="invert-0 dark:invert" src={s.icon} />
          </a>
        ))}
      </div>

  );
};

export default Socials;
