/* eslint-disable @next/next/no-img-element */
import { socials } from "../data/data";

const Socials = () => {
  return (
    <div className="flex gap-[1.2rem] text-sm font-jetbrains justify-center items-center">
      {socials.map((s) => (
        <a
          data-aos="fade-up"
          key={s.name}
          target="_blank"
          className={`opacity-60 transition-all hover:opacity-100`}
          href={s.url}
        >
          {/* <img alt={s.name} className="invert-0 dark:invert" src={s.icon} /> */}
          <p className="underline underline-offset-4">{s.name}</p>
        </a>
      ))}
    </div>
  );
};

export default Socials;
