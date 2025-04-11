// import { verifySession } from "@/lib/dal";
import { verifySession } from "@/lib/dal";
import React from "react";
import Link from "next/link";

const AdminPage = async () => {
  const session = await verifySession();
  if (!session.isAuth) {
    return <div>Not Authenticated</div>;
  }

  return (
    <div className="container  flex items-center justify-center flex-col mx-auto p-4 bg-gray-800 text-white min-h-screen">
      <Link href={"/admin/projects/create"}>Create a new Project</Link>
      <Link href={"/admin/projects"}>View all projects</Link>
    </div>
  );
};

export default AdminPage;
