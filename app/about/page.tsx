// import { HeroSection } from "@/components/aboutComponents/heroSection";

import HeroSection from "@/components/3d-models/HeroSection";
import { SecendSection } from "@/components/aboutComponents/secendSection";
import Header from "@/components/landing-page/header";

export const metadata = {
  title: "about",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <SecendSection />
    </div>

    // </>
  );
};

export default AboutPage;
