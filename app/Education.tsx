import React from "react";
import { IoMdSchool } from "react-icons/io";
import { FaSchool as Fahighschool } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import About from "./About";

const Education = () => {
  return (
    <div>
      <div className="relative">
        <h2
          className={`text-center font-bold text-sm text-[#F11A7B] uppercase tracking-wider mb-6`}
        >
          Education
        </h2>
        <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
          Theoretical space{" "}
        </p>
      </div>

      <div className={` sm:flex gap-3 flex-wrap rounded-md `}>
        <div className="  md:w-fit my-2 sm:my-0 p-4 px-7 rounded-lg  flex gap-x-4 items-center">
          <IoMdSchool color="gray" size={"30px"} />
          <div>
            <p className="text-orange-500  text-xs font-semibold ">
              2021 - 2025
            </p>
            <h2 className="text-xl font-bold  ">Chandigarh University</h2>
            <p className="opacity-70 text-base">Bachelor of Engineering CSE</p>
          </div>
        </div>
        <div className=" md:w-fit p-4 my-2 sm:my-0 text-sm px-7 rounded-lg   flex gap-x-4 items-center">
          <Fahighschool color="gray" size={"30px"} />
          <div>
            <p className="text-orange-500 text-xs font-semibold ">
              2019 - 2021
            </p>
            <h2 className="text-xl font-bold ">Paramount Academy</h2>
            <p className="opacity-70 text-base">12th - Intermediate</p>
          </div>
        </div>
        <div className=" md:w-fit p-4 my-2 sm:my-0 text-sm px-7 rounded-lg  flex gap-x-4 items-center ">
          <FaSchool color="gray" size={"30px"} />
          <div>
            <p className="text-orange-500 text-xs font-semibold ">
              2016 - 2019
            </p>
            <h2 className="text-xl font-bold ">Woodbine Modern School</h2>
            <p className="opacity-70 text-base">10th - Matriculation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
