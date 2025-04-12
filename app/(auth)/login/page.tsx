import React from "react";
import LoginForm from "./LoginForm";
import { verifySession } from "@/lib/dal";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { isAuth } = await verifySession();

  if (isAuth) {
    redirect("/admin");
  }

  return !isAuth && <LoginForm />;
};

export default LoginPage;
