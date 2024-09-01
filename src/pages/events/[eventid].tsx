import TabsComponent from "@/components/Description/description";
import EventsBanner from "@/components/EventsBanner/EventsBanner";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Events: React.FC = () => {
  const router = useRouter();
  const { eventid } = router?.query || "404";
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
    if (eventid && router) {
      const fetchData = async () => {
        const data = await fetchEventById(eventid as string);
        setEventData(data);
  
        if (!data) {
          router.push("/404");
        } else if (data?.published === false) {
          router.push("/404");
        }
      };
  
      fetchData();
    }
  }, [eventid, router]);

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
