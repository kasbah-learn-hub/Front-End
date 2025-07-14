import { HeroSection } from "@/components/aboutComponents/heroSection";
import { SecendSection } from "@/components/aboutComponents/secendSection";

import { SmoothScrollwrapper } from "@/components/aboutComponents/smoothScrollwrapper";

export const metadata = {
  title: "about",
};
const AboutPage = () => {
  return (
    <SmoothScrollwrapper>
      <HeroSection />
      <SecendSection />
    </SmoothScrollwrapper>
  );
};

export default AboutPage;
