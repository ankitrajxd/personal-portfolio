import CurvedText from "./components/CurvedText";

const Hero = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="h-auto mb-[2.5rem] md:my-0 md:h-[70vh] pr-3 flex items-center justify-center "
      >
        <div className="mx-[5rem] md:mx-[3rem] lg:mx-[12rem] w-full relative flex items-center justify-start sm:justify-center">
          <h1 className="text-5xl font-bold md:text-7xl xl:text-[5rem] text-left sm:text-center leading-tight md:leading-tight ">
            Hi👋, I&apos;m{" "}
            <span className=" decoration-2 underline-offset-[5px] decoration-[#74E291]">
              {/* <span className="bg-clip-text font-protest font-normal  text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
                Ankit,
              </span> */}

              <span className="font-protest text-5xl md:text-7xl font-normal bg-orange-600 relative text-white px-4 rounded inline-block -rotate-6 mt-1">
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute top-1 left-1 rounded-full"></span>
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute right-1 top-1 rounded-full"></span>
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute bottom-1 left-1 rounded-full"></span>
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute bottom-1 right-1 rounded-full"></span>
                Ankit
              </span>
            </span>{" "}
            Yet another{" "}
            <span
              className={` text-5xl italic md:text-7xl xl:text-[5rem] mb-3 sm:mb-0 text-center sm:text-left font-extrabold text-slate-600 dark:text-slate-400`}
            >
              frontend developer.
            </span>
          </h1>

          {/* <span className="absolute rounded-full text-[10px] text-white font-bold top-[-2.4rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0.35rem] px-3">
            India
          </span> */}
        </div>
      </div>
      <div className="flex justify-between items-center flex-col">
        <CurvedText />
      </div>

      <p className="text-sm text-gray-500 text-center mt-9 font-jetbrains">
        <span className="text-violet-500">console</span>.
        <span className="text-orange-500">log</span>
        <span > (</span>`I am a DevOps Engineer and
        Frontend Developer based in India, I{" "}
        <span className="opacity-70">💛</span> building Web Apps.`
        <span >)</span>
      </p>
    </>
  );
};

export default Hero;
