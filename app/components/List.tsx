import React from "react";

import tick from "../../public/correct.png";
import remove from "../../public/remove.png";
import Image from "next/image";

const List = () => {
  return (
    <div className=" text-xs p-2 px-0">
      <h2 className="my-6 mt-10 mb-3 md:mt-0 text-center flex justify-center items-center flex-col">
        Things I can do{" "}
      </h2>
      <div className="w-64 p-1 h-fit border relative">
        <div className="absolute -left-1 top-0">
          <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
        </div>

        <div className="absolute right-1 top-0">
          <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
        </div>
        <div className="absolute -left-1 bottom-0">
          <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
        </div>
        <div className="absolute bottom-0 right-1">
          <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
        </div>

        <div className="flex justify-between items-center mx-2">
          <Image className="size-5" src={tick} alt="tick" />
          <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium  border-gray-200 rounded-t-lg    ">
            Collaborate on Projects
          </p>
        </div>
        <div className="flex justify-between items-center mx-2">
          <Image className="size-5" src={tick} alt="tick" />
          <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium border-gray-200 rounded-t-lg    ">
            Debug your code
          </p>
        </div>
        <div className="flex justify-between items-center mx-2">
          <Image className="size-5" src={remove} alt="tick" />
          <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium  border-gray-200 rounded-t-lg    ">
            Fix your Computer
          </p>
        </div>
        <div className="flex justify-between items-center mx-2">
          <Image className="size-5" src={remove} alt="tick" />
          <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium border-gray-200 rounded-t-lg    ">
            Make you a pro coder
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;
