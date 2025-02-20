import Hero from "@/app/components/hero";
import Projects from "./components/projects";
import Socials from "./components/socials";

const Home = () => {
  return (
    <div>
      <Hero className={" my-12 sm:my-16"} />
      <hr className={"my-12  sm:my-16 h-0 opacity-15 border-t-[2px]"} />
      <Projects className="my-12  sm:my-16 " />
      <Socials className="my-12 mb-24  sm:my-16 " />
    </div>
  );
};
export default Home;
