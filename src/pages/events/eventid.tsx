
import TabsComponent from "@/components/Description/description";
import EventsBanner from "@/components/EventsBanner/EventsBanner";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import axios from "axios";
import { useEffect, useState } from "react";


const Events: React.FC = () => {

  const fetchAllEvent = async () => {
    try {
      const response = await axios.get(
        "https://api.sinusoid.in/events/abstruse"
      );
      console.log(response?.data);
      return response?.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      return null;
    }
  };
  const [eventData, setEventData] = useState<any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllEvent();
      setEventData(data);
    };
  
    fetchData();
  }, []);

  return (
    <>
      <SEOComponent
        PageDescription=""
        PageKeywords={["sinusoid", "techfest", ""]}
        PageOGLImage="/logo/logo.png"
        PageTitle=""
      />
      <EventsBanner />
      <TabsComponent />
      <SponsorMarquee />
    </>
  );
};

export default Events;