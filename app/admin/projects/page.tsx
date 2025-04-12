import DeleteProjectButton from "@/app/components/DeleteProjectButton";
import { ProjectCard } from "@/app/components/projectCard";
import { getAllProjects } from "@/lib/actions/project.actions";
import { verifySession } from "@/lib/dal";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProjectsPage() {
  const session = await verifySession();
  if (!session.isAuth) {
    redirect("/login");
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
    session.isAuth && (
      <div className="font-light">
        <div className="my-12 space-y-3">
          {projects?.map((p) => (
            <ProjectCard
              key={p._id}
              project={p}
              footer={
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
              }
            />
          ))}
        </div>
      </div>
    )
  );
}
