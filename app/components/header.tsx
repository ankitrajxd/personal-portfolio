"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const pathName = usePathname();
  console.log();

  return (
    <nav className={`${className} flex justify-between items-center`}>
      <Link href={"/"}>
        <Image
          src={"/ankit.png"}
          alt={"ankit"}
          width={100}
          height={100}
          className={"invert size-12"}
        />
      </Link>

      <div
        className={
          "flex gap-1 items-center bg-nav p-1 rounded-full border-[1px] border-zinc-800 text-zinc-500 text-sm"
        }
      >
        <span
          className={`${
            pathName === "/" && "btn-active"
          } py-1.5 px-3 rounded-full `}
        >
          <Link href={"/"}>Home</Link>
        </span>
        <span
          className={`${
            pathName === "/about" ? "btn-active" : ""
          }    py-1.5 px-3 rounded-full `}
        >
          <Link href={"/about"}>About</Link>
        </span>
        <span
          className={`${
            pathName === "/projects" && "btn-active"
          } py-1.5 px-3 rounded-full `}
        >
          <Link href={"/projects"}>Work</Link>
        </span>
      </div>
    </nav>
  );
};
export default Header;
