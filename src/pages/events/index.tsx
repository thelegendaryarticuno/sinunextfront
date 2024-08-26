import EventsBanner from "@/components/EventsBanner/EventsBanner";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import EventCard from "@/components/eventlisting/eventcard";
import EventOrganizer from "@/components/eventlisting/eventorganizer";
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
      <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden mt-20">
        <video
          className="video-element"
          width={1500}
          autoPlay
          loop
          muted
          style={{ filter: "blur(8px)" }}
        >
          <source src="/sponsorBG/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 font-bold">
          <h1 className="text-6xl font-bold mb-8">Events</h1>
        </div>
      </div>

      
       <EventOrganizer/>
    </>
  );
};

export default Events;
