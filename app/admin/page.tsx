import { verifySession } from "@/lib/dal";
import Link from "next/link";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const { isAuth, redirectTo, username } = await verifySession();
  if (!isAuth) {
    redirect(redirectTo as string);
  }

  return (
    isAuth && (
      <div className="relative min-h-screen  text-white">
        <div className="container mx-auto p-6">
          {/* Greeting at top-left */}
          <div className="mb-16 pt-6">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Hello, <span className="text-teal-400">{username as string}</span>
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Welcome to your admin dashboard
            </p>
          </div>

          {/* Centered buttons */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <Link
              href="/admin/projects/create"
              className="w-full max-w-md rounded-md bg-teal-600 px-2 py-3 text-center text-sm font-medium text-white shadow-lg transition-all hover:bg-teal-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Create a new Project
            </Link>

            <Link
              href="/admin/projects"
              className="w-full max-w-md rounded-md bg-purple-700 px-2 py-3 text-center text-sm font-medium text-white shadow-lg transition-all hover:bg-purple-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              View all Projects
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default AdminPage;
