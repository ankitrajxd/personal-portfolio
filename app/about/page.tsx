import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="text-[13px] sm:text-[14px]">
      {/* image grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 grid-rows-2 gap-3 sm:gap-3 ">
        <div className="col-span-2 sm:col-span-3 row-span-2">
          <Image
            src={"/ankit1.jpg"}
            width={500}
            height={300}
            quality={100}
            alt="image"
            className="w-full h-full object-cover  rounded-lg fil"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={"/lego.jpg"}
            width={200}
            height={200}
            alt="image"
            className="w-full rounded-lg object-cover h-full"
          />
        </div>
        <div className=" col-span-1 row-span-1">
          <Image
            src={"/dog.jpg"}
            width={200}
            height={200}
            alt="image"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* About */}
      <div className="my-10 font-light">
        <p className="opacity-95">
          I am Ankit, a passionate full stack developer. I enjoy building apps
          and websites. Currently I&apos;m improving my skills by learning React
          Native.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

// const tool = () => {
//   return <>tool</>;
// };
