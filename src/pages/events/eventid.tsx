
import TabsComponent from "@/components/Description/description";
import EventsBanner from "@/components/EventsBanner/EventsBanner";
import { IndradhanushMarquee } from "@/components/Indradhanush_Marquee/indradhanush_marquee";


const Events: React.FC = () => {
  return (
    <>
      <EventsBanner/>
      <TabsComponent/>
      <IndradhanushMarquee/>
    </>
  );
};

export default Events;