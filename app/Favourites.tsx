/* eslint-disable @next/next/no-img-element */
import gojo from "@/public/gojofunny.png";
import Image from "next/image";
import { animes } from "./data/data";

const Favourites = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center">
        <h2
          className={`text-center font-bold text-sm text-green-400 uppercase tracking-wider mb-6`}
        >
          Anime
        </h2>
        <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
          Favourites{" "}
        </p>

        <Image
          src={gojo}
          alt="gojo"
          className="absolute z-[99] w-[80px] right-[20%] sm:right-0"
        />

        <div
          className={` dark:bg-green-800 opacity-35 w-[200px] h-[60px] blur-3xl  absolute z-[-999]"`}
        ></div>

        <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {animes.map((a) => (
            <a target="_blank" className="relative" key={a.title} href={a.url}>
              <div
                className="p-2 rounded-lg dark:bg-zinc-900 bg-gray-100 flex gap-7"
                key={a.title}
              >
                <div className="w-[22%] rounded-md overflow-hidden">
                  <img src={a.image} className="object-cover" alt="" />
                </div>

                <div className="flex-1">
                  {a.tag && (
                    <p className="text-xs text-orange-500 font-semibold">
                      {a.tag}
                    </p>
                  )}

                  <p className="text-lg font-bold mt-1">{a.title}</p>
                  <p className="text-sm opacity-60">{a.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
