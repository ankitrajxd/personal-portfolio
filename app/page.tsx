import Hero from "./Hero";
import InfiniteMarquee from "./skills/InfiniteMarquee";
import Skills from "./skills/SkillGrid";
import Projects from "./Projects";
import Favourites from "./Favourites";
import Quote from "./Quote";
import Footer from "./footer/Footer";
import About from "./About";
import GithubStats from "./GithubStats";

export default function Home() {
  return (
    <>
      <div className="px-[1rem] lg:px-[9rem]">
        <Hero />
      </div>
      <div className="my-[3rem]">
        <InfiniteMarquee />
      </div>
      <div className="px-[1.2rem] lg:px-[9rem] my-[6rem] mt-[4rem]">
        <Skills />
      </div>
      <div className="px-[1.5rem] lg:px-[9rem] my-[6rem]">
        <Projects />
      </div>
      <div className="dark:bg-zinc-900  bg-[#f9fafb] px-[1.5rem] gap-y-11 py-[4.5rem] md:py-[4rem]  lg:px-[9rem] my-[6rem] flex flex-col gap-8">
        <div className="md:w-[40%]">
          <About />
        </div>
        <div className="">
          <GithubStats />
        </div>
      </div>
      <div className=" px-[1rem] lg:px-[9rem] my-[6rem]  flex flex-col  gap-y-4">
        <Favourites />
        <Quote />
      </div>
      <div className=" px-[1rem] md:px-[9rem] my-[6rem]  ">
        <Footer />
      </div>
    </>
  );
}
