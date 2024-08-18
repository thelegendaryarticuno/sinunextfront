
import TabsComponent from "@/components/Description/description";
import EventsBanner from "@/components/EventsBanner/EventsBanner";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";


const Events: React.FC = () => {
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