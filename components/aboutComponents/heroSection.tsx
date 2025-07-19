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
      "a",
    )
      .to(
        textRef.current,
        {
          scale: 1.5,
        },
        "a",
      )
      .to(
        bodyRef.current,
        {
          scale: 1.5,
        },
        "a",
      );
  });

  return (
    <div
      ref={containerRef}
      className="bg-[#000000]) flex h-screen flex-col items-center justify-center space-y-6 text-white md:space-y-20"
    >
      <div
        ref={sousTitleRef}
        className="text-md rounded-3xl border border-[#949CA6] px-3 py-2 font-semibold text-[#949CA6] md:text-xl"
      >
        Rated <span className="text-blue-500">4.9 ★</span> by Freelance Experts
      </div>
      <h1
        ref={textRef}
        className={`w-2/4 text-center text-[35px] font-semibold tracking-tight md:text-6xl xl:text-[7rem] ${robotoFont.className} inline-block bg-gradient-to-r from-blue-900 via-blue-50 to-indigo-900 bg-clip-text text-transparent`}
      >
        Who We Are and Why We&apos;re Here
      </h1>
      <div ref={bodyRef} className="text-md w-2/4 text-center font-bold md:text-xl">
        Draw closer to discover the passion and people behind Skill, and see how our journey is
        shaping creative futures in Morocco.
      </div>
    </div>
  );
};
