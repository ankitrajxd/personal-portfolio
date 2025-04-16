import { ProjectCard } from "@/app/components/projectCard";
import { getAllProjects } from "@/lib/actions/project.actions";
import { Fragment } from "react";

export default async function WorkPage() {
  const { projects } = await getAllProjects();

  return (
    <>
      <div className="font-light">
        <div className="my-12 space-y-3">
          {projects?.map((p) => (
            <Fragment key={p._id}>
              <ProjectCard key={p._id} project={p} />

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
