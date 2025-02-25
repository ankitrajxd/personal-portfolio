import Hero from "@/app/components/hero";
import Projects from "./components/projects";
import Socials from "./components/socials";
import { BlurFade } from "./components/blur-fade";

const Home = () => {
  return (
    <div>
      <Hero className={" my-12 sm:my-16"} />
      <BlurFade
        className={
          "my-12 sm:my-16 h-0 border-opacity-15 border-t-[1px] border-text"
        }
      />
      <Projects className="my-12  sm:my-16 " />
      <Socials className="my-12 mb-24  sm:my-16 " />
    </div>
  );
};
export default Home;
