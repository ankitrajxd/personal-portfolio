"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../data";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const pathName = usePathname();

  return (
    <div className={`${className} flex justify-between items-center`}>
      {/* <Link href={"/"}>
        <Image
          src={"/signature.png"}
          alt={"ankit"}
          width={500}
          height={300}
          priority={true}
          className={"invert w-[6rem] opacity-100"}
        />
      </Link> */}
      <Link href={"/"} className="flex items-center gap-3 group">
        <div className="relative rounded-full size-[2.8rem] overflow-hidden transition-all duration-300 group-hover:scale-105">
          {/* Gradient border with hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-[2px] transition-all duration-300 group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400">
            <div className="rounded-full bg-nav size-full overflow-hidden">
              {/* Profile pic */}
              <Image
                src={"/profile-picture.jpg"}
                alt={"ankit"}
                width={100}
                height={100}
                priority={true}
                className={
                  "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                }
              />
            </div>
          </div>
        </div>

        {/* Optional: Add name/title */}
        <div className="hidden sm:block">
          <h3 className="text-heading font-medium text-sm transition-colors duration-300 group-hover:text-white">
            Ankit Raj
          </h3>
          <p className="text-faded text-xs">Web Developer</p>
        </div>
      </Link>

      <div className="flex items-center gap-2">
        <div
          className={
            "flex gap-1 items-center bg-nav p-1 rounded-full border-[1px] border-zinc-800 text-zinc-500 text-sm group"
          }
        >
          {navLinks.map((item) => (
            <Link
              href={item.url}
              key={item.name}
              className={`${
                pathName === item.url && "btn-active"
              } py-1.5 px-3 rounded-full hover:text-zinc-300`}
            >
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
