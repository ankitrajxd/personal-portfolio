import React from "react";
import ProjectForm from "../../ProjectForm";
import { verifySession } from "@/lib/dal";

const CreateProject = async () => {
  const session = await verifySession();
  if (!session.isAuth) {
    return <div>Not Authenticated</div>;
  }
  return (
    <div className="container  flex items-center justify-center mx-auto p-4 bg-gray-800 text-white min-h-screen">
      <ProjectForm />
    </div>
  );
};

export default CreateProject;
