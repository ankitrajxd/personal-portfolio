import React from "react";

interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <section className={`${className}`}>
      <div className={"text-[26px] font-normal text-heading opacity-100"}>
        <p>FullStack Developer Creating</p>
        <p>seamless web experiences.</p>
      </div>

      <div className={"mt-7 text-[14px] sm:text-[15px] text-text  sm:leading-7 "}>
        <p>
          I am <span className="font-bold">Ankit</span>, an India based
          fullStack web developer. I specialize in product development for
          web-based applications with a focus on simplicity, minimalism &
          usability.
        </p>
      </div>
      <div
        className={"mt-7 font-light text-[14px] sm:text-[15px] sm:leading-7 text-text"}
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
        className={"mt-7 font-light text-[14px] sm:text-[15px] sm:leading-7 text-text"}
      >
        <p className={"opacity-90"}>
          In my spare time, I like to play video games specially Valorant (would
          love if you join me 😊) and sometimes work on improving my UI/UX
          skills.
        </p>
      </div>
    </section>
  );
};
export default Hero;
