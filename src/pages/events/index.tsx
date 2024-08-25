import EventsBanner from "@/components/EventsBanner/EventsBanner";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import EventCard from "@/components/eventlisting/eventcard";
import OnFest from "@/components/eventlisting/onfest";

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
        PageOGLImage="/images/dark.jpg"
        PageTitle="Events | siNUsoid v8"
      />
       <OnFest/>
    </>
  );
};

export default Events;
