/* eslint-disable @next/next/no-img-element */
import React from "react";
import gojo from "@/public/gojofunny.png";
import Image from "next/image";
import { animes } from "../data/data";
import AnimatedDiv from "../components/AnimatedDiv";

const animeTag: {
  [key: string]: string;
  Top: string;
  Trending: string;
  Popular: string;
  Movie: string;
} = {
  Top: "text-orange-500",
  Trending: "text-orange-500",
  Popular: "text-violet-500",
  Movie: "text-[#F11A7B]",
};

const AnimePage = () => {
  return (
    <AnimatedDiv ClassName=" px-[1.1rem] lg:px-[9rem] relative my-[6rem]  flex flex-col  gap-y-4">
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
          className="absolute z-[99] w-[80px] right-[20%] sm:right-0 sm:hidden"
        />

        <div
          className={` dark:bg-green-800 opacity-35 w-[200px] h-[60px] blur-3xl  absolute z-[-999]"`}
        ></div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {animes.map((a) => (
            <a target="_blank" className="relative" key={a.title} href={a.url}>
              <div
                className="p-2 rounded-lg dark:bg-zinc-900 bg-gray-100 flex gap-7"
                key={a.title}
              >
                <div className="w-[22%] rounded-md overflow-hidden">
                  <img src={a.image} className="object-cover" alt="anime" />
                </div>

                <div className="flex-1">
                  {a.tag && (
                    <p className={`text-xs font-semibold ${animeTag[a.tag]}  `}>
                      {a.tag}
                    </p>
                  )}

                  <p className="text-lg font-bold mt-1">
                    {a.title}{" "}
                    <span className="bg-blue-100  text-blue-800 text-xs font-bold px-1.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {a.release_date}
                    </span>
                  </p>
                  <p className="text-sm opacity-60">{a.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default AnimePage;
