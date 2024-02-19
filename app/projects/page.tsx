import React from "react";
import { projectList } from "../data/data";
import AnimatedDiv from "../components/AnimatedDiv";
import ProjectGrid from "../components/ProjectGrid";

const AllProjectsPage = () => {
  return (
    <AnimatedDiv ClassName="px-[1.5rem] lg:px-[9rem] my-[3rem] relative">
      <h2 className="text-center font-bold text-sm text-[#FF8911] uppercase tracking-wider mb-6">
        Projects
      </h2>
      <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
        All Projects{" "}
      </p>

      <ProjectGrid projectList={projectList} />
    </AnimatedDiv>
  );
};

export default AllProjectsPage;
