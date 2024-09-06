import EventsBanner from "@/components/EventsBanner/EventsBanner";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import EventOrganizer from "@/components/eventlisting/eventorganizer";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Events: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "dark" ? "/events/dark.svg" : "/events/light.svg";

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
      <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden mt-16">
        <Image
          src="/events/events-hero.webp"
          alt="Events Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-[-1]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 font-bold">
          <h1 className="text-6xl font-bold mb-8">Events</h1>
        </div>
      </div>
      <Link href='/events/hiveweb3hackathon'>
        <div className="relative flex justify-center items-center w-full h-[30vh] mt-2">
          <Image
            src={logoSrc}
            alt="Theme Specific Logo"
            layout="fill"
            objectFit="fill"
            className="p-0"
          />
        </div>
      </Link>
     <EventOrganizer />
    </>
  );
};

export default Events;
