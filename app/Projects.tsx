/* eslint-disable @next/next/no-img-element */

import React from "react";
import { projectList } from "./data/data";
import Link from "next/link";
import ProjectGrid from "./components/ProjectGrid";

const Projects = () => {
  const topProjects = projectList.filter((p) => p.tag === "top");

  return (
    <div className="relative">
      <h2 className="text-center font-bold text-sm font-jetbrains uppercase tracking-wider mb-6">
        <span className="inline-block px-1 text-xs relative">
          <span className="inline-block text-green-500">projects</span>
          {/* <span className="inline-block bg-orange-600 h-2 w-[91%] absolute bottom-0 left-[3.3px] -z-10 "></span> */}
        </span>
      </h2>
      <p className="text-center text-xl sm:text-2xl mb-6 font-extrabold">
        Things I&apos;ve built{" "}
      </p>

      <ProjectGrid projectList={topProjects} />

      <Link data-aos="fade-up-left" href={"/projects"}>
        <p className="mt-4 hover:opacity-100 text-sm text-center md:text-left underline  underline-offset-4 opacity-70">
          Show all
        </p>
      </Link>
    </div>
  );
};

export default Projects;
