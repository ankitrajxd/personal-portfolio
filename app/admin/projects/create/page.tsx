import React from "react";
import ProjectForm from "./ProjectForm";
import { verifySession } from "@/lib/dal";
import { redirect } from "next/navigation";

const CreateProject = async () => {
  const { isAuth, redirectTo } = await verifySession();
  if (!isAuth) {
    redirect(redirectTo as string);
  }
  return (
    isAuth && (
      <div className="container  flex items-center justify-center mx-auto p-4 bg-gray-800 text-white min-h-screen">
        <ProjectForm />
      </div>
    )
  );
};

export default CreateProject;
