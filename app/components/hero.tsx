import React from "react";
import { BlurFade } from "./blur-fade";

interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <section className={`${className}`}>
      <BlurFade delay={0.1} inView>
        <div className={"text-[26px] font-normal text-heading opacity-100"}>
          <p>FullStack Developer Creating</p>
          <p>seamless web experiences.</p>
        </div>
      </BlurFade>

      <BlurFade
        delay={0.15}
        className={
          "mt-7 text-[14px] sm:text-[15px] text-text leading-[21px] sm:leading-7 "
        }
      >
        <p>
          I am <span className="font-bold">Ankit</span>, an India based
          fullStack web developer. I specialize in product development for
          web-based applications with a focus on simplicity, minimalism &
          usability.
        </p>
      </BlurFade>
      <BlurFade
        delay={0.2}
        className={
          "mt-7 font-light text-[14px] leading-[21px] sm:text-[15px] sm:leading-7 text-text"
        }
      >
        <p>
          I am currently pursuing bachelor&apos;s of engineering in computer
          science from{" "}
          <span className="underline underline-offset-[2px]">
            Chandigarh University
          </span>
          .
        </p>
      </BlurFade>
      <BlurFade
        delay={0.25}
        className={
          "mt-7 font-light text-[14px] leading-[21px] sm:text-[15px] sm:leading-7 text-text"
        }
      >
        <p className={"opacity-90"}>
          In my spare time, I like to play video games specially Valorant (would
          love if you join me 😊) and sometimes work on improving my UI/UX
          skills.
        </p>
      </BlurFade>
    </section>
  );
};
export default Hero;
