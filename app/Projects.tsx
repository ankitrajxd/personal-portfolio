/* eslint-disable @next/next/no-img-element */

import React from "react";
import { projectList } from "./data/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectGrid from "./components/ProjectGrid";

const Projects = () => {
  const topProjects = projectList.filter((p) => p.tag === "top");

  return (
    <div className="relative">
      <h2 className="text-center font-bold text-sm font-jetbrains uppercase tracking-wider mb-6">
        <span className="bg-orange-700 text-white px-1 ">Projects</span>
      </h2>
      <p className="text-center text-xl font-jetbrains sm:text-2xl mb-6 font-extrabold">
        What I&apos;ve built{" "}
      </p>

      {/* <div className="dark:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[300px] h-[50px] blur-3xl absolute z-[-999] right-[3rem] top-[8rem] opacity-80"></div> */}

      <ProjectGrid projectList={topProjects} />

      <Link href={"/projects"}>
        <p className="mt-4 text-sm underline font-jetbrains underline-offset-4 opacity-70">
          Show all
        </p>
      </Link>
    </div>
  );
};

export default Projects;
