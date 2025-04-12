import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "../../components/blur-fade";
import Tools from "@/app/(root)/about/Tools";
import { getAllProjects } from "@/lib/actions/project.actions";
import DeleteProjectButton from "@/app/components/DeleteProjectButton";
import { verifySession } from "@/lib/dal";

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
            key={p._id}
            className="flex flex-col sm:flex-row gap-4 bg-nav rounded-md overflow-hidden"
          >
            <div className="w-full sm:w-[40%]">
              <Image
                alt="project-image"
                src={p.image || "/placeholder.svg"}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 flex flex-col p-4">
              <div className="flex-grow space-y-4">
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-sm text-zinc-400 text-[13px] sm:text-[14px]">
                  {p.description}
                </p>
                <div>
                  <Tools
                    tools={p.tools}
                    className="px-1.5 py-1 sm:px-2 rounded-sm text-xs"
                  />
                </div>
              </div>

              {/* Action buttons container */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-zinc-700/50">
                <Link
                  href={`/admin/projects/${p._id}`}
                  className="px-3 py-1.5 text-xs bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors flex items-center justify-center"
                >
                  Edit Project
                </Link>
                <DeleteProjectButton
                  _id={p._id}
                  className="px-3 py-1.5 text-xs bg-red-900/30 hover:bg-red-900/50 text-red-200 rounded-md transition-colors"
                />
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
