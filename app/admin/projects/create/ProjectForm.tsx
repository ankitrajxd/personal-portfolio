"use client";

import type React from "react";

import {
  createProject,
  deleteProjectImage,
} from "@/lib/actions/project.actions";
import { useState } from "react";
import { useActionState } from "react";
import { UploadButton } from "@/lib/utils/uploadthing";
import Image from "next/image";

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
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
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
    <div className="w-full max-w-lg mx-auto flex flex-col items-center">
      <h1 className="text-xl font-bold text-white mb-4">Create Project</h1>

      <form action={formAction} className="w-full space-y-3">
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
          {/* hide this input field so that users cant see it */}
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Image URL"
            required
            value={uploadedImage || ""}
            readOnly
            className="w-full px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400 hidden"
          />
        </div>

        <div>
          <input
            type="text"
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
            name="description"
            placeholder="Description"
            required
            rows={3}
            className="w-full px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400"
          />
        </div>

        <div className="space-y-3">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center gap-2 w-full">
              <div className="flex flex-col sm:flex-row gap-2 flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Tool Name"
                  value={tool.name}
                  onChange={(e) => handleToolChange(index, e)}
                  required
                  className="px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400 w-full"
                />
                <input
                  type="text"
                  name="color"
                  placeholder="Tool Color"
                  value={tool.color}
                  onChange={(e) => handleToolChange(index, e)}
                  required
                  className="px-3 py-2 bg-[#222222] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white text-sm placeholder-gray-400 w-full"
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveTool(index)}
                className="shrink-0 p-2 h-10 w-10 flex items-center justify-center bg-[#222222] rounded-md hover:bg-[#333333] text-white text-sm transition-colors"
                aria-label="Remove tool"
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

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isFeatured"
            name="isFeatured"
            className="w-5 h-5 text-white accent-white bg-[#222222] border border-gray-600 rounded-sm focus:ring-white focus:ring-1 focus:outline-none"
          />
          <label htmlFor="isFeatured" className="text-white text-sm">
            Featured
          </label>
        </div>

        {/* uploading image */}
        <div className="w-full flex my-7">
          {!uploadedImage ? (
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);

                if (res && res.length > 0) {
                  setUploadedImage(res[0].ufsUrl);
                }
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          ) : (
            <>
              <Image
                src={uploadedImage!}
                alt="Uploaded Image"
                width={100}
                height={100}
                className="size-[4rem] rounded-md object-cover"
              />
              <button
                onClick={async () => {
                  // remove image from uploadthing
                  const res = await deleteProjectImage(uploadedImage!);
                  if (res.success) {
                    setUploadedImage(null);
                  }
                }}
                className="size-10 border rounded-sm"
              >
                X
              </button>
            </>
          )}
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
