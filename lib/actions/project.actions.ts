"use server";

import { ObjectId } from "mongodb";
import client from "../db/mongodb";
import { redirect } from "next/navigation";
import { Tool } from "@/app/admin/projects/[id]/ProjectUpdateForm";

type State = {
  success: boolean;
  message: string;
};

export async function createProject(
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const image = formData.get("image") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const tools = formData.getAll("name").map((name, index) => ({
      name: name as string,
      color: (formData.getAll("color")[index] as string) || "",
    }));

    if (!image || !title || !description || tools.length === 0) {
      return { success: false, message: "Missing required fields." };
    }

    // connection to db
    const mongoClient = await client.connect();
    const collection = mongoClient.db("portfolio").collection("project");
    const project = {
      image,
      title,
      description,
      tools,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await collection.insertOne(project);

    console.log("Project created:", { image, title, description, tools });

    // return { success: true, message: "Project created successfully!" };
  } catch (error: unknown) {
    console.error("Error creating project:", error);
    return { success: false, message: "Failed to create project." };
  }
  redirect("/admin/projects");
}

export async function getAllProjects() {
  try {
    const mongoClient = await client.connect();
    const collection = mongoClient.db("portfolio").collection("project");
    const projects = await collection.find().sort({ createdAt: -1 }).toArray();

    return {
      success: true,
      projects: projects.map((project) => ({
        _id: project._id.toString(),
        image: project.image,
        title: project.title,
        description: project.description,
        tools: project.tools,
      })),
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { success: false, message: "Failed to fetch projects." };
  }
}

export async function deleteProject(id: string) {
  try {
    const mongoClient = await client.connect();
    const collection = mongoClient.db("portfolio").collection("project");
    await collection.deleteOne({ _id: new ObjectId(id) });
    return { success: true, message: "Project deleted successfully!" };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, message: "Failed to delete project." };
  }
}

export async function editProject({
  _id,
  image,
  title,
  description,
  tools,
}: {
  _id: string;
  image: string;
  title: string;
  description: string;
  tools: Tool[];
}) {
  try {
    if (!image || !title || !description || tools.length === 0) {
      return { success: false, message: "Missing required fields." };
    }

    // connection to db
    const mongoClient = await client.connect();
    const collection = mongoClient.db("portfolio").collection("project");
    const project = {
      image,
      title,
      description,
      tools,
    };

    await collection.updateOne({ _id: new ObjectId(_id) }, { $set: project });

    console.log("Project created:", { image, title, description, tools });

    // return { success: true, message: "Project created successfully!" };
  } catch (error: unknown) {
    console.error("Error creating project:", error);
    return { success: false, message: "Failed to create project." };
  }
  redirect("/admin/projects");
}

export async function getProjectById(id: string) {
  try {
    const mongoClient = await client.connect();
    const collection = mongoClient.db("portfolio").collection("project");
    const project = await collection.findOne({ _id: new ObjectId(id) });

    if (!project) {
      return { success: false, message: "Project not found." };
    }

    return {
      success: true,
      project: {
        _id: project._id.toString(),
        image: project.image,
        title: project.title,
        description: project.description,
        tools: project.tools,
      },
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return { success: false, message: "Failed to fetch project." };
  }
}
