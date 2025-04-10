"use server";

import { redirect } from "next/navigation";

export async function signin(state: unknown, formData: FormData) {
  // Validate form fields

  // check the db to see if the password is correct
  const pass = formData.get("password"); // get the password from the form data
  console.log(pass);

  // if the password is correct, create a stateless session and store it into a cookie, redirect to the dashboard
  if (pass !== "1234") {
    return {
      status: "error",
      message: "Invalid password",
    };
  }

  redirect("/admin");
}
