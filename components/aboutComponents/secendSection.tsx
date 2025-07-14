import Image from "next/image";

import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const SecendSection = () => {
  return (
    <div
      className={`h-sc)reen bg-[#282828]) text-white relative ${robotoFont.className} space-y-12`}
    >
      {/**secend section */}
      <div className="h-screen w-4/4 border border-gray-500 rounded-full absolute -left-3/4 " />
      <div className="flex px-12 space-x-9 z-10">
        <Image src={"/imgSection.svg"} alt="image" width={750} height={716} />
        <div className="w-3/5 h-[716px] my-auto p-4 flex flex-col justify-center space-y-6">
          <div className="space-y-2.5">
            <p className="text-blue-400 text-2xl">The Name</p>
            <h1 className="text-[4rem]">
              The Story Behind the{" "}
              <span className="text-blue-400">Name Skill</span>
            </h1>
          </div>
          <p className="text-2xl text-gray-400">
            The name &apos;&apos;Skill&apos;&apos; reflects the platform&apos;s
            core mission: to empower individuals in Morocco by helping them
            develop valuable skills.
          </p>
          <p className="text-2xl text-gray-400">
            &apos;&apos;Skill&apos;&apos; signifies the practical abilities and
            knowledge that our platform aims to impart, enabling users to excel
            in their personal and professional lives.
          </p>
          <p className="text-2xl text-gray-400">
            The name embodies a commitment to fostering a culture of continuous
            learning and innovation within Morocco, bridging the gap between
            traditional education and the needs of modern learners.
          </p>
        </div>
      </div>
      {/**======secend section */}

      {/**three section */}
      <div className="flex px-12 space-x-9 z-10">
        <div className="w-3/5 h-[716px] my-auto p-4 space-y-6">
          <div className="space-y-2">
            <p className="text-blue-400 text-2xl">Our Founder</p>
            <h1 className="text-[4rem]">
              Meet Ilyas Megarbi, Founder of Skill
            </h1>
          </div>
          <p className="text-2xl text-gray-400">
            Our founder, Ilyas Megarbi, is an accomplished brand builder with
            over six years of expertise in the creative industry. He has
            collaborated with over 500 clients globally, including big names
            like ICON Amsterdam and LaboSport Group.
          </p>
          <p className="text-2xl text-gray-400">
            In 2021, Ilyas launched his YouTube channel to share valuable
            insights from his journey and inspire others to build online
            careers. The channel quickly gained significant traction, leading
            him to create the Skill platform.
          </p>
          <p className="text-2xl text-gray-400">
            Ilyas founded Skill with a singular purpose: to empower Moroccan
            generations to build online careers, grow their incomes, and achieve
            success through premium online courses and top-notch creators. He
            believes that regardless of one&apos;s prior experience, everyone
            can benefit from Skill and reach their goals.
          </p>
        </div>
        <Image src={"/imgSection.svg"} alt="image" width={750} height={716} />
      </div>
      {/**======three section */}

      {/**Four section */}
      <div className="flex flex-col items-center mt-40 space-y-6">
        <h1
          className={`text-[20px] md:text-6xl) xl:text-[4rem] font-semi)bold tracking-ti)ght w-2/4 text-center`}
        >
          Where Community Fuels Growth, and Learning is an Experience
        </h1>
        <div className="text-xl text-gray-400 w-2/4 text-center">
          At Skill, a strong community, a growth mindset, and hands-on learning
          are the foundation, shaping meaningful and impactful experiences.
        </div>
      </div>
      <div className="flex px-12 space-x-4 justify-center">
        <div className="w-2/5 p-12">
          <div className="min-w-md">
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-2xl bg-primary ${
                    i % 2 === 0 ? "animate-pulse" : ""
                  }`}
                />
              ))}
            </div>

            <h2 className="text-2xl text-gray-400 mb-4">Experience</h2>
            <p className="text-2xl">
              Transforming Knowledge Through Real-World Practice
            </p>
          </div>
        </div>

        <div className="w-2/5 p-12">
          <div className="min-w-md">
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-2xl bg-primary ${
                    i % 2 !== 0 ? "animate-pulse" : ""
                  }`}
                />
              ))}
            </div>

            <h2 className="text-2xl text-gray-400 mb-4">Community</h2>
            <p className="text-2xl">Uniting Creators for Shared Success</p>
          </div>
        </div>

        <div className=" w-2/5 p-12">
          <div className="min-w-md">
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-2xl bg-primary ${
                    i % 2 === 0 ? "animate-pulse" : ""
                  }`}
                />
              ))}
            </div>

            <h2 className="text-2xl text-gray-400 mb-4">Community</h2>
            <p className="text-2xl">Uniting Creators for Shared Success</p>
          </div>
        </div>
      </div>
      {/**======Four section */}
    </div>
  );
};
