import TabsComponent from "@/components/Description/description";
import EventsBanner from "@/components/EventsBanner/EventsBanner";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Events: React.FC = () => {
  const router = useRouter();
  const { eventid } = router.query;
  const [eventData, setEventData] = useState<any>(null);

  const fetchEventById = async (eventid: string) => {
    try {
      const response = await axios.get(
        `https://api.sinusoid.in/events/${eventid}`
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching event:", error);
      return null;
    }
  };

  useEffect(() => {
    if (eventid) {
      const fetchData = async () => {
        const data = await fetchEventById(eventid as string);
        setEventData(data);
        
        // If eventID is not found or an error occurs, redirect to a default event or error page
        if (!data) {
          router.push("/events/defaultEventId");
        }
      };

      fetchData();
    }
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
      <SponsorMarquee />
    </>
  );
};

export default Events;
