import React from "react";

interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <section className={`${className}`}>
      <div>
        <div className={"text-[26px] font-normal text-heading opacity-100"}>
          <p>FullStack Developer Creating</p>
          <p>
            <span>seamless</span> <span>web</span>{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">
              experiences
            </span>
            .
          </p>
        </div>
      </div>

      <div
        className={
          "mt-7 text-[14px] sm:text-[15px] text-text leading-[21px] sm:leading-7 "
        }
      >
        <p>
          I am{" "}
          <span className="font-style-script text-[2rem] bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">
            Ankit
          </span>
          , an India based fullStack web developer and freelancer. I specialize
          in product development for web-based applications with a focus on
          simplicity, minimalism & usability.
        </p>
      </div>
      {/* <div
        className={
          "mt-7 font-light text-[14px] leading-[21px] sm:text-[15px] sm:leading-7 text-text"
        }
      >
        <p>
          I am currently pursuing bachelor&apos;s of engineering in computer
          science from <span className="">Chandigarh University</span>.
        </p>
      </div> */}
      <div
        className={
          "mt-7 font-light text-[14px] leading-[21px] sm:text-[15px] sm:leading-7 text-text"
        }
      >
        <p className="opacity-90">
          Need a website that works? I build fast, beautiful web apps that your
          users will love.
        </p>
      </div>
    </section>
  );
};
export default Hero;
