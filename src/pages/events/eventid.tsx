import TabsComponent from "@/components/Description/description";
import EventsBanner from "@/components/EventsBanner/EventsBanner";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Events: React.FC = () => {
  const params = useParams();
  const eventid = params?.eventid || "abstruse";

  const [eventData, setEventData] = useState<any>(null);

  const fetchAllEvent = async () => {
    try {
      const response = await axios.get(
        `https://api.sinusoid.in/events/${eventid}`
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllEvent();
      setEventData(data);
    };

    fetchData();
  }, [eventid]);

  return (
    <>
      <SEOComponent
        PageDescription={eventData?.description || "Default description"}
        PageKeywords={["sinusoid", "techfest", eventData?.title || ""]}
        PageOGLImage={eventData?.image || "/logo/logo.png"}
        PageTitle={eventData?.title || "Event Title"}
      />
      <EventsBanner eventData={eventData} />
      <TabsComponent eventData={eventData} />
      {/* <Overview  eventData={eventData} /> */}

      <SponsorMarquee />
    </>
  );
};

export default Events;
