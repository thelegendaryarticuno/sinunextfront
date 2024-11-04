import Component from "@/components/timeline/structure";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import Banner from "@/components/timeline/timelineHero";
import PlansMarquee from "@/components/PlansMarquee/plansMarquee";

const Timeline = () => {
  return (
    <>
      <SEOComponent
        PageTitle="Timeline | siNUsoid v8"
        PageDescription="Check out the timeline of events for siNUsoid v8"
        PageKeywords={["timeline", "events", "schedule", "sinusoid"]}
      />
      <Banner />
      <Component />
      <PlansMarquee />
    </>
  );
};

export default Timeline;
