"use client";

import type React from "react";

import { Box, Lock, Search, Settings, Sparkles, Cpu, Users, Award, Globe, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Features() {
  return (
    <section className="flex w-full flex-col items-center bg-gradient-to-b from-black via-gray-900 to-black px-4 py-12 md:py-20">
      <div className="mb-10 max-w-2xl text-center md:mb-16">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Platform Features
        </h2>
        <p className="mx-auto max-w-xl text-base text-neutral-400 md:text-lg">
          Discover the powerful features designed to enhance your learning experience and help you
          achieve your goals.
        </p>
      </div>
      <ul className="grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <GridItem
          icon={<Box className="h-6 w-6 text-emerald-400" />}
          title="Video Learning"
          description="Seamless video streaming with custom controls."
        />
        <GridItem
          icon={<Settings className="h-6 w-6 text-emerald-400" />}
          title="Real-time Communication"
          description="Live chat and instant notifications for engaging discussions."
        />
        <GridItem
          icon={<Lock className="h-6 w-6 text-emerald-400" />}
          title="Progress Tracking"
          description="Comprehensive analytics and reporting to monitor your learning journey."
        />
        <GridItem
          icon={<Sparkles className="h-6 w-6 text-emerald-400" />}
          title="Personalized Learning"
          description="AI-driven learning paths tailored to your individual needs."
        />
        <GridItem
          icon={<Search className="h-6 w-6 text-emerald-400" />}
          title="Gamification"
          description="Earn badges, achievements, and climb leaderboards as you learn."
        />
        <GridItem
          icon={<Cpu className="h-6 w-6 text-emerald-400" />}
          title="AI-Powered Tutor"
          description="Get instant help and explanations powered by intelligent AI."
        />
        <GridItem
          icon={<Users className="h-6 w-6 text-emerald-400" />}
          title="Collaborative Learning"
          description="Work together with classmates in real-time study sessions."
        />
        <GridItem
          icon={<Award className="h-6 w-6 text-emerald-400" />}
          title="Achievements & Rewards"
          description="Stay motivated with certificates and rewards for milestones."
        />
        <GridItem
          icon={<Globe className="h-6 w-6 text-emerald-400" />}
          title="Multi-language Support"
          description="Switch between Arabic, French, and English seamlessly."
        />
        <GridItem
          icon={<Zap className="h-6 w-6 text-emerald-400" />}
          title="Fast & Scalable"
          description="Built on modern infrastructure to serve thousands effortlessly."
        />
      </ul>
    </section>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[14rem] list-none">
      <div className="relative h-full rounded-2xl border border-neutral-800 bg-neutral-950 p-3 shadow-lg shadow-emerald-700/20 transition-shadow duration-300 hover:shadow-emerald-500/40 md:rounded-3xl md:p-6">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 rounded-xl p-6">
          <div className="flex flex-col gap-4">
            <div className="w-fit rounded-lg border border-emerald-600 bg-emerald-900/20 p-3 text-emerald-400">
              {icon}
            </div>
            <h3 className="font-sans text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-neutral-300 [&_b]:font-semibold [&_strong]:font-semibold">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
