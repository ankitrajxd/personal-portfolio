"use client";

import Image from "next/image";
import Tools from "./Tools";
import { BlurFade } from "../components/blur-fade";
import { tools } from "../data";

const AboutPage = () => {
  return (
    <>
      <div>
        {/* image grid */}
        <BlurFade
          delay={0.1}
          className="grid grid-cols-3 sm:grid-cols-4 grid-rows-2 gap-3 sm:gap-3 "
        >
          <div className="col-span-2 sm:col-span-3 row-span-2">
            <Image
              src={"/ankit1.jpg"}
              width={500}
              height={300}
              quality={100}
              alt="image"
              className="w-full h-full object-cover  rounded-lg fil"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src={"/lego.jpg"}
              width={200}
              height={200}
              alt="image"
              className="w-full rounded-lg object-cover h-full"
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <Image
              src={"/dog.jpg"}
              width={200}
              height={200}
              alt="image"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </BlurFade>

        {/* About */}
        <div className="my-8 font-light text-[14px] sm:text-[15px] text-text leading-[24px]">
          <BlurFade delay={0.2}>
            <p>
              Hi, I&apos;m Ankit, a passionate software developer with expertise
              in Next.js, React, and Express.js. I thrive on building scalable
              and efficient web applications, with a strong focus on both
              frontend and backend development.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className=" my-4">
              Currently, I&apos;m expanding my skill set into mobile development
              using React Native and diving deeper into DevOps and database
              design. Whether it&apos;s crafting intuitive UI/UX experiences,
              optimizing APIs, or designing robust databases, I enjoy solving
              complex problems and delivering impactful solutions.
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <p className=" my-4">
              I&apos;m always eager to learn new technologies and collaborate on
              exciting projects. If you&apos;re looking for a dedicated
              developer to bring ideas to life, let&apos;s connect!{" "}
            </p>
          </BlurFade>
        </div>

        {/* tools */}
        <BlurFade delay={0.5} className="my-12 mb-24">
          <p className="font-light text-sm my-4 opacity-40">
            Tools I usually work with
          </p>
          <Tools tools={tools} />
        </BlurFade>
      </div>
    </>
  );
};

export default AboutPage;

// const tool = () => {
//   return <>tool</>;
// };
