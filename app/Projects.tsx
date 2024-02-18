/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { projectList } from "./data/data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedDiv from "./components/AnimatedDiv";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <div className="relative">
      <h2 className="text-center font-bold text-sm text-[#FF8911] uppercase tracking-wider mb-6">
        Projects
      </h2>
      <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
        What I&apos;ve built{" "}
      </p>

      <div className="dark:bg-[#FF8911] w-[100px] h-[100px] blur-3xl absolute z-[-999] right-[3rem] top-[8rem] opacity-80"></div>

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
    </div>
  );
};

export default Projects;
