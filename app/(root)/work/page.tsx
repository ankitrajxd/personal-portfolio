import { ProjectCard } from "@/app/components/projectCard";
import { getAllProjects } from "@/lib/actions/project.actions";

const WorkPage = async () => {
  const { projects } = await getAllProjects();

  return (
    <div className="font-light">
      <div className="my-12 space-y-3">
        {projects?.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
