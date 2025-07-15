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
          <p className="text-xl text-gray-400">
            &apos;&apos;Kasbah&apos;&apos; is more than just a word — it&apos;s
            a powerful symbol of heritage, resilience, and learning in Moroccan
            culture.
          </p>
          <p className="text-xl text-gray-400">
            Traditionally, a Kasbah is a fortress, often at the heart of a town,
            where leaders gathered, ideas were exchanged, and communities
            thrived. It stood for protection, wisdom, and strength. In many
            ways, the Kasbah was a hub of knowledge and innovation in its time.
          </p>
          <p className="text-xl text-gray-400">
            When building our learning platform, we wanted a name that reflected
            both our Moroccan roots and our vision for the future. The Kasbah is
            a metaphor — just as ancient kasbahs were places where people came
            together to build their future, Kasbah Learn Hub is a digital
            fortress of learning, where today&apos;s learners prepare for
            tomorrow&apos;s challenges.
          </p>
          <p className="text-xl text-gray-400">
            {" "}
            We chose the word &apos;&apos;Skill&apos;&apos; to reflect what the
            platform delivers: practical, real-world knowledge. And we combined
            it with &apos;&apos;Learn Hub&apos;&apos; to express our goal — to
            be a central, trusted space where learners from Morocco and beyond
            can grow, connect, and achieve their goals.
          </p>
        </div>
      </div>
      {/**======secend section */}

      {/**three section */}
      <div className="flex px-12 space-x-9 z-10">
        <div className="w-3/5 h-[716px] my-auto p-4 space-y-6">
          <div className="space-y-2">
            {/* <p className="text-blue-400 text-2xl">Our Founder</p> */}
            <h1 className="text-[4rem]">
              Meet important features of platform:
            </h1>
          </div>
          <p className="text-xl text-gray-400">
            Kasbah Learn Hub offers a wide range of carefully curated courses
            across key disciplines such as technology, business, design, and
            more. Each course is crafted by industry professionals to ensure
            practical, up-to-date content that meets the needs of today&apos;s
            learners.
          </p>
          <p className="text-xl text-gray-400">
            At Kasbah Learn Hub, learning goes beyond theory. Our expert-led
            video lessons are designed to be engaging, clear, and easy to
            follow, no matter your level. Each course includes hands-on projects
            and real-world examples that help you apply what you learn in
            practical, meaningful ways.
          </p>
          <p className="text-xl text-gray-400">
            With Kasbah Learn Hub, you have the freedom to learn at your own
            pace — anytime, anywhere, and on any device. Whether you&apos;re on
            a laptop at home, a tablet at a café, or your phone on the go, our
            platform is designed to fit seamlessly into your lifestyle.
          </p>
          <p className="text-xl text-gray-400">
            Kasbah Learn Hub goes beyond passive learning by offering community
            support, interactive quizzes, and personalized progress tracking.
            Whether you&apos;re asking questions in the community, testing your
            skills with quizzes, or tracking your milestones, every tool is
            built to support your success.
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
        {/**card one */}
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

        {/**card two */}
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

        {/**card three */}
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
