"use client";

import { signin } from "@/lib/actions/auth.actions";
import React, { useActionState } from "react";

const LoginPage = () => {
  const [formdata, formAction, isPending] = useActionState(signin, undefined);

  console.log(formdata?.message);

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-md h-fit">
        <h1 className="text-2xl font-bold mb-2 text-center text-white">
          {formdata?.status === "error"
            ? "Nope That Didn't Work!"
            : "Wow, So Smart!"}
        </h1>
        {formdata?.status === "error" && (
          <div className="opacity-80 text-red-400 text-sm mb-3">
            <p className="text-xs text-center">
              Do not brute force the password,
            </p>
            <p className="text-xs text-center">
              It will take you a while to guess it.😙
            </p>
          </div>
        )}
        <form action={formAction} className="space-y-4">
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded text-sm bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <button
              disabled={isPending}
              type="submit"
              className="w-full bg-white hover:bg-white/70 text-black py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black text-sm"
            >
              {isPending ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
