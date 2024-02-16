import ankitresume from "@/public/ankitresume.jpg";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ResumePage = () => {
  return (
    <AnimatedDiv ClassName="px-[1.2rem] md:px-[9rem]">
      <Link href={"../"}>
        <MdOutlineKeyboardBackspace className="my-[1rem] mt-[2rem]" size={30} />
      </Link>
      <div className="max-w-[400px]  overflow-hidden">
        <Image alt="myresume" className="rounded-md fill-muted-foreground" src={ankitresume} />
        <a href={"../../ankitresume.pdf"} download>
          <Button variant={"outline"} className="my-3">
            Download
          </Button>
        </a>
      </div>
    </AnimatedDiv>
  );
};

export default ResumePage;
