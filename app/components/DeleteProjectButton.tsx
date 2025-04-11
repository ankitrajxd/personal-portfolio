"use client";

import { deleteProject } from "@/lib/actions/project";
import { useRouter } from "next/navigation";

interface Props {
  _id: string;
}

const DeleteProjectButton = ({ _id }: Props) => {
  const router = useRouter();
  async function handleProjectDelete(id: string) {
    await deleteProject(id);
    router.refresh();
  }
  return (
    <button
      onClick={() => handleProjectDelete(_id)}
      className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-red-900/50 flex items-center justify-center text-zinc-400 hover:text-red-300 transition-colors"
      aria-label="Delete project"
    >
      <span className="font-medium text-sm">×</span>
    </button>
  );
};

export default DeleteProjectButton;
