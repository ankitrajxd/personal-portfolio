import Image from "next/image";
import Tools, { Tool } from "../about/Tools";
import { BlurFade } from "../../components/blur-fade";
import { getAllProjects } from "@/lib/actions/project.actions";
import Link from "next/link";
import { ReactNode } from "react";

const WorkPage = async () => {
  const { projects } = await getAllProjects();

  return (
    <div className="font-light">
      <div className="my-12 space-y-3">
        {projects?.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

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
    <BlurFade
      key={project.title}
      className="flex flex-col relative sm:flex-row gap-4 bg-nav rounded-md overflow-hidden"
    >
      {project.isFeatured && (
        <div className="absolute top-2 left-2 z-10 px-2 py-1 text-[9px] font-bold text-white rounded bg-gradient-to-r from-pink-500  to-orange-500 shadow-md backdrop-blur-md">
          Featured
        </div>
      )}
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
  );
};

export default WorkPage;
