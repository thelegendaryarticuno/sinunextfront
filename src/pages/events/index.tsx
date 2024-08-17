import EventsBanner from "@/components/EventsBanner/EventsBanner";
import SEOComponent from "@/components/SEOComponent/SEOComponent";

const Events: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="Are you prepared to redefine technology? Your launching pad is our Tech Fest! Discover the newest styles, take part in hackathons, respawn, and a lot more. Don't miss out!"
        PageKeywords={[
          "sinusoid",
          "techfest",
          "tech",
          "network",
          "learn",
          "register",
          "coding",
          "hackathon",
          "gaming",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="Events | siNUsoid v8"
      />
      <EventsBanner />
    </>
  );
};

export default Events;
