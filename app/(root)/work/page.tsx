import Image from "next/image";
import Tools from "../about/Tools";
import { BlurFade } from "../../components/blur-fade";
import { verifySession } from "@/lib/dal";
import { getAllProjects } from "@/lib/actions/project";
import DeleteProjectButton from "@/app/components/DeleteProjectButton";

const WorkPage = async () => {
  const { isAuth } = await verifySession();
  const { projects } = await getAllProjects();

  return (
    <div className="font-light">
      <div className="my-12 space-y-3">
        {projects?.map((p) => (
          <BlurFade
            key={p.title}
            className="flex flex-col relative sm:flex-row gap-4 bg-nav rounded-md overflow-hidden"
          >
            {isAuth && (
              <DeleteProjectButton
                className="absolute right-2 top-2"
                _id={p._id}
              />
            )}

            <div className="w-full sm:w-[40%]">
              <Image
                alt="project-image"
                src={p.image}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 space-y-4 gap-4 p-4">
              <p className="text-sm font-semibold">{p.title}</p>
              <p className="text-sm text-zinc-400 text-[13px] sm:text-[14px]">
                {p.description}
              </p>
              <div>
                <Tools
                  tools={p.tools}
                  className="px-1.5 py-1 sm:px-2 rounded-sm  text-xs"
                />
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;

// const projects = [
//   {
//     image: "/projectImages/kubernetes.png",
//     title: "CICD Pipeline Using Github Actions and Kubernetes",
//     description:
//       "The pipeline test the application code,builds a Docker image of the application, pushes it to Docker Hub, and then deploys it in kubernetes environment (local) via argocd.",
//     tools: [
//       {
//         name: "Terraform",
//         color: "#623CE4",
//       },
//       {
//         name: "Kubernetes",
//         color: "#326CE5",
//       },
//     ],
//   },
//   {
//     image: "/projectImages/userDashboard.png",
//     title: "Full Stack User Dashboard",
//     description:
//       "This is a full stack custom Auth dashboard where users can signup, access their dashboard, settings page, login and reset password.",
//     tools: [
//       {
//         name: "NextJs",
//         color: "#623CE4",
//       },
//       {
//         name: "ShandCN",
//         color: "#326CE5",
//       },
//       {
//         name: "Tailwind CSS",
//         color: "#0FA7C3",
//       },
//       {
//         name: "TypeScript",
//         color: "#2F74C0",
//       },
//       { name: "Express.js", color: "#808080" },
//     ],
//   },
//   {
//     image: "/projectImages/discord-clone.png",
//     title: "Discord Clone",
//     description:
//       "Fully resoponsive discord UI clone built with Tailwind Css and NextJS app router.",
//     tools: [
//       {
//         name: "NextJs",
//         color: "#623CE4",
//       },
//       {
//         name: "Tailwind CSS",
//         color: "#0FA7C3",
//       },
//     ],
//   },
// ];
