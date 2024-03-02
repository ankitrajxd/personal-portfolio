import React from "react";
import Timeline from "../components/Timeline";

const TimelinePage = () => {
  return (
    <div className="p-6 mt-[4rem]">
      {/* <p className="text-xs opacity-45 text-center mb-4">{`(This page is still in development. Content may not be accurate.)`}</p> */}
      <h2
        className={`text-center font-bold text-sm text-[#F11A7B] uppercase tracking-wider mb-6`}
      >
        About
      </h2>
      <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
        Education
      </p>

      <Timeline />
    </div>
  );
};

export default TimelinePage;
