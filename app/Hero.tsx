"use client";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="h-auto my-[5rem] md:my-0 md:h-[78vh] md:pr-3 flex items-center justify-center">
        <div className="mx-[12rem] w-full">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-5xl font-bold md:text-7xl text-left sm:text-center leading-tight md:leading-tight "
          >
            Hi, I&apos;m{" "}
            <span className=" decoration-2 underline-offset-[5px] decoration-[#74E291]">
              <span className="bg-clip-text font-protest font-normal  text-transparent bg-gradient-to-r from-[#ff8c66] to-[#ffd966]  dark:from-[#FFD700] dark:to-[#FF6347] ">
                Ankit,
              </span>
            </span>{" "}
            Yet another frontend{" "}
            <span
              className={` text-5xl italic md:text-7xl mb-3 sm:mb-0 text-center sm:text-left font-extrabold text-zinc-500`}
            >
              developer
              <span className="text-[#ff8c66]">.</span>
            </span>
          </motion.h1>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col">
        <AnimatePresence>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaArrowDownLong size={22} />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-[1.2rem] text-gray-600 text-center mt-4 ">
        I am a DevOps Engineer and Frontend Developer based in India, i{" "}
        <span className="opacity-70">💛</span> building Web Apps. (sounds
        fascinating! right?)
      </p>
    </>
  );
};

export default Hero;
