import AboutSection from "@/components/AboutSection/AboutSection";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import { FAQ_CATEGORY, FAQ_DATA } from "@/components/FaqSection/utils";
import Hero from "@/components/Hero/Hero";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import React from "react";
import Head from "next/head";


const Home: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="Discover siNUsoid, the annual tech fest of NIIT University, back for its 8th edition. Tag along for a ride filled with technology, curiosity and innovation; unleash your potential at siNUsoid v8!"
        PageKeywords={[
          "sinusoid",
          "techfest",
          "tech",
          "fest",
          "competitions",
          "events",
          "niit university",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="siNUsoid v8 | Reflexive Retrograde"
      />
      <Hero />      
      <AboutSection />
      <SponsorMarquee />
      <FaqSection
        Generic_Faq_Category={FAQ_CATEGORY}
        Generic_Faq_Data={FAQ_DATA}
      />
    </>
  );
};

export default Home;
