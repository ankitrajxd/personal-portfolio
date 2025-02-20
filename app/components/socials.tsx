import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socialList } from "../data";

interface Props {
  className?: string;
}

const Socials = ({ className }: Props) => {
  return (
    <section className={`${className} font-light text-sm`}>
      <p className="font-light opacity-40">Where to find me?</p>
      <div className="bg-nav w-full p-2 rounded-xl border-zinc-800 mt-4 border-[1px]">
        {socialList.map((link, index) => (
          <React.Fragment key={index}>
            <Link
              target="_blank"
              href={link.url}
              className="rounded-lg flex items-center gap-3 hover:bg-zinc-800/70 py-3 px-4 opacity-70 group hover:outline hover:outline-zinc-700 hover:outline-[1px] "
            >
              <div>
                <Image
                  src={link.imageUrl}
                  alt="github"
                  width={100}
                  height={100}
                  className="size-5 invert"
                />
              </div>
              <p>{link.name}</p>
            </Link>
            <hr className={" opacity-5 border-t-[1px] mx-2 "} />
          </React.Fragment>
        ))}

        <div className="rounded-lg flex items-center justify-between hover:bg-zinc-800/70 py-3 px-4 opacity-70">
          <div className=" flex items-center gap-4">
            <div>
              <Image
                src={"https://s.magecdn.com/social/mb-mail.svg"}
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
