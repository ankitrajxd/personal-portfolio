import React from "react";
import { projectList } from "./data/data";
import Link from "next/link";
import ProjectGrid from "./components/ProjectGrid";

const Projects = () => {
  const topProjects = projectList.filter(project => project.tag === "top");

  return (
    <div className="relative">
      <Heading />
      <IntroText />
      <ProjectGrid projectList={topProjects} />
      <ShowAllLink />
    </div>
  );
};

const Heading = () => (
  <h2 className="text-center font-bold text-sm font-jetbrains uppercase tracking-wider mb-6">
    <span className="inline-block px-1 text-xs relative">
      <span className="inline-block text-green-500">projects</span>
    </span>
  </h2>
);

const IntroText = () => (
  <p className="text-center text-xl sm:text-2xl mb-6 font-extrabold">
    Things I&apos;ve built{" "}
  </p>
);

const ShowAllLink = () => (
  <Link data-aos="fade-up-left" href={"/projects"}>
    <p className="mt-4 hover:opacity-100 text-sm text-center md:text-left underline  underline-offset-4 opacity-70">
      Show all
    </p>
  </Link>
);

export default Projects;
