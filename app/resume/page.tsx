import ankitresume from "@/public/ankitresume.jpg";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ResumePage = () => {
  return (
    <>
      <div className="px-[1.2rem] md:px-[9rem] opacity-70">
        <Link href={"../"}>
          <MdOutlineKeyboardBackspace
            className="my-[1.6rem] mt-[2rem]"
            size={30}
          />
        </Link>
      </div>
      <AnimatedDiv ClassName="px-[1.2rem] md:px-[9rem] flex flex-col justify-center items-center">
        <AnimatedDiv ClassName="max-w-[400px]  overflow-hidden flex flex-col ">
          <h2 className="text-center font-bold text-sm text-[#FF8911] uppercase tracking-wider mb-6">
            Resume
          </h2>
          <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
            My Resume
          </p>
          <div className="p-3 bg-zinc-800 rounded-lg">
            <Image alt="myresume" className="rounded-md" src={ankitresume} />
          </div>
          <a href={"../../ankitresume.pdf"} download>
            <Button variant={"outline"} className="my-3">
              Download
            </Button>
          </a>
        </AnimatedDiv>
      </AnimatedDiv>
    </>
  );
};

export default ResumePage;