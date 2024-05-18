import React from "react";

import tick from "../../public/correct.png";
import remove from "../../public/remove.png";
import Image from "next/image";

const List = () => {
  return (
    <div className="font-jetbrains text-xs p-2">
      <h2 className="my-6 mt-10 md:mt-0 text-center">
        Things I can do for you{" "}
      </h2>
      <div className="w-64 p-1 h-fit text-gray-900 bg-white border-gray-200 rounded-lg dark:bg-zinc-800 dark:text-white">
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
            Make you a cup of coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;
