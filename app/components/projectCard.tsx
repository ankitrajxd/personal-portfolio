import Image from "next/image";
import { BlurFade } from "./blur-fade";
import Link from "next/link";
import Tools, { Tool } from "../(root)/about/Tools";
import { ReactNode } from "react";

// ProjectCard component
interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    github: string;
    description: string;
    tools: Tool[];
    isFeatured: boolean;
  };
  footer?: ReactNode;
}

export const ProjectCard = ({ project, footer }: ProjectCardProps) => {
  return (
    <div className={`relative ${project.isFeatured ? "mb-10" : ""} group`}>
      <BlurFade
        key={project.title}
        className="flex flex-col relative sm:flex-row gap-4 bg-nav rounded-md overflow-hidden"
      >
        <div className="w-full sm:w-[40%]">
          <Image
            alt="project-image"
            src={project.image}
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 space-y-4 gap-4 p-4">
          <Link href={project.github} target="_blank">
            <p className="text-sm font-semibold">{project.title}</p>
          </Link>

          <p className="text-sm text-zinc-400 text-[13px] sm:text-[14px]">
            {project.description}
          </p>
          <div>
            <Tools
              tools={project.tools}
              className="px-1.5 py-1 sm:px-2 rounded-sm  text-xs"
            />
          </div>

          {footer}
        </div>
      </BlurFade>

      {/* gradient */}
      {project.isFeatured && (
        <div className="absolute inset-0 group-hover:animate-pulse sm:bottom-0 sm:-top-3 sm:-left-2 sm:-right-1 -top-1 -left-0 right-1 bottom-1.5 rounded-md bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] opacity-75 blur-lg -z-10"></div>
      )}
    </div>
  );
};
