"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export const SmoothScrollwrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.07 }}>
      <div
        style={{
          backgroundImage: "url(/heroSection-bg.jpg)",
          backgroundSize: "cover",
        }}
        className="min-h-screen"
      >
        {children}
        <div className="text-black">jjjjjjjjjjjjjjj</div>
      </div>
    </ReactLenis>
  );
};
