import Image from "next/image";

import { BlurFade } from "../../components/blur-fade";
import Tools from "@/app/(root)/about/Tools";
import { getAllProjects } from "@/lib/actions/project";
import DeleteProjectButton from "@/app/components/DeleteProjectButton";
import { verifySession } from "@/lib/dal";
import Link from "next/link";

export default async function ProjectsPage() {
  const session = await verifySession();
  if (!session.isAuth) {
    return <div>Not Authenticated</div>;
  }
  const { projects } = await getAllProjects();

  if (!projects || projects.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xs">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="font-light">
      <div className="my-12 space-y-3">
        {projects?.map((p) => (
          <BlurFade
            key={p.title}
            className="flex flex-col sm:flex-row gap-4 bg-nav rounded-md overflow-hidden"
          >
            <div className="w-full sm:w-[40%]">
              <Image
                alt="project-image"
                src={p.image}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 space-y-4 gap-4 p-4">
              <p className="text-sm font-semibold">{p.title}</p>
              <p className="text-sm text-zinc-400 text-[13px] sm:text-[14px]">
                {p.description}
              </p>

              <DeleteProjectButton _id={p._id} />
              <Link href={`/admin/projects/${p._id}`}>Edit Project</Link>
              <div>
                <Tools
                  tools={p.tools}
                  className="px-1.5 py-1 sm:px-2 rounded-sm  text-xs"
                />
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
