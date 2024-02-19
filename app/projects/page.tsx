import React from "react";
import { projectList } from "../data/data";
import ProjectCard from "../components/ProjectCard";
import AnimatedDiv from "../components/AnimatedDiv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AllProjectsPage = () => {
  return (
    <AnimatedDiv ClassName="px-[1.5rem] lg:px-[9rem] my-[6rem] relative">
      <h2 className="text-center font-bold text-sm text-[#FF8911] uppercase tracking-wider mb-6">
        Projects
      </h2>
      <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
        All Projects{" "}
      </p>

      <Tabs defaultValue="all">
        <TabsList className="dark:bg-zinc-900">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-3 sm:gap-4">
            {projectList.map((p) => (
              <ProjectCard
                key={p.title}
                id={p.id}
                description={p.description}
                image={p.image}
                tech={p.tech}
                title={p.title}
                url={p.url}
                github={p.github}
              />
            ))}
          </AnimatedDiv>
        </TabsContent>
        <TabsContent value="frontend">
          <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-3 sm:gap-4">
            {projectList
              .filter((p) => p.category === "frontend")
              .map((p) => (
                <ProjectCard
                  key={p.title}
                  id={p.id}
                  description={p.description}
                  image={p.image}
                  tech={p.tech}
                  title={p.title}
                  url={p.url}
                  github={p.github}
                />
              ))}
          </AnimatedDiv>
        </TabsContent>
        <TabsContent value="devops">
          <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-3 sm:gap-4">
            {projectList
              .filter((p) => p.category === "devops")
              .map((p) => (
                <ProjectCard
                  key={p.title}
                  id={p.id}
                  description={p.description}
                  image={p.image}
                  tech={p.tech}
                  title={p.title}
                  url={p.url}
                  github={p.github}
                />
              ))}
          </AnimatedDiv>
        </TabsContent>
      </Tabs>
    </AnimatedDiv>
  );
};

export default AllProjectsPage;
