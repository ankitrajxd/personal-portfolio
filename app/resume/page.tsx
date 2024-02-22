import ankitresume from "@/public/ankitresume.png";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const ResumePage = () => {
  return (
    <>
      <div className="px-[1.2rem] md:px-[9rem] opacity-70">
        <Link href={"../"}>
          <MdOutlineKeyboardBackspace
            className="my-[1.3rem] mt-[2rem]"
            size={25}
          />
        </Link>
      </div>
      <AnimatedDiv ClassName="px-[1.2rem] md:px-[9rem] flex flex-col justify-center items-center">
        <AnimatedDiv ClassName="max-w-[400px]  overflow-hidden flex flex-col ">
          <h2 className="text-center font-bold text-sm text-[#FF8911] uppercase tracking-wider mb-4">
            Resume
          </h2>
          <p className="text-center text-2xl sm:text-3xl mb-4 font-extrabold">
            My Resume
          </p>
          <div className="p-3 dark:bg-zinc-800 bg-zinc-100 rounded-lg">
            <Image alt="myresume" className="rounded-md" src={ankitresume} />
          </div>
          <a href={"../../ankitresume.pdf"} target="_blank" download>
            <Button size={"sm"} variant={"outline"} className="my-3">
              <FiDownload className="mr-2" />
              Download
            </Button>
          </a>
        </AnimatedDiv>
      </AnimatedDiv>
    </>
  );
};

export default ResumePage;
