import AboutSection from "@/components/AboutSection/AboutSection";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import { FAQ_CATEGORY, FAQ_DATA } from "@/components/FaqSection/utils";
import Hero from "@/components/Hero/Hero";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <SponsorMarquee />
      <FaqSection Generic_Faq_Category={FAQ_CATEGORY} Generic_Faq_Data={FAQ_DATA} />
    </>
  );
};

export default Home;
