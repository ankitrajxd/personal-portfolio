"use client";

import { editProject } from "@/lib/actions/project.actions";
import type React from "react";
import { useState } from "react";

export type Tool = {
  name: string;
  color: string;
};

interface Props {
  projectData: {
    _id: string;
    image: string;
    title: string;
    github: string;
    description: string;
    tools: Tool[];
  };
}

export default function ProjectUpdateForm({ projectData }: Props) {
  const [image, setImage] = useState(projectData.image);
  const [title, setTitle] = useState(projectData.title);
  const [description, setDescription] = useState(projectData.description);
  const [tools, setTools] = useState<Tool[]>(projectData.tools);
  const [github, setGithub] = useState(projectData.github);
  const [isLoading, setIsLoading] = useState(false);

  const handleToolChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const newTools = [...tools];
    newTools[index] = { ...newTools[index], [name]: value };
    setTools(newTools);
  };

  const handleAddTool = () => {
    setTools([...tools, { name: "", color: "" }]);
  };

  const handleRemoveTool = (index: number) => {
    const newTools = tools.filter((_, i) => i !== index);
    setTools(newTools);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);
    e.preventDefault();
    setIsLoading(true);
    try {
      await editProject({
        _id: projectData._id,
        image,
        title,
        description,
        tools,
        github,
      });
    } catch (error) {
      console.error("Failed to update project:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <h1 className="text-xl font-bold text-white mb-4">Update Project</h1>

      <form onSubmit={(e) => handleSubmit(e)} className="w-full space-y-3">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            placeholder="Title"
            required
            className="w-full px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            id="image"
            name="image"
            placeholder="Image URL"
            required
            className="w-full px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <input
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            id="github"
            name="github"
            placeholder="Github Link"
            required
            className="w-full px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="Description"
            required
            rows={3}
            className="w-full px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          {tools.map((tool, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                name="name"
                placeholder="Tool Name"
                value={tool.name}
                onChange={(e) => handleToolChange(index, e)}
                required
                className="flex-1 px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400"
              />
              <input
                type="text"
                name="color"
                placeholder="Tool Color"
                value={tool.color}
                onChange={(e) => handleToolChange(index, e)}
                required
                className="flex-1 px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => handleRemoveTool(index)}
                className="px-2 py-1 bg-[#222222] rounded-md hover:bg-[#333333] text-white text-sm transition-colors"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddTool}
            className="w-full px-3 py-2 bg-[#222222] rounded-md hover:bg-[#333333] text-white text-sm transition-colors"
          >
            Add Tool
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-3 py-2 mt-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
        >
          {isLoading ? "Updating..." : "Update Project"}
        </button>
      </form>
    </div>
  );
}
