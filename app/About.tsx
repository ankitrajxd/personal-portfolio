import React from "react";

const About = () => {
  return (
    <div>
      <div className=" flex-col items-center">
        <h2
          className={`text-center font-bold text-sm text-yellow-500 uppercase tracking-wider mb-6`}
        >
          About
        </h2>
        <p className=" text-2xl sm:text-3xl mb-6 font-extrabold underline md:no-underline underline-offset-8 decoration-yellow-500">
          About Me{" "}
        </p>
      </div>
      <p className="opacity-85 ">
        As a pre-final year CSE undergrad, I&apos;m adept at building projects
        from scratch. I specialize in implementing{" "}
        <span className="font-bold">DevOps solutions</span> for applications and
        have a passion for creating innovative web apps using cutting-edge
        technology stacks. I&apos;m also open to collaborating on software
        projects.
      </p>
    </div>
  );
};

export default About;
