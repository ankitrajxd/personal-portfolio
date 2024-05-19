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
      <div id="top" className="px-[1rem] xl:px-[9rem] mt-[5rem] md:mt-0">
        <Hero />
      </div>
      <div id="skills" className="my-[3rem] mb-[6.25rem] sm:mt-[5rem] relative">
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
      <div className="dark:bg-zinc-900 relative  bg-[#f9fafb] px-[1.5rem] gap-y-11 py-[2rem] md:py-[2rem] lg:px-[9rem] my-[6rem] flex flex-col gap-8">
        <div
          className="flex flex-col md:flex-row justify-between items-center"
          data-aos="fade"
        >
          <About />
          <List />
        </div>
      </div>

      <div className="px-[1rem] md:px-[9rem] my-[6rem]  ">
        <CodeBlock />
      </div>
      <div className="px-4 md:px-36 text-center my-24">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FDBA66] to-[#FD6D71]">
          Have an idea in mind?
        </h2>
        <p className="text-lg md:text-2xl text-zinc-300 mb-8">
          Let&apos;s make it real!
        </p>
        <Button className="bg-zinc-900 text-white px-3  hover:bg-zinc-800">
          <a href="mailto:ankitrajxd@gmail.com">Get Started</a>
        </Button>
      </div>
    </div>
  );
}
