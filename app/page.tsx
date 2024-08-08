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
import { RevealLinks } from "./components/RevealLinks";

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
        className="px-[1.5rem] lg:px-[9rem] my-[6rem] mt-[7rem]"
      >
        <Skills />
      </div>
      <div
        data-aos="fade-right"
        className="px-[1.3rem] lg:px-[9rem] my-[6rem] "
      >
        <Projects />
      </div>
      <div className="bg-transparent relative border-t border-b bg-[#f9fafb] px-[1.2rem] gap-y-11 py-[2rem] md:py-[2rem] lg:px-[9rem] my-[6rem] flex flex-col gap-8">
        <div
          className="flex flex-col relative  p-4  md:flex-row justify-between items-center"
          data-aos="fade"
        >
          <About />
          <List />
        </div>
      </div>
      <div className="px-[1rem] md:px-[9rem] my-[6rem] ">
        <CodeBlock />
      </div>
      <div className="px-[1rem] md:px-[9rem] my-[6rem] ">
        <RevealLinks />
      </div>
    </div>
  );
}
