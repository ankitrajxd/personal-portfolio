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
              <Button>Visit</Button>
            </a>
          )}
          <a href={project?.github}>
            <Button
              className="bg-transparent border-[1px] border-gray-700"
              variant="outline"
            >
              Repository
            </Button>
          </a>
        </div>
      </div>

      <div className="p-3 sm:p-4 border rounded-lg flex flex-col xl:flex-row gap-x-11 gap-y-4 mt-5">
        <div className="xl:max-w-[500px] h-fit overflow-hidden border rounded-md">
          {project?.image && (
            <Image
              className="rounded-md object-cover"
              src={project?.image}
              alt="proeject"
            />
          )}
        </div>

        <div className="flex-1">
          <p className="p-1 bg-green-300 text-green-900 font-extrabold rounded-sm w-fit text-xs">
            {project?.category.toUpperCase()}
          </p>
          <p className="mt-4 ">{project?.detailedDescription}</p>
          <p className="opacity-50 text-sm mt-5">Status</p>

          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] rounded-full bg-[#50E3C2]"></div>
            <p>Ready</p>
          </div>

          <p className="opacity-50 text-sm mt-4 mb-2">Features</p>
          <ul>
            {project?.features?.map((f, i) => (
              <li key={i}>{`${i + 1}.  ${f}`}</li>
            ))}
            P
          </ul>
        </div>
      </div>
      <div className="border rounded-md p-4 my-3">hello world</div>
    </AnimatedDiv>
  );
};

export default ProjectDetailPage;
