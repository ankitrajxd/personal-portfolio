import React from "react";

interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <section className={`${className} opacity-95`}>
      <div className={"text-[26px] font-normal"}>
        <p>FullStack Developer Creating</p>
        <p>seamless web experiences.</p>
      </div>
      <div
        className={
          "mt-7 text-[14px] sm:text-[15px]  sm:leading-7 hidden sm:block"
        }
      >
        <p>
          I am{" "}
          <span
            className={
              "font-bold  bg-clip-text  text-transparent bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d]"
            }
          >
            Ankit
          </span>
          , an India based fullStack web developer.
        </p>
        <p>
          I specialize in product development for web-based applications with a
          focus on simplicity, minimalism & usability.
        </p>
      </div>
      <div
        className={"mt-7 text-[14px] sm:text-[15px]  sm:leading-7 sm:hidden"}
      >
        <p>
          I am{" "}
          <span
            className={
              "font-bold bg-clip-text  text-transparent bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d]"
            }
          >
            Ankit
          </span>
          , an India based fullStack web developer. I specialize in product
          development for web-based applications with a focus on simplicity,
          minimalism & usability.
        </p>
      </div>
      <div
        className={"mt-7 font-light text-[14px] sm:text-[15px] sm:leading-7"}
      >
        <p>
          I am currently pursuing bachelor&apos;s of engineering in computer
          science from{" "}
          <span className="underline underline-offset-[2px]">
            Chandigarh University
          </span>
          .
        </p>
      </div>
      <div
        className={"mt-7 font-light text-[14px] sm:text-[15px] sm:leading-7"}
      >
        <p className={"opacity-90"}>
          In my spare time, I like to play Valorant (would love if you join me
          😊) and sometimes work on improving my UI/UX skills.
        </p>
      </div>
    </section>
  );
};
export default Hero;
