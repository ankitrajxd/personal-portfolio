import Image from "next/image";
import Link from "next/link";
import Tools, { type Tool } from "../(root)/about/Tools";
import type { ReactNode } from "react";
import { LucideGithub as Github } from "lucide-react";

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
    <div className={`relative  group`}>
      <div
        key={project.title}
        className="flex flex-col relative sm:flex-row gap-4 bg-nav rounded-md overflow-hidden"
      >
        <div className="w-full sm:w-[40%]">
          <Image
            alt="project-image"
            src={project.image || "/placeholder.svg"}
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 space-y-4 gap-4 p-4">
          <div className="flex items-center justify-between">
            <Link href={project.github} target="_blank">
              <p className="text-sm font-semibold">{project.title}</p>
            </Link>
            {project.isFeatured && (
              <span className="bg-gradient-to-r bg-zinc-800 text-white/60 text-[10px] px-2 py-0.5 rounded-full font-medium">
                Featured
              </span>
            )}
          </div>

          <p className="text-sm text-zinc-400 text-[13px] sm:text-[14px]">
            {project.description}
          </p>
          <div>
            <Tools tools={project.tools} className="py-[5px] px-2 " />
          </div>

          <div className="flex justify-between items-center">
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors duration-200 group-hover:text-zinc-200"
            >
              <Github size={16} />
              <span>View on GitHub</span>
            </Link>
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};
