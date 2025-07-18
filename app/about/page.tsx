import { HeroSection } from "@/components/aboutComponents/heroSection";
import { SecendSection } from "@/components/aboutComponents/secendSection";

export const metadata = {
  title: "about",
};

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <SecendSection />
    </>
  );
};

export default AboutPage;
