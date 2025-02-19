import React from "react";
import Image from "next/image";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <nav className={`${className} flex justify-between items-center`}>
      <div>
        <Image
          src={"/ankit.png"}
          alt={"ankit"}
          width={100}
          height={100}
          className={"invert size-12"}
        />
      </div>

      <div
        className={
          "flex gap-1 items-center bg-nav p-1 rounded-full border-[1px] border-zinc-800 text-zinc-500 text-sm"
        }
      >
        <span
          className={
            "bg-[#3f3f46] text-zinc-300 py-1.5 px-3 rounded-full border-[1px] border-zinc-600"
          }
        >
          Home
        </span>
        <span className={" py-1.5 px-3 rounded-full"}>About</span>
        <span className={"py-1.5 px-3 rounded-full "}>Projects</span>
      </div>
    </nav>
  );
};
export default Header;
