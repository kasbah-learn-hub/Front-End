import Orb from "@/components/3d-models/orb";
import Header from "@/components/landing-page/header";

export default function Hero() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative flex max-h-screen min-h-screen flex-col overflow-hidden">
        {/* Orb as full background */}
        <div className="orb-bg absolute inset-0 z-0 h-full w-full">
          <Orb />
        </div>
        <Header />
        <main className="z-10 mt-20 block">
          <div className="space-y-6 text-center">
            <div className="bg-opacity-60 inline-block rounded-full border border-emerald-400/20 bg-emerald-900/30 px-6 py-1.5 shadow-lg backdrop-blur-md">
              <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
                Kasbah Learn Hub 🎓
              </p>
            </div>
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Empowering Learning, Everywhere
            </h1>
            <p className="mx-auto max-w-xl text-lg text-gray-400">
              A next-gen learning platform making education accessible, interactive, and smart for
              everyone, everywhere. 🚀
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-md bg-emerald-500 px-6 py-3 font-medium text-black transition-colors hover:bg-emerald-600">
                Explore Courses
              </button>
              <button className="rounded-md border border-gray-600 px-6 py-3 font-medium text-white transition-colors hover:border-gray-400">
                Learn More →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
