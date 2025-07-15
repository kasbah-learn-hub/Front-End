"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "500",
});
export const HeroSection = () => {
  const textRef = useRef(null);
  const sousTitleRef = useRef(null);
  const bodyRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "53% 50%",
        markers: true,
        scrub: true,
      },
    });

    tl.to(
      sousTitleRef.current,
      {
        y: -100,
      },
      "a"
    )
      .to(
        textRef.current,
        {
          scale: 1.5,
        },
        "a"
      )
      .to(
        bodyRef.current,
        {
          scale: 1.5,
        },
        "a"
      );
  });

  return (
    <div
      ref={containerRef}
      className="h-screen flex flex-col justify-center items-center space-y-6 md:space-y-20 bg-[#282828]) text-white"
    >
      <div
        ref={sousTitleRef}
        className="border border-[#949CA6] rounded-3xl px-3 py-2 font-semibold text-md md:text-xl text-[#949CA6]"
      >
        Rated <span className="text-blue-500">4.9 ★</span> by Freelance Experts
      </div>
      <h1
        ref={textRef}
        className={`text-[35px] md:text-6xl xl:text-[7rem] font-semibold tracking-tight w-2/4 text-center ${robotoFont.className} bg-gradient-to-r from-blue-900 via-blue-50 to-indigo-900 inline-block text-transparent bg-clip-text`}
      >
        Who We Are and Why We&apos;re Here
      </h1>
      <div
        ref={bodyRef}
        className="text-md md:text-xl font-bold w-2/4 text-center"
      >
        Draw closer to discover the passion and people behind Skill, and see how
        our journey is shaping creative futures in Morocco.
      </div>
    </div>
  );
};
