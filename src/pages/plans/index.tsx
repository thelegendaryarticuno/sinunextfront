import React from "react";
import { PlansMarquee } from "@/components/PlansMarquee/plansMarquee";
import Hero from "@/components/Hero/Hero";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import PlansCard from "@/components/PlansCard/plansCard";
import { PLANS_FAQ_CATEGORY,PLANS_FAQ_DATA } from "@/components/FaqSection/utils";
// import SEOComponent from "@/components/SEOComponent/SEOComponent";

const Plans: React.FC = () => {
    return (
        <>
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
