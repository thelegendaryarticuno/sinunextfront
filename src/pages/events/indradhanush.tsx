import Collab from "@/components/CollaborationSection/CollaborationSection";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import {INDRADHANUSH_FAQ_CATEGORY, INDRADHANUSH_FAQ_DATA,} from "@/components/FaqSection/utils";
import CustomGrid2x2withImage from "@/components/Grid/grid";
import { IndradhanushMarquee } from "@/components/Indradhanush_Marquee/indradhanush_marquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import IHero from "@/components/indradhanushhero/hero";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="Empower those in need with IndradhaNUsh at siNUsoid. Donate usable goods and make a lasting impact. Together, we create hope and brighter futures."
        PageKeywords={[
          "sinusoid",
          "techfest",
          "donation",
          "hope",
          "impact",
          "niit university",
          "support",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="indradhaNUsh | siNUsoid v8"
      />
      <IHero />
      <Collab />
      <CustomGrid2x2withImage
        image1="/images/image.webp"
        image2="/images/image.webp"
        slogan1="Indhradhanush: Uniting Shades of Kindness for a Brighter Tomorrow"
        slogan2="Harmony in Giving: Weaving Hope for a Brighter Future"
      />
      <IndradhanushMarquee />
      <FaqSection
        Generic_Faq_Category={INDRADHANUSH_FAQ_CATEGORY}
        Generic_Faq_Data={INDRADHANUSH_FAQ_DATA}
      />
    </>
  );
};

export default Home;
