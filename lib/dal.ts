import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "./session";
import { cache } from "react";
// import { redirect } from "next/navigation";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.username) {
    return {
      isAuth: false,
      username: null,
      redirectTo: "/login",
    };
  }

  return { isAuth: true, username: session.username };
});
