import Hero from "./Hero";
import InfiniteMarquee from "./skills/InfiniteMarquee";
import Skills from "./skills/Skills";
import Projects from "./Projects";
import Education from "./Education";
import Favourites from "./Favourites";
import Quote from "./Quote";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <>
      <div className="px-[1rem] md:px-[9rem]">
        <Hero />
      </div>
      <div className="my-[3rem]">
        <InfiniteMarquee />
      </div>
      <div className="px-[1.2rem] md:px-[9rem] my-[6rem] mt-[4rem]">
        <Skills />
      </div>
      <div className="px-[1.5rem] md:px-[9rem] my-[6rem]">
        <Projects />
      </div>
      <div className="dark:bg-zinc-900 bg-[#f9fafb] py-[4.5rem] md:py-[4rem]  md:px-[9rem] my-[6rem]  flex flex-col sm:items-center">
        <Education />
      </div>
      <div className=" px-[1rem] md:px-[9rem] my-[6rem]  flex flex-col  gap-y-4">
        <Favourites />
        <Quote />
      </div>
      <div className=" px-[1rem] md:px-[9rem] my-[6rem]  ">
        <Footer />
      </div>

      <div className="text-center text-xs opacity-45 my-4 text-zinc-600 dark:text-zinc-400">
        <p>Copyright &copy; 2024 Ankit raj. All Rights Reserved. </p>
        <p>Designed by Me Built with NextJS.</p>
      </div>
    </>
  );
}
