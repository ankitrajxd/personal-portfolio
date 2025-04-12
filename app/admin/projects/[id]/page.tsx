import React from "react";
import { getProjectById } from "@/lib/actions/project.actions";
import ProjectUpdateForm from "./ProjectUpdateForm";
import { verifySession } from "@/lib/dal";
import { redirect } from "next/navigation";

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { isAuth, redirectTo } = await verifySession();

  if (!isAuth) {
    redirect(redirectTo as string);
  }

  const { id } = await params;
  const res = await getProjectById(id);

  return (
    isAuth && (
      <div className="min-h-screen flex justify-center items-center">
        <ProjectUpdateForm
          projectData={{
            _id: res.project?._id as string,
            image: res.project?.image as string,
            title: res.project?.title as string,
            description: res.project?.description as string,
            tools: res.project?.tools as { name: string; color: string }[],
          }}
        />
      </div>
    )
  );
};

export default ProjectDetailPage;
