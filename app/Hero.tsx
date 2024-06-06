import CurvedText from "./components/CurvedText";

const Hero = () => {
  return (
    <>
      <div
        data-aos="fade"
        className="h-auto mb-[2.5rem] md:my-0   md:h-[70vh] flex items-center justify-center "
      >
        <div className="mx-[5rem] md:mx-[3rem] border border-dashed p-10 lg:mx-[12rem] w-full relative flex items-center justify-start sm:justify-center">
          <div className="absolute -left-2 top-0">
            <span className="w-4 h-[1.3px] bg-white bg-opacity-70 absolute"></span>
            <span className="w-4 h-[1.3px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
          </div>

          <div className="absolute right-2 top-0">
            <span className="w-4 h-[1.3px] bg-white bg-opacity-70 absolute"></span>
            <span className="w-4 h-[1.3px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
          </div>
          <div className="absolute -left-2 bottom-0">
            <span className="w-4 h-[1.3px] bg-white bg-opacity-70 absolute"></span>
            <span className="w-4 h-[1.3px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
          </div>
          <div className="absolute bottom-0 right-2">
            <span className="w-4 h-[1.3px] bg-white bg-opacity-70 absolute"></span>
            <span className="w-4 h-[1.3px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
          </div>
          <h1 className="text-5xl font-bold md:text-7xl xl:text-[5rem] text-left sm:text-center leading-tight md:leading-tight ">
            Hi, I&apos;m{" "}
            {/* <span className="bg-clip-text font-protest font-normal  text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
                Ankit,
              </span> */}
            {/* <span className="font-protest text-5xl md:text-7xl font-normal bg-orange-600 relative text-white px-4 rounded inline-block -rotate-6 mt-1">
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute top-1 left-1 rounded-full">
                  <span className="bg-orange-500 h-1 w-1 inline-block absolute top-[1.6px] left-[1.8px] rounded-full"></span>
                </span>
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute right-1 top-1 rounded-full">
                  <span className="bg-orange-500 h-1 w-1 inline-block absolute top-[1.6px] left-[1.8px] rounded-full"></span>
                </span>
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute bottom-1 left-1 rounded-full">
                  <span className="bg-orange-500 h-1 w-1 inline-block absolute top-[1.6px] left-[1.8px] rounded-full"></span>
                </span>
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute bottom-1 right-1 rounded-full">
                  <span className="bg-orange-500 h-1 w-1 inline-block absolute top-[1.6px] left-[1.8px] rounded-full"></span>
                </span>
                Ankit
              </span> */}
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

          {/* <span className="absolute rounded-full text-[10px] text-white font-bold top-[-2.4rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0.35rem] px-3">
            India
          </span> */}
        </div>
      </div>
      <div className="flex justify-between items-center flex-col">
        <CurvedText />
      </div>

      <p className="text-sm text-zinc-500 text-center mt-9 font-jetbrains">
        <span className=" bg-clip-text text-transparent font-bold bg-gradient-to-r from-[#FDBA66] to-[#FD6D71]">
          console
        </span>
        .
        <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r from-[#FFEFBA] to-[#FFFFFF]">
          log
        </span>
        <span> (</span>`I am a DevOps Engineer and Frontend Developer based in
        India, I <span className="opacity-70">💛</span> building Web Apps.`
        <span>)</span>
      </p>
    </>
  );
};

export default Hero;
