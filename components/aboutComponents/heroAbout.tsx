"use client";

import Lottie from "lottie-react";
import waveAnimation from "../../lotties/Wave-Loop.json";
import Header from "../landing-page/header";

export const HeroAbout = () => {
  return (
    <div className="bg-black py-4 sm:relative sm:min-h-screen sm:py-0">
      <Header />
      <main className="z-10 mt-20 block">
        <div className="space-y-6 text-center">
          <div className="bg-opacity-60 inline-block rounded-full border border-emerald-400/20 bg-emerald-900/30 px-6 py-1.5 shadow-lg backdrop-blur-md">
            <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
              Kasbah Learn Hub 🎓
            </p>
          </div>
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Who We Are and Why We&apos;re Here
          </h1>

          <p className="mx-auto max-w-xl text-lg text-gray-400">
            Draw closer to discover the passion and people behind Skill, and see how our journey is
            shaping creative futures in Morocco.
          </p>
        </div>
      </main>
      <div className="sm:top)-50 z-0 hidden sm:absolute sm:bottom-1/4 sm:block sm:w-full lg:bottom-0">
        <Lottie animationData={waveAnimation} loop={true} />
      </div>
    </div>
  );
};
