import { ProjectCard } from "@/app/components/projectCard";
import { getAllProjects } from "@/lib/actions/project.actions";
import Link from "next/link";
import { Fragment } from "react";

export default async function WorkPage() {
  const { projects } = await getAllProjects();

  return (
    <>
      {
        <Link
          href="/admin/projects/create"
          className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
          <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span className="relative text-xs">Create New</span>
        </Link>
      }
      <div className="font-light">
        <div className="my-12 space-y-3">
          {projects?.map((p) => (
            <Fragment key={p._id}>
              <ProjectCard key={p._id} project={p} />

              {/* Add a horizontal line between projects */}
              {p.isFeatured && (
                <div className="border-b border-zinc-700/50 my-[4rem] "></div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
