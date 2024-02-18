import React from "react";
import { projectList } from "../data/data";
import ProjectCard from "../components/ProjectCard";

const AllProjectsPage = () => {
  return (
    <div className="px-[1.5rem] lg:px-[9rem] my-[6rem]">
      <p>Work In Progress🙂</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projectList.map((p) => (
          <ProjectCard
            key={p.id}
            description={p.description}
            github={p.github}
            image={p.image}
            id={p.id}
            tech={p.tech}
            title={p.title}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
