import { CardsAbout } from "@/components/aboutComponents/cardsAbout";
import { HeroAbout } from "@/components/aboutComponents/heroAbout";
import { SecendSection } from "@/components/aboutComponents/secendSection";

export const metadata = {
  title: "about",
};

const AboutPage = () => {
  return (
    <>
      <HeroAbout />
      <SecendSection />
      <CardsAbout />
    </>
  );
};

export default AboutPage;
