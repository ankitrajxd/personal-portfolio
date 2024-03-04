import { Button } from "@/components/ui/button";
import { projectList } from "../../data/data";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import AnimatedDiv from "@/app/components/AnimatedDiv";

interface Props {
  params: { id: string };
}

const ProjectDetailPage = ({ params: { id } }: Props) => {
  const project = projectList.find((p) => p.id === parseInt(id));

  return (
    <AnimatedDiv ClassName="px-[1rem] md:px-[9rem] mt-[2.3rem]">
      <Link href={"../"}>
        <MdOutlineKeyboardBackspace className="mb-7 opacity-60" size={30} />
      </Link>

      <div className="flex justify-between flex-col lg:flex-row gap-7">
        <p className="text-2xl sm:text-3xl font-bold">{project?.title}</p>
        <div className="flex gap-3">
          {project?.url && (
            <a href={project?.url}>
              <Button className="opacity-90" size={"sm"}>
                Visit Live
              </Button>
            </a>
          )}
          <a href={project?.github}>
            <Button size={"sm"} variant="outline" className="border-2">
              Repository
            </Button>
          </a>
        </div>
      </div>

      <div className="p-3 sm:p-4 border rounded-lg flex flex-col xl:flex-row gap-x-11 gap-y-4 mt-5 dark:bg-zinc-950">
        <div className="xl:w-[50%] h-fit overflow-hidden border rounded-md">
          {project?.image && (
            <Image
              className="rounded-t-md object-cover w-full"
              src={project?.image}
              alt={project.title}
            />
          )}

          <div className="border-t p-4">
            <p className="opacity-50 mb-3">Technologies Used</p>
            <div className="flex gap-2">
              {project?.tech.map((t, i) => (
                <div
                  key={i}
                  className="p-2 px-2 dark:bg-zinc-900 bg-zinc-100 rounded-md w-fit flex-wrap"
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
          </div>
        </div>

        <div className="text-zinc-700 dark:text-white">
          <p className="p-1 bg-purple-100 text-purple-800  text-xs font-bold me-2 px-2.5 py-1 rounded dark:bg-purple-900 dark:text-purple-300 w-fit">
            {project?.category}
          </p>
          <p className="mt-4 xl:mr-[3rem] dark:text-zinc-300">
            {project?.detailedDescription}
          </p>
          <p className="opacity-50 text-sm mt-5">Status</p>

          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] rounded-full bg-[#50E3C2]"></div>
            <p>{project?.url ? "Live" : "Ready"}</p>
          </div>

          <p className="opacity-50 text-sm mt-4 mb-2">Features</p>
          <ul>
            {project?.features?.map((f, i) => (
              <li className="dark:text-zinc-300" key={i}>{`${
                i + 1
              }.  ${f}`}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border rounded-md p-4 my-3">
        <p className="opacity-50 mb-3">Features</p>
        wip
      </div>
    </AnimatedDiv>
  );
};

export default ProjectDetailPage;
