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
  const { data } = await getProjectById(id);

  if (!data) {
    redirect("/admin/projects");
  }

  return (
    isAuth && (
      <div className="min-h-screen flex justify-center items-center">
        <ProjectUpdateForm projectData={data} />
      </div>
    )
  );
};

export default ProjectDetailPage;
