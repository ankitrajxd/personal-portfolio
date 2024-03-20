/* eslint-disable @next/next/no-img-element */
import Hero from "./Hero";
import InfiniteMarquee from "./skills/InfiniteMarquee";
import Skills from "./skills/SkillGrid";
import Projects from "./Projects";
import Quote from "./Quote";
import Footer from "./footer/Footer";
import About from "./About";
import GithubStats from "./GithubStats";
import naruto from "@/public/naruto.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Clock from "./components/Clock";
import endingBorder from "@/public/endingborder.png";
import { socials } from "./data/data";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="px-[1rem] xl:px-[9rem] mt-[6.5rem] md:mt-0">
        <Hero />
      </div>
      <div className="my-[3rem] mb-[6.25rem] sm:mt-[5rem] relative">
        <InfiniteMarquee
          direction="left"
          className="-rotate-6 sm:rotate-0 w-[101%]"
        />
        <InfiniteMarquee
          direction="right"
          className="rotate-12 absolute dark:bg-zinc-950 bg-white sm:hidden left-[-1rem]"
        />
      </div>
      <div className="px-[1.5rem] lg:px-[9rem] my-[6rem] mt-[4rem]">
        <Skills />
      </div>
      <div className="px-[1.5rem] lg:px-[9rem] my-[6rem] ">
        <Projects />
      </div>
      <div className="dark:bg-zinc-900 relative  bg-[#f9fafb] px-[1.5rem] gap-y-11 py-[4.5rem] md:py-[4rem] lg:px-[9rem] my-[6rem] flex flex-col gap-8">
        <div className="md:w-[40%]">
          <About />
        </div>
        <div>
          <GithubStats />
        </div>

        <Image
          className="absolute right-[6rem] pointer-events-none hidden md:block"
          width={200}
          height={300}
          src={naruto}
          alt="naruto"
        />
      </div>

      <div className=" px-[1.1rem] lg:px-[9rem] my-[6rem]">
        <div className="flex gap-3 my-3">
          <Link href={"/anime"}>
            <Button
              className="bg-zinc-200 dark:bg-zinc-800"
              variant={"secondary"}
            >
              Favourites
            </Button>
          </Link>
          <Clock />
          <Button variant={"secondary"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png"
              alt="india flag"
              className="w-[20px] inline-block rounded-[2px]"
            />{" "}
          </Button>

          {
            <a
              target="_blank"
              className={` opacity-60 transition-all hover:opacity-100 dark:bg-zinc-800 bg-zinc-100  p-2 rounded-md`}
              href={socials[0].url}
            >
              <img
                alt={socials[0].name}
                className="invert-0 w-[25px] dark:invert"
                src={socials[0].icon}
              />
            </a>
          }
        </div>
        <Quote />
      </div>
      <div className="px-[1rem] md:px-[9rem] my-[6rem]  ">
        <Footer />
      </div>
    </div>
  );
}
