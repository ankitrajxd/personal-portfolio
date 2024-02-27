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
      <h2 className="text-center font-bold text-sm text-[#FF8911] uppercase tracking-wider mb-6">
        Projects
      </h2>
      <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
        What I&apos;ve built{" "}
      </p>

      <div className="dark:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[300px] h-[50px] blur-3xl absolute z-[-999] right-[3rem] top-[8rem] opacity-80"></div>

      <ProjectGrid projectList={topProjects} />

      <Link href={"/projects"}>
        <Button size={"sm"} className="mt-4" variant={"secondary"}>
          Show All
        </Button>
      </Link>
    </div>
  );
};

export default Projects;
