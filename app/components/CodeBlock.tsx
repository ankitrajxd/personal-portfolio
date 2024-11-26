/* eslint-disable react/no-unescaped-entities */

const CodeBlock = () => {
  return (
    <div>
      <div className=" rounded-lg w-fit m-auto mb-8">
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FDBA66] to-[#FD6D71]">
          Have an idea in mind?
        </h2>
        <div className="flex justify-center items-center gap-1 mt-2">
          <p className="text-md md:text-xl text-zinc-300">
            Let&apos;s make it real!
          </p>
          <a
            href="mailto:ankitrajxd@gmail.com"
            className=" text-white relative px-2 flex justify-center items-center text-sm"
          >
            <span className="-z-10">Get Started</span>
            <svg
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 500"
              fill="#FD966C"
              width={120}
            >
              <path d="M560.2 440.3C450 436 259 425.6 184 337.4 32.8 200.6 351.7 116.6 447 94.1c128.7-28.7 263.4-46.6 394.5-24.8 37.4 6 74.9 14.6 108.8 32 60 19.7 128.2 71.3 98.4 142-10.9 26.7-31.2 48.5-53.7 66-23 29.2-53.7 50.9-86.6 67.6-107.5 52-230 64.7-348.3 63.4Zm-29.3-17.8c112 4.4 226.9-4.7 332.4-44.7-151.4 50-314.8 52.7-471.6 30.8 46.1 7.2 92.6 11.7 139.2 14Zm-9.2-18.7c119.3 4.6 241-7 353.5-48.8a440.7 440.7 0 0 0 79.4-39.3 92.8 92.8 0 0 0 42-46c29.5-59.2 7.9-120-50.2-150.3-1 4.9-7.8 5.8-11.2 2.7-3.5-3.7-6.2-8.3-10.8-11-38.4-11.3-78-17.2-117.8-20.5-174.9-10-386.4 27.7-541 111.5C219.9 226.9 158 270.5 201 327c87.7 60.7 216.6 69.9 320.8 76.7ZM166.3 278c10.4-55 78.8-85.4 124.1-108.6-3.5-3.9-.9-9.6 3.8-11C334 144.8 374 132 414 119.1c-61.7 16.8-266.4 75.2-247.8 159ZM1028 190a115.2 115.2 0 0 1 .6 48.2 70 70 0 0 0-8.1-70.2c3.2 7 5.7 14.5 7.5 22Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="bg-zinc-950 max-w-[700px] m-auto  border relative text-sm">
        <div className="px-5 py-5 flex items-center justify-between border-b">
          <div className="flex flex-row space-x-2">
            <div className="rounded-full bg-zinc-500 w-3 h-3"></div>
            <div className="rounded-full bg-zinc-500 w-3 h-3"></div>
            <div className="rounded-full bg-zinc-400 w-3 h-3"></div>
          </div>

          <span className="opacity-50 text-xs">Javascript</span>
        </div>
        <div className="px-5 py-8 border-zinc-600 overflow-hidden">
          <code className="font-jetbrains">
            <div className="blink" data-aos="fade-in-left">
              {/* <span className="text-zinc-500 mr-2">1</span>{" "} */}
              <span className="text-pink-500 mr-2"> const</span>
              <span className="text-white mr-2">dev</span>
              <span className="text-pink-500 mr-2">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="100">
              {/* <span className="text-zinc-500">2</span> */}
              <span className="text-white ml-6 mr-2">name:</span>
              <span className="text-gray-400">'</span>
              <span className="text-amber-300">Ankit Raj</span>
              <span className="text-gray-400">',</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="200">
              {/* <span className="text-zinc-500">3</span> */}
              <span className="text-white ml-6 mr-2">skills:</span>
              <span className="text-gray-400">['</span>
              <span className="text-amber-300">frontend</span>
              <span className="text-gray-400">','</span>
              <span className="text-amber-300">devops</span>
              <span className="text-gray-400">'],</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="300">
              {/* <span className="text-zinc-500">4</span> */}
              <span className="text-white ml-6 mr-2">socials:</span>
              <span className="text-gray-400">['</span>
              <span className="text-amber-300 underline underline-offset-2">
                <a href="https://github.com/ankitrajxd">Github</a>
              </span>
              <span className="text-gray-400">','</span>
              <span className="text-amber-300 underline underline-offset-2">
                <a href="https://www.linkedin.com/in/ankitraaj/">Linkedin</a>
              </span>
              <span className="text-gray-400">'],</span>
            </div>

            <div data-aos="fade-in-left" data-aos-delay="400">
              {/* <span className="text-zinc-500">5</span> */}
              <span className="text-white ml-6 mr-2">problemSolver:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="500">
              {/* <span className="text-zinc-500">6</span> */}
              <span className="text-green-400 ml-6 mr-2">hireable:</span>
              <span className="text-orange-400">function</span>
              <span className="text-gray-400">() {"{"}</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="600">
              {/* <span className="text-zinc-500">7</span> */}
              <span className="text-orange-400 ml-16 mr-2">return</span>
              <span className="text-gray-400">(</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="700">
              {/* <span className="text-zinc-500">8</span> */}
              <span className="text-cyan-400 ml-24">this.</span>
              <span className="text-white mr-2">problemSolver</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="800">
              {/* <span className="text-zinc-500">9</span> */}
              <span className="text-cyan-400 ml-24">this.</span>
              <span className="text-white mr-2">skills.length</span>
              <span className="text-amber-300 mr-2">&gt;=</span>
              <span className="text-orange-400">2</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="1000">
              {/* <span className="text-zinc-500">11</span> */}
              <span className="text-gray-400 ml-[4.5rem] mr-2">);</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="1100">
              {/* <span className="text-zinc-500">12</span> */}
              <span className="text-gray-400 ml-[2.9rem]">{"}"}</span>
            </div>
            <div data-aos="fade-in-left" data-aos-delay="1200">
              {/* <span className="text-zinc-500">13</span> */}
              <span className="text-gray-400 ml-[1.3rem]">{"}"}</span>
            </div>
            <div data-aos="fade-in-left" className="mt-4" data-aos-delay="1300">
              {/* <span className="text-zinc-500">13</span> */}
              <span className="text-gray-500 ">
                {"// Fun Fact - You can actually click on socials."}
              </span>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
