"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Tilt from "react-parallax-tilt";

interface Props {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  tech: (string | StaticImageData)[];
  url?: string | undefined;
  github: string;
}

const ProjectCard = ({
  id,
  image,
  title,
  description,
  tech,
  url,
  github,
}: Props) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="7px"
      className="h-fit"
    >
      <div className="overflow-hidden border-2  dark:border-0 rounded-lg dark:bg-zinc-900">
        <Link href={`/projects/${id}`}>
          <Image
            className="object-cover md:h-[180px]"
            src={image}
            alt={title}
          />
        </Link>

        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold my-3">{title}</h3>
            {url && (
              <a
                className="rounded-sm bg-green-300 text-sm px-2 text-green-900 font-semibold"
                href={url}
              >
                Live
              </a>
            )}
          </div>

          <p className="opacity-80">{description}</p>

          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-2">
              {tech.map((t, i) => (
                <div
                  key={i}
                  className="  p-2 px-2 dark:bg-zinc-800 bg-zinc-100 rounded-md w-fit"
                >
                  <Image
                    className="rounded-sm"
                    width={20}
                    height={20}
                    key={i}
                    src={t}
                    alt={i + ""}
                  />
                </div>
              ))}
            </div>
            <a
              href={github}
              className="p-2  text-sm dark:bg-zinc-800 dark:hover:bg-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-md"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;