/* eslint-disable @next/next/no-img-element */
import Hero from "./Hero";
import InfiniteMarquee from "./skills/InfiniteMarquee";
import Skills from "./skills/SkillGrid";
import Projects from "./Projects";
import Quote from "./Quote";
import Footer from "./footer/Footer";
import About from "./About";
import CodeBlock from "./components/CodeBlock";
import List from "./components/List";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div id="top" className="px-[1rem] xl:px-[9rem] mt-[1.5rem] md:mt-0">
        <Hero />
      </div>
      <div id="skills" className="my-[4rem] mb-[6.25rem] sm:mt-[5rem] relative">
        <InfiniteMarquee
          direction="left"
          className="-rotate-6 sm:rotate-0 w-[101%]"
        />
        <InfiniteMarquee
          direction="right"
          className="rotate-12 absolute dark:bg-zinc-950 bg-white sm:hidden left-[-1rem]"
        />
      </div>
      <div
        data-aos="fade-up"
        className="px-[1.5rem] lg:px-[9rem] my-[6rem] mt-[8rem]"
      >
        <Skills />
      </div>
      <div
        data-aos="fade-right"
        className="px-[1.3rem] lg:px-[9rem] my-[6rem] "
      >
    <Projects />
      </div>
      <div className="bg-transparent relative  bg-[#f9fafb] px-[1.2rem] gap-y-11 py-[2rem] md:py-[2rem] lg:px-[9rem] my-[6rem] flex flex-col gap-8">
        <div
          className="flex flex-col relative border p-4  md:flex-row justify-between items-center"
          data-aos="fade"
        >
          <div className="absolute -left-1 top-0">
            <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
            <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
          </div>

          <div className="absolute right-1 top-0">
            <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
            <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
          </div>
          <div className="absolute -left-1 bottom-0">
            <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
            <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
          </div>
          <div className="absolute bottom-0 right-1">
            <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
            <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
          </div>
          <About />
          <List />
        </div>
      </div>
      <div className="px-[1rem] md:px-[9rem] my-[6rem] ">
        <CodeBlock />
      </div>
    </div>
  );
}
