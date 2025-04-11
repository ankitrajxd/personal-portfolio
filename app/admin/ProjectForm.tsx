"use client";

import type React from "react";

import { createProject } from "@/lib/actions/project";
import { useState } from "react";
import { useActionState } from "react";

type Tool = {
  name: string;
  color: string;
};

type State = {
  success: boolean;
  message: string;
};

const initialState: State = {
  success: false,
  message: "",
};

export default function ProjectForm() {
  const [tools, setTools] = useState<Tool[]>([{ name: "", color: "" }]);
  const [state, formAction, isPending] = useActionState(
    createProject,
    initialState
  );

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

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <h1 className="text-xl font-bold text-white mb-4">Create Project</h1>

      <form action={formAction} className="w-full space-y-3">
        <div>
          <input
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
            id="title"
            name="title"
            placeholder="Title"
            required
            className="w-full px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <textarea
            id="description"
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
          disabled={isPending}
          className="w-full px-3 py-2 mt-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>

        {state.message && (
          <div
            className={`mt-3 p-2 rounded-md text-center text-xs ${
              state.success
                ? "bg-green-900/30 text-green-300"
                : "bg-red-900/30 text-red-300"
            }`}
          >
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
}
