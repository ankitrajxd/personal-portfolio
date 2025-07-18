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
      <div className="relative rounded-full size-[2.6rem] mr-2 overflow-hidden text-sm group">
        {/* Gradient border */}
        <div className="rounded-full border-[3.5px] border-zinc-600 size-full overflow-hidden">
          {/* Profile pic */}
          <Image
            src={"/profile-picture.jpg"}
            alt={"ankit"}
            width={100}
            height={100}
            priority={true}
            className={"w-full h-full object-cover"}
          />
        </div>
      </div>

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
