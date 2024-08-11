
import TabsComponent from "@/components/Description/description"
import EventsBanner from "@/components/EventsBanner/EventsBanner";
import { SponsorMarquee } from "@/components/Indradhanush_Marquee/indradhanush_marquee";

import Layout from "@/components/ui/Layout";

const Events: React.FC = () => {
  return (
    <Layout>
      <EventsBanner/>
      <TabsComponent/>
      <SponsorMarquee/>
    </Layout>
  );
};

export default Events;