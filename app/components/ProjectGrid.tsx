"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import ProjectCard from "./ProjectCard";
import { StaticImageData } from "next/image";

interface Props {
  projectList: Project[];
}

export interface Project {
  id: number;
  tag?: string;
  title: string;
  category: string;
  image: StaticImageData;
  description: string;
  tech: (string | StaticImageData)[];
  url?: string;
  github: string;
  detailedDescription: string;
  features?: string[];
}

const ProjectGrid = ({ projectList }: Props) => {
  return (
    <Tabs defaultValue="all" className="p-0">
      <div className="overflow-x-scroll md:overflow-hidden border sm:border-none scrollbar-hide">
        <TabsList className="bg-transparent sm:border rounded-none ">
          <TabsTrigger className=" tabButton" value="all">
            All
          </TabsTrigger>
          <TabsTrigger className=" tabButton" value="frontend">
            Frontend
          </TabsTrigger>
          <TabsTrigger className=" tabButton" value="devops">
            DevOps
          </TabsTrigger>
          <TabsTrigger className=" tabButton" value="backend">
            Backend
          </TabsTrigger>
          <TabsTrigger className="hover:text-white" value="fullstack">
            Full Stack
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all">
        <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
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
        <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
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
        <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
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
      <TabsContent value="backend">
        <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
          {projectList
            .filter((p) => p.category === "backend")
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
      <TabsContent value="fullstack">
        <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
          {projectList
            .filter((p) => p.category === "fullstack")
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
  );
};

export default ProjectGrid;
