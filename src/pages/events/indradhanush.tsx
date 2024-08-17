import CollaborationSection from "@/components/CollaborationSection/CollaborationSection";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import {
  INDRADHANUSH_FAQ_CATEGORY,
  INDRADHANUSH_FAQ_DATA,
} from "@/components/FaqSection/utils";
import CustomGrid2x2withImage from "@/components/Grid/grid";
import Hero from "@/components/Hero/Hero";
import { SponsorMarquee } from "@/components/Indradhanush_Marquee/indradhanush_marquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription={
          "Empower those in need with IndradhaNUsh at siNUsoid. Donate usable goods and make a lasting impact. Together, we create hope and brighter futures."
        }
        PageKeywords={[
          "sinusoid",
          "techfest",
          "doantion",
          "hope",
          "impact",
          "niit university",
          "support",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="indradhaNUsh | siNUsoid v8"
      />
      <CollaborationSection
        image1Src="/images/ngo.png"
        image2Src="/images/ngo.png"
      />
      <CustomGrid2x2withImage
        image1="/images/image.webp"
        image2="/images/image.webp"
        slogan1="Indradhanush is all about coming together to uplift our communities. Your donation can change lives—let's make it happen!."
        slogan2="Indradhanush is all about coming together to uplift our communities. Your donation can change lives—let's make it happen!."
      />
      <SponsorMarquee />
      <FaqSection
        Generic_Faq_Category={INDRADHANUSH_FAQ_CATEGORY}
        Generic_Faq_Data={INDRADHANUSH_FAQ_DATA}
      />
    </>
  );
};

export default Home;
