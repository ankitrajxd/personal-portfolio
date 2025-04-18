import { ObjectId } from "mongodb";

export type Tool = {
  name: string;
  color: string;
};

export type Project = {
  id: string;
  image: string;
  title: string;
  description: string;
  tools: Tool[];
  createdAt: Date;
  updatedAt: Date;
  github: string;
  isFeatured: boolean;
};

export type RawProject = Omit<Project, "id"> & {
  _id: ObjectId; // raw MongoDB uses _id
};
