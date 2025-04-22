"use server";

import { ObjectId } from "mongodb";
import client from "../db/mongodb";
import { redirect } from "next/navigation";
import { Tool } from "@/app/admin/projects/[id]/ProjectUpdateForm";
import { revalidatePath } from "next/cache";
import { verifySession } from "../dal";
import { Project, RawProject } from "../types/project";
import { UTApi } from "uploadthing/server";

type State = {
  success: boolean;
  message: string;
};

//====================================================================

export async function createProject(
  prevState: State,
  formData: FormData
): Promise<State> {
  const { isAuth } = await verifySession();
  if (!isAuth) {
    redirect("/login");
  }

  try {
    const image = formData.get("image") as string;
    const title = formData.get("title") as string;
    const github = formData.get("github") as string;
    const description = formData.get("description") as string;
    const tools = formData.getAll("name").map((name, index) => ({
      name: name as string,
      color: (formData.getAll("color")[index] as string) || "",
    }));
    const isFeatured = formData.get("isFeatured") === "on" ? true : false;

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
      github,
      isFeatured,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await collection.insertOne(project);
    // return { success: true, message: "Project created successfully!" };
  } catch (error: unknown) {
    console.error("Error creating project:", error);
    return { success: false, message: "Failed to create project." };
  }
  revalidatePath("/work");
  redirect("/work");
}

//====================================================================

export async function getAllProjects() {
  try {
    const mongoClient = await client.connect();
    const collection = mongoClient
      .db("portfolio")
      .collection<RawProject>("project");

    const projects = await collection
      .find()
      .sort({ isFeatured: -1, createdAt: -1 })
      .toArray(); // The type here is inferred as `RawProject[]`

    return {
      success: true,
      data: projects.map((project) => ({
        id: project._id.toString(),
        image: project.image,
        title: project.title,
        description: project.description,
        tools: project.tools,
        github: project.github,
        isFeatured: project.isFeatured,
      })),
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { success: false, message: "Failed to fetch projects." };
  }
}
//====================================================================

export async function deleteProject(id: string) {
  const { isAuth } = await verifySession();
  if (!isAuth) {
    redirect("/login");
  }

  try {
    const mongoClient = await client.connect();
    const collection = mongoClient.db("portfolio").collection("project");
    await collection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, message: "Failed to delete project." };
  }

  revalidatePath("/work");
}

//====================================================================

export async function editProject({
  _id,
  image,
  title,
  description,
  tools,
  github,
  isFeatured,
}: {
  _id: string;
  image: string;
  title: string;
  description: string;
  tools: Tool[];
  github: string;
  isFeatured: boolean;
}) {
  const { isAuth } = await verifySession();
  if (!isAuth) {
    redirect("/login");
  }

  try {
    if (!image || !title || !description || tools.length === 0) {
      return { success: false, message: "Missing required fields." };
    }

    // connection to db
    const mongoClient = await client.connect();
    const collection = mongoClient.db("portfolio").collection("project");
    const project = {
      id: _id,
      image,
      title,
      description,
      tools,
      github,
      isFeatured,
      updatedAt: new Date(),
    };

    await collection.updateOne({ _id: new ObjectId(_id) }, { $set: project });
  } catch (error: unknown) {
    console.error("Error creating project:", error);
    return { success: false, message: "Failed to create project." };
  }
  revalidatePath("/work");
  redirect("/admin/projects");
}

//====================================================================

export async function getProjectById(id: string) {
  try {
    const mongoClient = await client.connect();
    const collection = mongoClient.db("portfolio").collection("project");
    const result = await collection.findOne<RawProject>({
      _id: new ObjectId(id),
    });

    if (!result) {
      return { success: false, message: "Project not found." };
    }

    const project: Project = {
      id: result._id.toString(),
      image: result.image,
      title: result.title,
      description: result.description,
      tools: result.tools,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
      github: result.github,
      isFeatured: result.isFeatured,
    };

    return {
      success: true,
      data: project,
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return { success: false, message: "Failed to fetch project." };
  }
}

//====================================================================
export async function deleteProjectImage(uploadedImage: string) {
  const { isAuth } = await verifySession();
  if (!isAuth) {
    redirect("/login");
  }

  const utapi = new UTApi();

  // Extract file key from the URL
  const fileKey = uploadedImage.split("/").pop();

  if (!fileKey) {
    throw new Error("Invalid image URL: no file key found");
  }

  await utapi.deleteFiles([fileKey]);

  return { success: true, message: "Image deleted successfully." };
}
//====================================================================
