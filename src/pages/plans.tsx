import React from "react";
import { PlansMarquee } from "@/components/PlansMarquee/plansMarquee";
import Hero from "@/components/Hero/Hero";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import { FAQ_CATEGORY, FAQ_DATA } from "@/components/FaqSection/utils";
import PlansCard from "@/components/PlansCard/plansCard";
// import SEOComponent from "@/components/SEOComponent/SEOComponent";

const Plans: React.FC = () => {
    return (
        <>
            <Hero />
            <PlansMarquee />
            <PlansCard />
            <FaqSection
        Generic_Faq_Category={FAQ_CATEGORY}
        Generic_Faq_Data={FAQ_DATA}
      />
        </>
    );
};

export default Plans;
