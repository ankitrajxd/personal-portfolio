import CurvedText from "./components/CurvedText";

const Hero = () => {
  return (
    <>
      <div
        data-aos="fade"
        className="h-auto mb-[1rem] md:my-0 md:h-[70vh] flex items-center justify-center "
      >
        <div className="mx-[5rem] md:mx-[3rem] p-10 lg:mx-[12rem] w-full relative flex items-center justify-start sm:justify-center">
          <h1 className="text-5xl font-bold md:text-7xl xl:text-[5rem] text-left sm:text-center leading-tight md:leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-clip-text font-protest font-normal   text-transparent bg-gradient-to-r from-[#FDBA66] to-[#FD6D71] ">
              Ankit,
            </span>
            Yet another{" "}
            <span
              className={` text-5xl italic md:text-7xl xl:text-[5rem] mb-3 sm:mb-0 text-center sm:text-left font-extrabold text-slate-600 dark:text-zinc-400`}
            >
              frontend developer.
            </span>
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col">
        <CurvedText />
      </div>

      <p className="text-sm text-zinc-500 text-center mt-9 px-2">
        <span className=" bg-clip-text text-transparent font-bold bg-gradient-to-r from-red-400 to-red-500">
          console
        </span>
        .
        <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r from-green-300 to-green-500">
          log
        </span>
        <span> (</span>&quot;
        <span className="text-amber-300">
          I am a DevOps Engineer and Frontend Developer based in India, I
        </span>
        <span className="opacity-70"> 💛</span>
        <span className="text-amber-300"> building Web Apps.</span>&quot;
        <span>)</span>
      </p>
    </>
  );
};

export default Hero;
