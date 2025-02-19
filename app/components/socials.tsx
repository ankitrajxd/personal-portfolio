import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

const links = [
  {
    name: "LinkedIn",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
  },
  {
    name: "Github",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Twitter",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  },
];

const Socials = ({ className }: Props) => {
  return (
    <section className={`${className} font-light text-sm md:text-base`}>
      <p className="font-light opacity-40">Where to find me?</p>
      <div className="bg-nav w-full p-2 rounded-xl border-zinc-800 mt-4 border-[1px]">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <div className="rounded-lg flex items-center gap-3 hover:bg-zinc-800/70 py-3 px-4 opacity-70">
              <div>
                <Image
                  src={link.url}
                  alt="github"
                  width={100}
                  height={100}
                  className="size-5 invert"
                />
              </div>
              <p>{link.name}</p>
            </div>
            <hr className={" opacity-10 border-t-[1px] mx-2 "} />
          </React.Fragment>
        ))}

        <div className="rounded-lg flex items-center justify-between hover:bg-zinc-800/70 py-3 px-4 opacity-90">
          <div className=" flex items-center gap-4">
            <div>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-plain.svg"
                }
                alt="email"
                width={100}
                height={100}
                className="size-4 invert"
              />
            </div>
            <p>Email Me</p>
          </div>
          <p className="opacity-40">ankitrajxd@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Socials;
