import React from "react";
import { PlansMarquee } from "@/components/PlansMarquee/plansMarquee";
import Hero from "@/components/Hero/Hero";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import PlansCard from "@/components/PlansCard/plansCard";
import {
  PLANS_FAQ_CATEGORY,
  PLANS_FAQ_DATA,
} from "@/components/FaqSection/utils";
import SEOComponent from "@/components/SEOComponent/SEOComponent";

const Plans: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="Join us at siNUsoid v8! Choose from Silver, Gold, and Platinum plans for an exclusive tech fest experience. Enjoy full event access, accommodation, DJ nights, and more. Register now!"
        PageKeywords={[
          "siNUsoid v8",
          "techfest",
          "events registration",
          "silver plan",
          "gold plan",
          "platinum plan",
          "tech events",
          "hackathons",
          "coding competitions",
          "DJ night",
          "campus stay",
          "meals",
          "gaming",
          "accomodation",
        ]}
        PageOGLImage="https://sinusoid.in/socialLogo.jpg"
        PageTitle="Events Registration | siNUsoid v8"
      />
      <Hero />
      <PlansMarquee />
      <PlansCard />
      <FaqSection
        Generic_Faq_Category={PLANS_FAQ_CATEGORY}
        Generic_Faq_Data={PLANS_FAQ_DATA}
      />
    </>
  );
};

export default Plans;
