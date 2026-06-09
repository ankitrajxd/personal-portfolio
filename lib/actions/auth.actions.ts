"use server";

import { redirect } from "next/navigation";
import { createSession } from "../session";

export async function signin(state: unknown, formData: FormData) {
  const password = formData.get("password");

  if (typeof password !== "string") {
    return {
      status: "error",
      message: "Invalid input",
    };
  }

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error("ADMIN_PASSWORD is not configured in the environment variables.");
    return {
      status: "error",
      message: "Server authentication setup error",
    };
  }

  if (password !== adminPassword) {
    return {
      status: "error",
      message: "Invalid credentials",
    };
  }

  try {
    // create user session
    await createSession("Ankit");
  } catch (error) {
    console.error("Error during sign-in session creation:", error);
    return {
      status: "error",
      message: "An unexpected error occurred",
    };
  }
  redirect("/admin");
}
