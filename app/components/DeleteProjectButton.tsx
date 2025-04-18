"use client";

import { deleteProject } from "@/lib/actions/project.actions";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  className?: string;
}

const DeleteProjectButton = ({ id, className }: Props) => {
  const router = useRouter();
  async function handleProjectDelete(id: string) {
    await deleteProject(id);
    router.refresh();
  }
  return (
    <button
      onClick={() => handleProjectDelete(id)}
      className={`h-8 w-8 rounded-full bg-zinc-800 hover:bg-red-900/50 flex items-center justify-center text-zinc-400 hover:text-red-300 transition-colors ${className}`}
      aria-label="Delete project"
    >
      <span className="font-medium text-sm">×</span>
    </button>
  );
};

export default DeleteProjectButton;
