import React from "react";
import { getProjectById } from "@/lib/actions/project";

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await getProjectById(id);
  console.log(res.message);

  return <div>{id}</div>;
};

export default ProjectDetailPage;
