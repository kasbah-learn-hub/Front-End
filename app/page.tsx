import Orb from "@/components/3d-models/orb";
import Header from "@/components/landing-page/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative flex flex-col min-h-screen max-h-screen overflow-hidden">
        {/* Orb as full background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Orb />
        </div>
        <Header />
        <main className="block mt-20 z-10">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">Ship faster with Postgres</h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-400">
              The database developers trust, on a serverless platform designed to help you build
              reliable and scalable applications faster.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-md bg-emerald-500 px-6 py-3 font-medium text-black transition-colors hover:bg-emerald-600">
                Start for Free
              </button>
              <button className="rounded-md border border-gray-600 px-6 py-3 font-medium text-white transition-colors hover:border-gray-400">
                Talk to Us →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
