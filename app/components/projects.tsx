import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

const projectList = [
  {
    name: "E-commerce",
    description: "Built with Nextjs. Lightning fast performace with SSR.",
    imageUrl: "/grocery-store.png",
    titleIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Version Release Strategy",
    description: "Using ArgoCD rollouts to automate application release.",
    imageUrl: "/box.png",
    titleIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
  },
  {
    name: "Express Backend API",
    description: "CRUD api with auth.",
    imageUrl: "/backend-coding.png",
    titleIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
];

const Projects = ({ className }: Props) => {
  return (
    <section className={`${className}`}>
      <p className="font-light opacity-40">Projects</p>
      <div className="bg-nav w-full p-2 rounded-xl border-zinc-800 mt-4 border-[1px]">
        {projectList.map((p, index) => (
          <React.Fragment key={index}>
            <div className="flex p-4 gap-4 rounded-lg items-center hover:bg-zinc-800/80 group hover:outline outline-[1px] outline-zinc-700">
              <div className="bg-zinc-700 group-hover:bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg p-3 h-fit size-12">
                <Image
                  src={p.imageUrl}
                  alt="ProjectImage"
                  width={100}
                  height={100}
                  className="invert "
                />
              </div>
              <div>
                <p className="font-normal opacity-90 flex items-center">
                  {p.name}{" "}
                  <span className="size-4 ml-2">
                    <Image
                      src={p.titleIcon}
                      alt={p.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </span>
                </p>
                <p className="opacity-40 text-zinc-300 font-extralight text-sm">
                  {p.description}{" "}
                </p>
              </div>
            </div>
            {index !== projectList.length - 1 && (
              <hr className={" opacity-10 border-t-[1.2px] mx-5"} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
