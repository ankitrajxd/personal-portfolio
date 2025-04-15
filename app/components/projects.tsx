import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projectList } from "../data";

interface Props {
  className?: string;
}

const Projects = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <p className="font-light text-sm opacity-40">Projects</p>
      <div className="bg-nav w-full p-2 rounded-xl border-zinc-800 mt-4 border-[1px] relative overflow-hidden">
        {projectList.map((p, index) => (
          <React.Fragment key={index}>
            <div className="flex p-4 py-5 gap-4 z-10 relative rounded-lg items-center hover:bg-card_hover group hover:outline outline-[0.5px] outline-zinc-800">
              <div
                className={`bg-zinc-700 group-hover:bg-gradient-to-r  rounded-lg p-3 h-fit w-10 ${p.colors}`}
              >
                <Image
                  src={p.imageUrl}
                  alt="ProjectImage"
                  width={100}
                  height={100}
                  className="invert "
                />
              </div>
              <div className="flex-1">
                <Link
                  target="_blank"
                  href={p.githubLink}
                  className="font-normal text-[14px] text-text flex items-center cursor-pointer"
                >
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
                </Link>
                <p className="font-light text-[13px]  text-faded">
                  {p.description}{" "}
                </p>
              </div>
            </div>
            {index !== projectList.length - 1 && (
              <hr className={" opacity-10 border-t-[1.2px] mx-3"} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
