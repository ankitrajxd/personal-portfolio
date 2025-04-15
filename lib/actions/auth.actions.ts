"use server";

import { compareSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
import client from "../db/mongodb";
import { createSession } from "../session";

export async function signin(state: unknown, formData: FormData) {
  const password = formData.get("password");

  if (typeof password !== "string") {
    return {
      status: "error",
      message: "Invalid input",
    };
  }

  try {
    const mongoClient = await client.connect();
    const db = mongoClient.db("portfolio");
    const collection = db.collection("user");
    const user = await collection.findOne({ name: "Ankit" });

    if (!user || !user.password) {
      return {
        status: "error",
        message: "Invalid credentials",
      };
    }

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) {
      return {
        status: "error",
        message: "Invalid credentials",
      };
    } else {
      console.log("Password is valid!");
    }

    // TODO: Implement session handling here (e.g., set a cookie or token)

    // create user session
    await createSession(user.name);
  } catch (error) {
    console.error("Error during sign-in:", error);
    return {
      status: "error",
      message: "An unexpected error occurred",
    };
  }
  redirect("/work");
}
