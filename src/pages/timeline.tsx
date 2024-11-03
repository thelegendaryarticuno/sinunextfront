import Component from "@/components/timeline/structure";
import SEOComponent from "@/components/SEOComponent/SEOComponent";

const Timeline = () => {
  return (
    <>
      <SEOComponent
        PageTitle="Timeline | siNUsoid v8"
        PageDescription="Check out the timeline of events for siNUsoid v8"
        PageKeywords={["timeline", "events", "schedule", "sinusoid"]}
      />
      <Component />
    </>
  );
};

export default Timeline;
